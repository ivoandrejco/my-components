import * as React from "react";
import { Button, Form, ToggleButton } from "react-bootstrap";

export interface IValues {
  [key: string]:any;
};

export interface ISubmitResult {
  success: boolean;
//errors?: IErrors;
}
export interface IFieldProps {
  name: string;
  value?: string;
  label?: string;
  type?: "text" | "email" | "textarea" | "select" | "radio" | "check";
  rows?: number;
  options?: string[];
  placeholder?: string;
}


interface IFormProps {
  defaultValues: IValues;
  onSubmit: (values: IValues) => Promise<ISubmitResult>;
}

interface IFormState {
  values: IValues;
  submitting: boolean;
  submitted: boolean;
}

interface IFormContext {
  values: IValues;
  setValue?: (fieldName:string, value: any) => void;
}

const FormContext = React.createContext<IFormContext>({values:{}});

export class RapForm extends React.Component<IFormProps,IFormState>{
  constructor(props:IFormProps){
    super(props);
    this.state = {
      values: props.defaultValues,
      submitting: false,
      submitted: false
    }
  }

  public static Field:React.FunctionComponent<IFieldProps> = (props) => {
    
    const {name, label, type, rows, options, value, placeholder} = props;
    console.log("Form Props val: " + value)
    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | any>, context:IFormContext) => {
      
      if(context.setValue) {
        context.setValue(props.name,e.target.value);
      }
    }
    return (
      <FormContext.Consumer>
        {context => 
            
              
              <Form.Group>
              { (label && type && ["text","textarea"].includes(type)) && (<Form.Label htmlFor={label}>{label}</Form.Label>) }
              { (type === "text") && (
                  <Form.Control 
                
                    type={type} 
                    id={name} 
                    value={context.values[name]} 
                    placeholder={placeholder}
                    onChange={ (e:React.ChangeEvent<HTMLInputElement>) => handleChange(e,context)}
                  />) 
              }
              { (type === "textarea") && (
                  <Form.Control
                    id={name} 
                    value={context.values[name]}
                    as={type}
                    rows={rows}
                    placeholder={placeholder}
                    onChange={ (e:React.ChangeEvent<HTMLTextAreaElement>) => handleChange(e,context)}
                  />) 
              }   
              { (type === "radio") && (
                  <Form.Check
                    inline
                    type="radio"
                    value={value}
                    name={name}
                    id={name}
                    label={label}
                    onChange={ e => handleChange(e,context)}
                  />)
              } 
              </Form.Group>
            
        
        }
      </FormContext.Consumer>
    )
  }

  public render() {
    const context:IFormContext = {
      values: this.state.values,
      setValue: this.setValue
    }
    return (
      <FormContext.Provider value={context}>
        <Form onSubmit={this.handleSubmit}>
          {this.props.children}
          
          <Button 
            disabled={this.state.submitting || this.state.submitted}
            type="submit"
          >Submit</Button>
        </Form>
      </FormContext.Provider>
    )
  }

  private setValue = (fieldName:string, value: any) => {
    console.log("Form values: " + this.state.values)
    const newValues = {...this.state.values,[fieldName]: value};
    this.setState({values:newValues});
  }

  private validateForm = () => {
    return true;
  }

  private handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const props = this.props
    if(this.validateForm()){
      
      this.setState({submitting:true})
      const result = await this.props.onSubmit(this.state.values)
      this.setState({
        submitted: false,
        submitting: false
      })
      return {success:true}
    }
  }
}

RapForm.Field.defaultProps = {
  type: "text"
};