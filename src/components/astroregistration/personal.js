import React, { Component } from 'react'
import CountriesData from '../data/country.json';

import {
  Row,
  Col,
  Label
} from 'reactstrap';
import TextInput from '../common/TexInput';
import SelectInput from '../common/SelectInput';
import RadioInput from '../common/RadioInput';
import Upload from '../common/Upload';

class personalregistration extends Component {

  constructor(props) {
    super(props)

    this.state = {


    }
  } onChangeMultiSelect
  render() {
    let options = CountriesData;

    let day = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    let month = ['January', 'Febraury', 'March', 'April', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let year = ['2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001']
    let consult = ['Astrologer', 'Physcologist']

    return (
      <div>
        <h5 style={{ margin: "20px 0px" }}><b>Personal Details</b></h5>
        <div>

          <Row >
            <Col md={6}>
              <TextInput
                name="name"
                small="*"
                type="text"
                id="name"
                placeholder="Name"
                required="true"
                onChange={this.props.onChangeTextInput}
                label="Name"
              />
            </Col>
            <Col md={6}>
              <TextInput
                name="email"
                small="*"
                type="email"
                id="email"
                placeholder="Email"
                required="true"
                label="Email"
                onChange={this.props.onChangeTextInput}
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Row>
                <Col md={4}>
                  <SelectInput
                    name="countryCode"
                    type="select"
                    id="countryCode"
                    label="Country Code"
                    options={options}
                    onChange={this.props.onChangeTextInput}
                  />
                </Col>
                <Col md={8}>
                  <TextInput
                    name="phoneNumber"
                    type="number"
                    id="phoneNumber"
                    placeholder="Phone Number"
                    label="Phone Number"
                    onChange={this.props.onChangeTextInput}
                  />
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <Row>
                <Col md={4}>
                  <SelectInput
                    name="alternatePhoneCode"
                    type="select"
                    id="alternatePhoneCode"
                    label="Country Code"
                    options={options}
                    onChange={this.props.onChangeTextInput}
                  />
                </Col>
                <Col md={8}>
                  <TextInput
                    name="alternateNumber"
                    type="number"
                    id="alternateNumber"
                    placeholder="Alternate Number"
                    label="Alternate Number"
                    onChange={this.props.onChangeTextInput}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Row>
                <label style={{ fontFamily: "serif", paddingLeft: "12px" }}><b>Date Of Birth(DD-MM-YYYY)</b></label>
              </Row>
              <Row>
                <Col md={3}>
                  <SelectInput
                    name="day"
                    type="select"


                    id="Day"
                    options={day}
                    onChange={this.props.onChangeTextInput}
                  />
                </Col>
                <Col md={3.5}>
                  <SelectInput
                    name="month"
                    type="select"
                    id="month"
                    options={month}
                    onChange={this.props.onChangeTextInput}

                  />
                </Col>
                <Col md={3}>
                  <SelectInput
                    name="year"
                    type="select"
                    id="year"
                    options={year}
                    onChange={this.props.onChangeTextInput}

                  />
                </Col>
              </Row>

            </Col>
            <Col md={6}>
              <Row>
                <Col>
                  <Label style={{ float: "left" }}><b>Gender</b></Label>
                </Col>
              </Row>

              <RadioInput name="gender"
                type="radio"
                onChange={this.props.onChangeTextInput}
                label1="Male"
                label2="Female"
                value1="male"
                value2="female" />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <TextInput
                name="address"
                type="address"
                id="address"
                placeholder="Address"
                label="Address"
                onChange={this.props.onChangeTextInput}
              />
            </Col>
            <Col md={6}>
              <TextInput
                name="city"
                type="city"
                id="city"
                placeholder="City"
                label="City"
                onChange={this.props.onChangeTextInput}
              />

            </Col>
          </Row>
          <Row>
            
            <Col md={6}>
              <Upload
                name="profile"
                type="file"
                id="profilePic"
                placeholder="Profile Pic"
                label="Profile Photo"
                small="*"
                required="true"
                onChange={this.props.onChangeTextInput}
              />
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default personalregistration
