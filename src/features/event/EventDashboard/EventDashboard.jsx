import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import cuid from 'cuid'
// this is the PARENT component we are passing
// down events [] to child sibling components

const eventsData = [
  {
    id: "1",
    title: "Review Business Plan",
    date: "2018-03-27T11:00:00+00:00",
    category: "business",
    description:
      "Set aside 4 hours this week to review business plan outline, research competitive markets, valuation, mission and budget",
    city: "London, UK",
    venue: "London Public Library",
    hostedBy: "Bob",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      },
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      }
    ]
  },
  {
    id: "2",
    title: "Startup Pitch Investor Meeting",
    date: "2018-03-28T14:00:00+00:00",
    category: "drinks",
    description:
      "Investor pre seed event pitch",
    city: "Hollywood, CA",
    venue: "Workspace, Sunset Blvd.",
    hostedBy: "Tom",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
    attendees: [
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      },
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      }
    ]
  }
];

class EventDashboard extends Component {
  // constructor(props) {
  //   super(props);

  state = {
    events: eventsData,
    isOpen: false, 
    selectedEvent: null
  };
  // this.handleFormOpen = this.handleFormOpen.bind(this);
  // this.handleFormCancel = this.handleFormCancel.bind(this);
  //}

  handleFormOpen = () => {
    this.setState({
      selectedEvent: null,
      isOpen: true
    });
  };

  handleFormCancel = () => {
    this.setState({
      isOpen: false
    });
  };

  handleUpdateEvent = (updatedEvent) => {
    this.setState({
      events: this.state.events.map(event => {
        if(event.id === updatedEvent.id) {
          return Object.assign({}, updatedEvent)
        }
      })
    })

  }

  handleEditEvent = (eventToUpdate) => () => {
    this.setState({
      selectedEvent: eventToUpdate,
      isOpen: true
    });
  };

  handleCreateEvent = (newEvent) => {
    newEvent.id = cuid()
    newEvent.hostPhotoURL = './assets/user.png'
    const updatedEvents = [...this.state.events, newEvent]
    this.setState({
      events: updatedEvents, 
      isOpen: false
    })
  }

  render() {
    const { selectedEvent } = this.state;
    return (
      // grid system L 10 w R 6 w
      <Grid>
        <Grid.Column width={10}>
          <EventList onEventEdit={this.handleEditEvent} events={this.state.events} />
        </Grid.Column>

        <Grid.Column width={6}>
          <Button onClick={this.handleFormOpen} positive content="Create" />
          {this.state.isOpen && (
            <EventForm selectedEvent={selectedEvent} createEvent={this.handleCreateEvent} handleFormCancel={this.handleFormCancel} />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

export default EventDashboard;
