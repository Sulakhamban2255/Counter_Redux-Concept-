import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "../redux/CounterSlice";

function Home() {
  const dispatch = useDispatch();
  const [amnt, setAmnt] = useState();
  const count = useSelector((state) => state.counterReducer.count);

  return (
    <Container
      fluid
      className="bg-light vh-100 d-flex justify-content-center align-items-center"
    >
      <Row className="w-50">
        <Col>
          <Card className="text-center shadow-lg">
            <Card.Header as="h1" className="text-danger bg-light">
              Counter
            </Card.Header>
            <Card.Body className="bg-secondary">
              <Card.Title className="text-white">{count}</Card.Title>
              <div className="d-flex justify-content-around mt-4">
                <Button variant="success" onClick={() => dispatch(increment())}>
                  Increment
                </Button>
                <Button variant="danger" onClick={() => dispatch(reset())}>
                  Reset
                </Button>
                <Button variant="info" onClick={() => dispatch(decrement())}>
                  Decrement
                </Button>
              </div>
              <div className=" p-3 mt-3 ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter the amount to increment"
                  onChange={(e) => setAmnt(e.target.value)}
                />
                <button
                  className="btn btn-light mt-3 "
                  onClick={() => dispatch(incrementByAmount(Number(amnt)))}
                  style={{color:'red'}}
                >
                  {" "}
                  Increment By Amount{" "}
                </button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
