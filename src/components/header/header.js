import React, { Component } from 'react'
import Fork_logo from '../../assets/fork_logo.png'
import {
  Row,
  Col
} from 'reactstrap';
export class header extends Component {
  render() {
    return (
      <div>
        <div style={{ height: "90px", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.4), 0 6px 20px 0 rgba(0,0,0,0.18)", backgroundColor:"#e5e5e5"}}>
          <Row >
            <Col>
              <img src={Fork_logo} style={{ height: "50px", width: "220px", float: "left", padding: "10px 0px 0px 50px" }} />
            </Col>
          </Row>
          <Row>
            <Col>
              <h5 style={{ float: "left", padding: "10px 0px 0px 50px" }}>Technologies</h5>
            </Col>
          </Row>

        </div>
      </div>
    )
  }
}

export default header
