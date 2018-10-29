import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { getEventsForDashboard } from "../eventActions";
import { firestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import EventList from "../EventList/EventList";
import LoadingComponent from "../../../app/layouts/LoadingComponent";
import EventActivity from "../EventActivity/EventActivity";

const mapState = state => ({
  events: state.events,
  loading: state.async.loading
});

const actions = {
  getEventsForDashboard
};

class EventDashboard extends Component {
  async componentDidMount() {
    this.props.getEventsForDashboard();
  }

  handleDeleteEvent = eventId => () => {
    this.props.deleteEvent(eventId);
  };

  render() {
    const { events, loading } = this.props;
    // if (!isLoaded(events) || isEmpty(events))
    if (loading) return <LoadingComponent inverted={true} />;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList loading={loading} events={events} />
        </Grid.Column>

        <Grid.Column width={6}>
          <EventActivity />
        </Grid.Column>
      </Grid>
    );
  }
}
// here we're listening for firestore events (with firestore connect) and then
// we are storing them in our firestoreReducer
// it's better to take back control from firestore and do your own reducer
// dates end up being altered
// events are get with firebase but, storing is with own reducer

export default connect(
  mapState,
  actions
)(firestoreConnect([{ collection: "events" }])(EventDashboard));
