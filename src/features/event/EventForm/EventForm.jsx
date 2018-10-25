import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

class EventForm extends Component {
  render() {
    const { handleFormCancel } = this.props;
    return (
      <Segment>
        <Form>
          <Form.Field>
            <label>Title</label>
            <input placeholder="Name" />
          </Form.Field>
          <Form.Field>
            <label>Date</label>
            <input type="date" placeholder="Date" />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input placeholder="Location" />
          </Form.Field>
          <Form.Field>
            <label>Place</label>
            <input placeholder="Place" />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input placeholder="Enter assigned person to task or event!" />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={handleFormCancel} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default EventForm;
