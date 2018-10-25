import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

class EventForm extends Component {
  state = {
    event: {
      title: "",
      date: "",
      city: "",
      venue: "",
      hostedBy: ""
    }
  };

  onFormSubmit = e => {
    e.preventDefault();
    // console.log(this.state.event);
    this.props.createEvent(this.state.event)
  };

  onInputChange = e => {
    const newEvent = this.state.event;
    newEvent[e.target.name] = e.target.value; //destructuring assignment
    this.setState({
      event: newEvent
    });
  };

  render() {
    const { handleFormCancel } = this.props;
    const { event } = this.state;
    return <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Title</label>
            <input name="title" onChange={this.onInputChange} value={event.title} placeholder="Title" />
          </Form.Field>
          <Form.Field>
            <label>Date</label>
            <input name="date" onChange={this.onInputChange} value={event.date} type="date" placeholder="Date" />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input name="city" onChange={this.onInputChange} value={event.city} placeholder="Location" />
          </Form.Field>
          <Form.Field>
            <label>Place</label>
            <input name="venue" onChange={this.onInputChange} value={event.venue} placeholder="Place" />
          </Form.Field>
          <Form.Field>
            <label>Assigned</label>
            <input name="hostedBy" onChange={this.onInputChange} value={event.hostedBy} placeholder="Assigned To" placeholder="Enter assigned person to task or event!" />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={handleFormCancel} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>;
  }
}

export default EventForm;
