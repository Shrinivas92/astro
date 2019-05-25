import React from 'react';
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

const Upload = ({
    name, type, id, onChange, label, accept, small,required
}) => {
    return (
        <FormGroup>
            <Label for={name} style={{ float: "left" }}  class="col-form-label"><b>{label}</b><sup style={{color: "red", marginLeft:"4px"}}><b>{small}</b></sup></Label>
            <Input type={type} name={name} id={id} 
                onChange={onChange} accept={accept} required={required}/>
        </FormGroup>
    );
}

export default Upload;