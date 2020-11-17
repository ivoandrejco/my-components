import { stringify } from 'querystring';
import React from 'react';
import { Button, Form, FormControlProps, ToggleButtonGroup } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router-dom';

import {RapForm, IFieldProps, IValues, ISubmitResult} from '../RapForm';
import { Gender, IPatient, ISocFamHx } from './Patient';

interface cpProps {
  handleOnClose: () => void;
  addPatient: (p:IPatient) => boolean;
}


const formFields: IFieldProps[] = [
  { name: 'fname', type: "text", placeholder: 'First Name' },
  { name: 'lname', type: "text",  placeholder: 'Last Name' },
  { name: 'dob', type: "text", placeholder: 'Birthday dd/mm/yyyy' },
  { name: 'gender', type: "radio", value: Gender.MALE, label: "Male"},
  { name: 'gender', type: "radio", value: Gender.FEMALE, label: "Female"} 
]

export default class CreatePatient extends React.Component<cpProps> {
  constructor(props:cpProps) {
    super(props)
  }

  public render() {
    console.log(formFields)
    return (
      <RapForm 
          onSubmit={this.handleOnSubmit}
          defaultValues={{fname:'',lname:'',dob:''}}> 
          <h3>New Patient</h3>
          {formFields.map( (field,i) => {
            return <RapForm.Field key={i} {...field} />
          })}
         
         <Button onClick={this.props.handleOnClose}>Close</Button> 
      </RapForm>
    )
  }

  private handleOnSubmit = async (values:IValues)=> {
    console.log(values)
    
    let p:IPatient = {id:"d3",fname:"Anika",lname: "Andrejco", dob: "17/05/2014", gender:Gender.FEMALE,shx_fhx: {smoker:false,etoh:false}}
    Object.keys(p).map( (key:string, i:number) => {
      Reflect.set(p,key, values[key])
      console.log("values["+key+"] = ")
      //p[key] = values[key]
    })
   // values.forEach( (element:string) => {
   //   p[element] = values[element]
   // });
    //create IPatient object and then pass to the function
    p.id = uuidv4()
    this.props.addPatient(p)
    return {
      success: true
    }
  }
}

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}