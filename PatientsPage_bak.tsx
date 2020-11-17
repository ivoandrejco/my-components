import React, {Component} from 'react'
import {Container, Row, Col, Form} from 'react-bootstrap'
import {RapForm} from '../RapForm'

import {IPatient,patients} from "./Patient"


interface IProps {

}
interface IState {
  searchResult: Array<any>;
}

export default class PatientsPage extends Component<IProps,IState> {
  public constructor(props:IProps) {
    super(props)
    this.state = {
      searchResult:[]
    }
  }

  public render() {
    return (
      <Container>
      <Row>
        <Col xs={6}>
      <header className="App-header">
        
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        </Col>  
        <Col xs={4}>
          <RapForm 
          onSubmit={ (e:React.FormEvent) => {} }
          defaultValues={{name:"Ivo",email:"ivo@gmail.com", comment:"bla bla"}}
          >
            <RapForm.Field name="name" type="text" label="Name"/>
            <RapForm.Field name="email" label="Email" />
            <RapForm.Field name="comment" type="textarea" label="Comment" rows={6}/>
          </RapForm>
        
        </Col>
        <Col xs={2}>
          <SearchForm onChange={this.handleOnChange} onSubmit={this.handleOnSubmit}/>
          <ul>
            {this.state.searchResult.map( (r:IPatient, i:number) => {
              return (
                <li key={i}>{r.fname} {r.lname}</li>
              )
            })}
          </ul>
        </Col>
      </Row>
      </Container>
    )
  }

  private handleOnChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log("onChange: " + e.target.value)
    const val = e.target.value
    let ptsearch = [];
    if(val) {
      let ptsearch = patients.filter( p => { const name = p.fname.toLowerCase() + " " + p.lname.toLowerCase(); return name.includes(val) } )
      this.setState({searchResult:ptsearch})
    } else {
      this.setState({searchResult:[]})
    }
  }

  private handleOnSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault()
    console.log("Synthetic event .. " + e + ".... state " + this.state.searchResult + " ... " + e.target)
  }
}


interface SearchFormProps {
  onSubmit: (e:React.SyntheticEvent<EventTarget>) => void;
  onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchForm : React.FC<SearchFormProps> = (props) => {
  return (
    <Form onSubmit={props.onSubmit}>
        <Form.Group controlId="name">
          <Form.Row>
            <Form.Control type="text" placeholder="Type patient name" onChange={props.onChange}/>
          </Form.Row>
        </Form.Group>  
    </Form>
  )
}