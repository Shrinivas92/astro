import React from 'react';
import {
    FormGroup,
    Label,
    Input
} from 'reactstrap';

const TextInput = ({
    name, type, placeholder, id, onChange, label, rows, cols, small, pattern,required, title
}) => {
    return (
        <FormGroup>
            <Label for={name} style={{ float: "left" }}><b>{label} </b><sup style={{color: "red"}}><b>{small}</b></sup></Label>
            <Input type={type} name={name} id={id} placeholder={placeholder} rows={rows} cols={cols} pattern={pattern} title={title} required={required}
                onChange={onChange} />
        </FormGroup>
    );
}

export default TextInput;