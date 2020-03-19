import React, { Component } from "react";
import actions from "../../services/index";
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Col,
  Row,
  Button
} from "react-bootstrap";

class Home extends Component {
  async componentDidMount() {
    //actions.test()
  }
  render() {
    return (
      <div>
        <div className="frontTop">
          <h1>Welcome to the COVID-19 Tracker.</h1>
        </div>
        <div className="frontBottom">
          <h3>
            Get the latest Coronavirus information here, tailored to your
            location.
          </h3>
          <h4>
            Like your favorite articles and check the User Feed to see what
            other users have Liked.
          </h4>
        </div>

        <Form.Row>
          <Col>
            <Form.Control
              name="email"
              class="quick-signup-email"
              type="email"
              placeholder="Email"
            />
          </Col>
          <Col>
            <Button
              className="btn-md btd-dark btn-block btn-success"
              variant="primary"
              type="submit"
              href="/sign-up"
            >
              Sign Up
            </Button>
          </Col>
        </Form.Row>
      </div>
    );
  }
}

export default Home;
