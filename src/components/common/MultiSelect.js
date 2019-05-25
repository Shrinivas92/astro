import Multiselect from 'react-widgets/lib/Multiselect';

import React from 'react';
import {

  FormGroup,
  Label

} from 'reactstrap';
import 'react-widgets/dist/css/react-widgets.css'

const MultiSelect = ({
  name, type, id, onChange, label, accept, skills, placeholder,category, languages

}) => {
  // console.log('props data', name)
  // const output = ()=> {
  //   if(this.props.skills){
  //     //console.log('props data', this.props.skills)
  //     return(
    
  //     )
  //   }
  // }
  return (

<FormGroup>
        <Label style={{ float: "left" }}><b>{label}</b></Label>
        <Multiselect
          type={type} name={name} id={id} placeholder={placeholder}
          onChange={onChange}
          dropUp
          data={skills}        
          
        />
      </FormGroup>

  
  )

}

export default MultiSelect;

// let colors = ['orange', 'red', 'blue', 'purple']

// let example = (
//   <>
//     <Multiselect
//       disabled
//       data={colors}
//       defaultValue={["orange", "blue"]}
//     />
//     <Multiselect
//       data={colors}
//       defaultValue={["orange", "blue"]}
//       disabled={["red", "purple"]}
//     />
//   </>
// )

// 
