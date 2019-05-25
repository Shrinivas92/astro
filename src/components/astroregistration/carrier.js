import React, { Component } from 'react'

import {
  Row,
  Col,
  Label,

} from 'reactstrap';
import TextInput from '../common/TexInput';
import SelectInput from '../common/SelectInput';
import RadioInput from '../common/RadioInput';
import MultiSelect from '../common/MultiSelect';
import Multiselect from 'react-widgets/lib/Multiselect';
import 'react-widgets/dist/css/react-widgets.css'



class carrier extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  handleChange = (e) => {
    var options = e.target.options;
    var value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    // this.props.someCallback(value);
    console.log('value==========', value);
  }

  render() {
    //const { astroskills } = this.props;
    let skills = ['Vedic Astrology', 'Nadi Astrology', 'Numerology', 'Vasthu', 'Gemology', 'Prasana Astrology', 'KP Astrology']
    let category = ['Child Name Consultation', 'Business Name Consultation', 'Gem Stone Consultation', 'Commodity Trading Consultation', 'Match Making']
    let languages = ['Kannada', 'English', 'Hindi', 'Telagu', 'Marathi', 'Tamil']
    let consult = ['Astrologer', 'Physcologist']
    console.log('yes button====', this.props.yesButton)
    return (
      <div>
        <h5 style={{ margin: "20px 0px" }}><b>Professional Details</b></h5>
        <Row>
          <Col md={6}>
            <Row>
              <Col>
                <Label style={{ float: "left" }}> <b>Are you working in any other online portal?</b></Label>
              </Col>
            </Row>
            <RadioInput name="yes"
              type="radio"
              onChange={this.props.onChangeTextInput}
              label1="No"
              label2="Yes"
              value1="_no"
              value2="_yes" />
          </Col>
        </Row>
        {this.props.yesButton == '_yes' ?
          <Row>
            <Col md={6}>
              <TextInput
                name="portal"
                type="portal"
                id="portal"
                placeholder="Portal Name"
                label="Please specify the name of those portals:"
                onChange={this.props.onChangeTextInput}
              />
            </Col>
            <Col md={6}>
              <TextInput
                name="portalEarn"
                type="portalEarn"
                id="portalEarn"
                placeholder="Earning From Portal"
                label="How much do you earn monthly from Astrology"
                onChange={this.props.onChangeTextInput}
              />
            </Col>
          </Row>
          : ''}
        <Row>
          <Col md={6}>
            <SelectInput
              name="consultType"
              type="select"
              id="consultType"

              label="Consultant Type"
              options={consult}
              onChange={this.props.onChangeTextInput}

            />
          </Col>
          <Col md={6}>
            <MultiSelect
              label="Skills"
              name="skills"
              id="skills"
              type="select"
              skills={skills}
              onChange={this.props.onChangeSkills}

            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <MultiSelect
              label="Category"
              name="category"
              id="category"
              type="select"
              skills={category}
              onChange={this.props.onChangeCategory}

            />
          </Col>
          <Col md={6}>
            <MultiSelect
              label="Languages"
              name="languages"
              id="languages"
              type="select"
              skills={languages}
              onChange={this.props.onChangeLanguage}

            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <TextInput
              name="experience"
              type="experience"
              id="expirence"
              placeholder="Expirence"
              label="Expirence"
              onChange={this.props.onChangeTextInput}
            />
          </Col>
          <Col md={6}>
            <TextInput
              name="degree"
              small="*"
              type="degree"
              id="degree"
              placeholder="Highest Degree"
              label="Highest Degree"
              onChange={this.props.onChangeTextInput}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default carrier
