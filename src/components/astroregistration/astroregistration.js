import React, { Component } from 'react'
import Personal from '../astroregistration/personal'
import Carrier from '../astroregistration/carrier';
import Bank from '../astroregistration/bank';

import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Card,
  CardBody
} from 'reactstrap';

export class astroregistration extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }


  handleSubmit = (e) => {
    e.preventDefault();
    console.log('the state is=====', this.state)
  }

  render() {
    console.log('parent state', this.state);
    return (
      // Total view of Astrologer registration form rendering from three components
      <div>
         <Row>
          <Col md={2}> </Col>
          <Col md={8} style={{ margin: "70px 0px" }}>
        <h2 style={{ fontFamily: "serif", marginBottom: "20px" }}><b>Registration Form</b></h2>
        <Card style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.4), 0 6px 20px 0 rgba(0,0,0,0.18)", borderRadius:"12px"}}>
          <CardBody style={{backgroundColor:"#e5e5e5"}}>
            <Form onSubmit={this.handleSubmit} id="registerForm" style={{ fontFamily: "serif" }} >

          {/* Code for personal details section rendering from personal.js component */}
              <Personal
                onChangeTextInput={(e) => this.setState({ [e.target.name]: e.target.value })}
              />

              {/* Code for professtional details rendering from carrier.js file  */}
              <Carrier
                onChangeTextInput={(e) => this.setState({ [e.target.name]: e.target.value })}
                yesButton={this.state.yes}
                onChangeSkills={(skills) => this.setState({ skills })}
                onChangeCategory={(category) => this.setState({ category })}
                onChangeLanguage={(languages) => this.setState({ languages })}
              />

              {/* Code for Banking details rendering from bank.js component */}
              <Bank
                onChangeTextInput={(e) => this.setState({ [e.target.name]: e.target.value })}
              />
              <Button type="submit" style={{ float: "right",height:"50px", width:"150px", borderRadius:"25px"}} color="warning"><b>Submit</b></Button>
            </Form>
          </CardBody>
        </Card>
        </Col>
      </Row>        
      </div>
    )
  }
}

export default astroregistration
