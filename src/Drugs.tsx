import * as React from "react";
import {Col, Row, Badge, Button} from 'react-bootstrap';

import DrugForm from "./DrugForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'



interface DrugCls {
  ID: string;
  Name: string;
  Dose: string;
  Frequency: string;
}

interface DrugClsViewProps extends DrugCls{
  onClickEdit: (id:string) => void;
  onClickDelete: (id:string) => void; 
}

interface IProps {
  title: string;
  content: string;
  hDrugName?: string;
  hDrugDose?: string;
  bLabelEdit: string;
  bLabelDelete: string;
}

interface IState {
  dlgShow: boolean;
  drugs: Array<DrugCls>;
}

class Drugs extends React.Component<IProps, IState> {
  
  public static defaultProps = {
    hDrugName: "Drug Name",
    hDrugDose: "Dose/Frequency",
    bLabelEdit: "Edit",
    bLabelDelete: "Delete",
  }
  
  public constructor(props:IProps){
    super(props)
    
    this.state = {
      dlgShow: false,
      drugs: [
        { ID:"1", Name: "Rosuvastatin", Dose: "10 mg", Frequency: "nocte"},
        { ID:"2", Name: "Perindopril", Dose: "5 mg", Frequency: "nocte"}
      ]
    }

  }
  public render() {

    const drugs = this.state.drugs;

    return (
      <div>
        <Row>
          <Col md="8" style={{textAlign:'center'}}><h3>Medications</h3></Col>
          <Col md={4}>
          <Button size="sm" className="btn-success"
            style={{float: 'right'}} 
            onClick={() => {this.setState({dlgShow:true})} }>
              Add Drug
          </Button>
          </Col>
        </Row>
        <Row>
          <Col md={4} style={{textAlign: 'center'}}><Badge>{this.props.hDrugName}</Badge></Col>
          <Col md={5} style={{textAlign: 'center'}}><Badge>{this.props.hDrugDose}</Badge></Col>
          
        </Row>
        {
          drugs.map((item,v) => {
            return (<DrugsViewItem 
                      key={v}
                      onClickEdit={this.editDrug}
                      onClickDelete={this.deleteDrug}
                      ID={item.ID}
                      Name={item.Name}
                      Dose={item.Dose}
                      Frequency={item.Frequency}      
                    />)
          })
        }
        {
        <DrugForm 
          ref={React.createRef()}
          show={this.state.dlgShow}
          onClickClose={this.onCloseDrugDlg}
          onClickSave={this.onSaveDrugDlg}
        /> 
        
        }
      </div>
    );
  };
  
  onCloseDrugDlg = () => {
    this.setState({dlgShow: false})
  }

  private onSaveDrugDlg() {
    console.log("adding new drug")
  }
  private addDrug = () => {
    this.setState({dlgShow: true})
  }

  editDrug = (id:string) => {
    console.log("edit drug .." + id)
  }

  deleteDrug = (id:string) => {
    console.log("delete drug ..." + id)
  }
}





const DrugsViewItem: React.FC<DrugClsViewProps> = (props) => {

  console.log("DrugsViewItem: ")
  console.log(props.Name + " - " + props.Dose)

  return (
    <Row>
    <Col md={4} style={{textAlign: 'center'}}>{props.Name}</Col>
    <Col md={5} style={{textAlign: 'center'}}>{props.Dose} {props.Frequency}</Col>
    <Col>
      <Button 
        style={{float: 'right', background: 'none', border: 'none'}} size="sm"
        onClick={() => {props.onClickEdit(props.ID)}}>
        <FontAwesomeIcon icon={faEdit} color="green"/>
      </Button>
      <Button 
        style={{float: 'right'}} size="sm"
        onClick={() => {props.onClickDelete(props.ID)}}>
        <FontAwesomeIcon icon={faTrash} color="red"/>  
      </Button>
      
      
  
    </Col>
    </Row>
  )
} 

export default Drugs;