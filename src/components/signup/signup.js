import React, { Component } from 'react'
import { Link, history } from "react-router-dom";
import { baseUrl } from '../utils/utils'
import { connect } from 'react-redux';
import classnames from 'classnames';
import  { newUser }  from '../redux/actions/authAction';
import {
  Card,
  CardBody,
  Form,
  NavItem,
  Nav,
  NavLink,
  Button
} from 'reactstrap';
import TextInput from '../common/TexInput'
import Header from '../header/header'

export class signup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      confirmPassword: '',
      signup: {
        
        user_name: '',
        password: '',        
      }
    }
    //this.toggle = this.toggle.bind(this);
    // this.state = {
    //   activeTab: '1'
    // };
  }

  // this block is callaed when user click on signup button and form is executed

  signUp = (e) => {
    e.preventDefault();
    console.log('state', this.state) 
    console.log("props data==",this.props.newUser)
    this.props.newUser(this.state.signup);  
  };

  handleOnChange = (e) => {
    this.setState({
      signup: {
        ...this.state.signup,
        [e.target.name]: e.target.value
      }
    })
  }
  handleOnChanged=(e)=> {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

 componentWillReceiveProps(nextProps) {
  console.log('console in component update ', nextProps)
  if(nextProps.data.auth.userData === 'SUCCESS'){
    return (  this.props.history.push('/')
    )
  }
}
 
  render() {   
    // const err = this.props.data.userData.error;
    console.log("present state", this.state)
    // console.log("redux data in render", this.props)
    // console.log('error', err)
    
    return (
      <div>
        {/* snippet rendering header component from header.js component */}
        <Header />

        {/* code for sign page importing components from textInputs.js*/}
        <div class="container" style={{ marginTop: "7%", height: "800px", width: "400px" }}>
          
          <Card style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.4), 0 6px 20px 0 rgba(0,0,0,0.18)", backgroundColor:"#e5e5e5"}}>
            <div>
            <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Tab1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Moar Tabs
            </NavLink>
          </NavItem>
        </Nav>
            </div>
            <CardBody>
              <h5 style={{ fontFamily: "serif", marginBottom: "20px" }}><b>Sign Up!</b></h5>
              <Form onSubmit={this.signUp} id="registerForm" style={{ fontFamily: "serif" }} >
                {/* <TextInput
                  name="name"
                  type="text"
                  id="name"
                  placeholder="Name"
                  required="true"
                  onChange={this.handleOnChange}
                /> */}
                <TextInput
                  name="user_name"
                  type="email"
                  id="email"
                  placeholder="Email"
                  required="true"
                  onChange={this.handleOnChange}
                />
                {/* {err === 'Requested user_name Already exists' && <p style={{color: "red", fontSize: "14px"}}>Email already exist</p>} */}
                <TextInput
                  name="password"
                  type="text"
                  id="password"
                  placeholder="Password"
                  required="true"
                  onChange={this.handleOnChange}
                />
                <TextInput
                  name="confirmPassword"
                  type="text"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  required="true"
                  onChange={this.handleOnChanged}
                />
                {this.state.signup.password !== this.state.confirmPassword && this.state.confirmPassword.length>0 && <p style={{color: "green", fontSize: "14px"}}> Password Not Matching</p>}
                <Button type="submit" style={{ height: "50px", width: "150px", borderRadius: "25px" }} color="warning"><b>Sign Up</b></Button>
              </Form>
              <p style={{ paddingTop: "20px" }}>Already have an account? <Link to='/'>Login</Link></p>

              <p style={{ paddingTop: "20px" }}><Link to='/mobileSignUp'>Sign Up with Mobile Number? </Link></p>
            </CardBody>
          </Card>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (reduxState) => {
  console.log('redux data is-------', reduxState)
  return { data: reduxState }
}

export default connect(mapStateToProps, {  newUser })(signup);
