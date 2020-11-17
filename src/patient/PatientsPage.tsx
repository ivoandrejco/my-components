import React, {Component} from 'react'
import {Route, Link, Switch, RouteComponentProps, Redirect} from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap'
import {connect} from 'react-redux'


import {IPatient} from './Patient'
import CreatePatient from './CreatePatient'
import PatientView from './PatientView'
import {PatientsFullList} from './PatientsList'
import PatientsList from './PatientsList'

import {getPatients, addPatient} from './PatientsActions'
import {IApplicationState} from '../Store';

interface IProps extends RouteComponentProps {
  getPatients: typeof getPatients;
  getPatient: (id:string) => IPatient;
  addPatient: (p:IPatient) => boolean;
  loading: boolean;
  patients: IPatient[];
  activePatient: IPatient;
  
}


class PatientsPage extends Component<IProps> {
  public constructor(props:IProps) {
    super(props)
  }

  public componentDidMount() {
    this.props.getPatients(); 
  }


  private handleOnClose = () => {
    console.log("onClose createPatient" + this)
    this.props.history.push("/patients")
  }

  private addPatient = (p:IPatient):boolean => {
    console.log("PatientsPage:addPatient: " + this.props)
    this.props.addPatient(p)
    return true
  }

  public render () {
    const props = this.props
    props.patients.map( (p:IPatient) => console.log("PP:  ---------- " +p.fname))
    console.log("Patients page: " +props.patients)
    return (
      <Container>
        <Row>
          <Col lg={2} className="border-right">
            <h4>Patients</h4>
            <Link to="/patients/create"><span className="text-success">Create Patient</span></Link>
            <PatientsList patients={this.props.patients} href="/patients/view/" />
          </Col>
          <Col>
          <Switch>
            <Route path="/patients/create">
              <CreatePatient addPatient={this.addPatient} handleOnClose={this.handleOnClose} />
            </Route>
            <Route path="/patients/view/:id">
              <PatientView patients={this.props.patients} />
            </Route>
            <Route path="/patients">
              <PatientsFullList patients={this.props.patients} href="/patients/view/" />
            </Route>
          
          </Switch>
          </Col>
        </Row>
      <Col lg={3}>PatientsPage</Col>
      </Container>
    )
  }
}


const mapStateToProps = (store: IApplicationState) => {
  return {
    loading: store.patients.patientsLoading,
    patients: store.patients.patients
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getPatients: () => dispatch(getPatients()),
    addPatient: (p:IPatient) => dispatch(addPatient(p))
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(PatientsPage)

//export PatientsPage;
