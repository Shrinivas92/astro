import React from 'react';
import {
    Row,
    Col,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

const RadioInput = ({
    name, type, onChange, label1, label2, value1, value2
}) => {
    return (
        <Row style={{paddingLeft:"10px"}}>
            <Col md={2}>
                <FormGroup>
                    <Label>
                        <Input type={type} name={name} 
                            onChange={onChange}
                            value={value1}    />

                        {label1}</Label>
                </FormGroup>
            </Col>
            <Col md={2}>
                <FormGroup>
                    <Label>
                        <Input type={type} name={name}
                            onChange={onChange}
                            value={value2} 
                        />
                        {label2} </Label>
                </FormGroup>
            </Col>
        </Row>
    );
}

export default RadioInput;



