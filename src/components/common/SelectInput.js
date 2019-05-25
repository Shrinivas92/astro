import React from 'react';
import {
  
    FormGroup,
    Label,
    Input

} from 'reactstrap';

const SelectInput = ({
    name, type, placeholder, id, onChange, label, options, value, multiple
}) => {
    const output = options.map((eachUser, index) => {
        if (options.length > 31) {
            return (<option value={eachUser.code}>{eachUser.name} - {eachUser.code}</option>)
        }
        else {
            return (<option>{eachUser}</option>)
        }

    })
    return (
        <FormGroup>
            <Label for={name} style={{ float: "left" }}><b>{label}</b></Label>
            <Input type={type} name={name} id={id} placeholder={placeholder}
                multiple={multiple}
                onChange={onChange} >
                {output}
            </Input>
        </FormGroup>
    );
}

export default SelectInput;
