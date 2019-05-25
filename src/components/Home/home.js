import React, { Component } from 'react'
import Astro from '../astroregistration/astroregistration';
import Header from '../header/header';

import {
  Col,
  Row,
  Button
} from 'reactstrap'
export class home extends Component {

  moveNext = (e) => {
    e.preventDefault();
    this.props.history.push('/astroRegistration')
  }
  render() {
    return (
      <div>
        <Header />
        <Button class="container" style={{width: "200px", marginTop: "8%"}}
        onClick={this.moveNext}
        >Register Astro</Button>
      </div>
    )
  }
}

export default home
