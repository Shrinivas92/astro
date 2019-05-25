import React, { Component } from 'react'
import { Link, history } from "react-router-dom";
import { connect } from 'react-redux';
import { loginAction } from '../redux/actions/authAction';
import Background from '../../assets/astro.jpg'

import {
  Row,
  Col,
  Label,
  Form,
  Card,
  CardBody,
  Button
} from 'reactstrap';
import TextInput from '../common/TexInput'
import Header from '../header/header'

export class login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: {
        user_name: '',
        password: ''
      }
    }
  }

// On submitting login form the below login function code execute

  login = (e) => {
    e.preventDefault();
    console.log('final state', this.state)
    this.props.loginAction(this.state.login)
    console.log("lod data prop====", this.props.data)
    if (this.props.data.auth.loginUser.access_token !== '') {
     return( this.props.history.push('/home') )
    } else {
      return (this.props.history.push('/'))
    }
  }

// for every single chage in the input fields the below handleOnSubmit function will execute

  handleOnChange = (e) => {
    this.setState({
      login: {
        ...this.state.login,
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    let format = /^[^@]/;
    console.log('login render', this.state)
    return (
      <div
    //   style={{
    //     background: `url(${Background})`,
    //     backgroundPosition: 'center',
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',
    //     height: '90%',
    //     width: '100%',
    //     opacity: '0.7'
    // }}
    >

        {/* The header section imported to login page with header.js file */}

        <Header />
        <div class="container" style={{ marginTop: "9%", height: "800px", width: "400px" }}>

          <Card style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.4), 0 6px 20px 0 rgba(0,0,0,0.18)", backgroundColor: "#e5e5e5" }}>
            <CardBody >
              <h5 style={{ fontFamily: "serif", marginBottom: "20px" }}><b>Login!</b></h5>
              <Form onSubmit={this.login} id="registerForm" style={{ fontFamily: "serif" }} >
                <TextInput
                  name="user_name"
                  type="email"
                  id="email"
                  placeholder="Email"
                  required="true"
                  onChange={this.handleOnChange}
                />
                {/* { !(format.test(this.state.login.email))  && <p style={{color:"red"}}>Please enter the email</p>} */}
                <TextInput
                  name="password"
                  type="password"
                  id="password"
                  placeholder="Password"
                  required="true"
                  onChange={this.handleOnChange}

                />
                <Button type="submit" style={{ height: "40px", width: "300px", borderRadius: "25px" }} color="warning"><b>Login</b></Button>
              </Form>
              <p style={{ paddingTop: "20px" }}>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
              <Button type="submit" style={{ height: "40px", width: "300px", borderRadius: "25px", margin: "10px 0px" }} color="primary"><b>Login Facebook</b></Button>
              <Button type="submit" style={{ height: "40px", width: "300px", borderRadius: "25px" }} color="danger"><b>Login Google</b></Button>
            </CardBody>
          </Card>

        </div>
      </div>
    )
  }
}

// below code contains the data coming from the redux state and stored in variable data that can be accessed throught page

const mapStateToProps = (reduxState) => {
  console.log('redux data is-------', reduxState)
  return { data: reduxState }
}

export default connect(mapStateToProps, { loginAction })(login);

