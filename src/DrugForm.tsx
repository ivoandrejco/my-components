import * as React from "react";
import Modal from "react-bootstrap/Modal";
import {Button, Form, Col, FormControlProps} from "react-bootstrap"



interface IProps {
  bLabel:string;
  dlgTitle: string;
  show: boolean;
  onClickClose: () => void;
  onClickSave: () => void;
}

interface DrugFormState {
  show: boolean;
}

class DrugForm extends React.Component<IProps,DrugFormState> {

  public static defaultProps = {
    bLabel: "Add",
    dlgTitle: "New Drug",
    show: false,
  }
  
  public render () {
    //const [show, setShow] = useState(false);
    

    return (    
        <Modal show={this.props.show}>
          <Form onSubmit={this.handleSubmit}>
            <Modal.Header className="closeButton">
              <Modal.Title>{this.props.dlgTitle}</Modal.Title>
            </Modal.Header>
          
            <Modal.Body>
              <Form.Group controlId="name">
              <Form.Row>
                <Form.Label>Drug</Form.Label>
                <Form.Control type="text" placeholder="Drug Name" />
              </Form.Row>
              </Form.Group>

              <Form.Group controlId="dose">
              <Form.Row>
                <Col>
                <Form.Label>Dose</Form.Label>
                <Form.Control type="text" placeholder="Dose" />
                </Col>
                <Col>
                <Form.Label>Frequency</Form.Label>
                <Form.Control type="text" placeholder="Frequency" /> 
                </Col>
              </Form.Row>
              </Form.Group>

              
              <Form.Group controlId="comment">
              <Form.Row>
                <Form.Label>Comment</Form.Label>
                <Form.Control type="text" placeholder="Comment" />
              </Form.Row>
              </Form.Group>
            </Modal.Body>
          
            <Modal.Footer>
              <Button variant="secondary" onClick={ () => {this.props.onClickClose()} }>Close</Button>
              <Button type="submit" variant="primary" onClick={() => {this.props.onClickSave()}}>Save</Button>
            </Modal.Footer>
          </Form>
      </Modal>

    )
  }
  private handleSubmit = (event:React.FormEvent<FormControlProps>) => {
    event.preventDefault();
    console.log("event received" + event.currentTarget);
  }
}

export default DrugForm;