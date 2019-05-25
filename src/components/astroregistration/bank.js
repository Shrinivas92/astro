import React, { Component } from 'react'

import {
  Row,
  Col
} from 'reactstrap';
import TextInput from '../common/TexInput';
import SelectInput from '../common/SelectInput';
import RadioInput from '../common/RadioInput';
import Upload from '../common/Upload'


class bank extends Component {

  render() {
    let account_type = ['Savings', 'Current']
    return (
      <div>
        <h5 style={{ margin: "20px 0px" }}><b>Bank Details</b></h5>
        <div>
          <Row>
            <Col md={6}>
              <TextInput
                name="panCard"
                type="panCard"
                id="panCard"
                placeholder="Pan Card Number"
                label="Pan Card Number"
                small="*"
                onChange={this.props.onChangeTextInput}
              />
            </Col>
            <Col md={6}>
              <TextInput
                name="accountNumber"
                type="accountNumber"
                id="accountNumber"
                placeholder="Account Number"
                label="Account Number"
                onChange={this.props.onChangeTextInput}
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <SelectInput
                name="accountType"
                type="select"
                id="accountType"

                label="Account Type"
                options={account_type}
                onChange={this.props.onChangeTextInput}

              />
            </Col>
            <Col md={6}>
              <TextInput
                name="ifsc"
                type="ifsc"
                id="ifsc"
                placeholder="IFSC Code"
                label="IFSC Code"
                onChange={this.props.onChangeTextInput}
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <TextInput
                name="bankAccountName"
                type="bankAccountName"
                id="bankAccountName"
                placeholder="Bank Account Name"
                label="Bank Account Name"
                onChange={this.props.onChangeTextInput}
              />
            </Col>
            <Col md={6}>
              <TextInput
                name="adhar"
                type="adhar"
                id="adhar"
                placeholder="Adhar Card Number"
                label="Adhar Card Number"
                required="true"
                pattern="[0-9]{12}"
                title="please enter proper 12 digit adhar number"
                onChange={this.props.onChangeTextInput}
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <TextInput
                name="bankName"
                type="text"
                id="bankName"
                placeholder="Bank Name"
                label="Bank Name"
                onChange={this.props.onChangeTextInput}
              />
            </Col>
            <Col md={6}>
              <Upload
                name="bankId"
                type="file"
                id="bankId"
                placeholder="Upload Id Proof"
                label="Upload Id"
                small="*"
                required= "true"
                onChange={this.props.onChangeTextInput}
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>


              <TextInput
                name="shortBio"
                type="shortBio"
                id="shortBio"
                placeholder="Short Bio"
                label="Short Bio"
                onChange={this.props.onChangeTextInput}
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <TextInput
                name="longBio"
                type="textarea"
                id="longBio"
                placeholder="Long Bio"
                label="Long Bio"
                rows="8"

                onChange={this.props.onChangeTextInput}
              />
            </Col>
          </Row>

        </div>
      </div>
    )
  }
}

export default bank
