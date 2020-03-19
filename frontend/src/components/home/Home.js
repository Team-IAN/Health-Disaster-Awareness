import React, { Component, Fragment } from "react";
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
      <Fragment>
        <Form.Group>
          <div>
            <div className="frontTop">
              <h1>Welcome to the COVID-19 Tracker.</h1>
            </div>
            <div className="frontBottom">
              <h3>
                Get the latest Coronavirus information here, tailored to your
                location.
              </h3>
              <br></br>
              <h4>
                Like your favorite articles and check the User Feed to see what
                other users have Liked.
              </h4>
            </div>
            <img
              className="homePageImage"
              src={"/bacteria-disease.jpg"}
              alt="home image"
            />
          </div>
        </Form.Group>
        <Form.Row className="quick-signup">
          {/* <Col sm={3}>
            <Form.Control
              size="lg"
              name="email"
              class="quick-signup-email"
              type="email"
              placeholder="Email"
            />
          </Col> */}
          <Button
            className="btn-lg btd-dark btn-success"
            variant="primary"
            type="submit"
            href="/log-in"
          >
            Log In
          </Button>
          <Col>
            <Button
              className="btn-lg btd-dark btn-success"
              variant="primary"
              type="submit"
              href="/sign-up"
            >
              Sign Up
            </Button>
          </Col>
        </Form.Row>
      </Fragment>
    );
  }
}

export default Home;
