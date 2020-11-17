import React from 'react'
import {IPatient} from './Patient'
import {useParams} from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap';

import Comorbidities from './Comorbidities'
import Medications from './Medications';
import SocialHx, {SocialHxForm} from './SocialHx';
import Allergy from './Allergy';


interface IProps {
  patients: IPatient[];
}
const PatientView: React.FC<IProps> = (props) => {
  const params:{id:string} = useParams();
  let p = null;
  const ps:IPatient[] = props.patients.filter( (p) => (p.id === params.id) )
  
  if(ps.length > 0) p = ps[0]
  console.log(p)
  return (
    (p) && 
      <Container>
        <Row>
          <Col>
          <h1>{p.fname} {p.lname} ({p.gender}) {p.dob} </h1>
          <hr />
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Social history</h3>
            <SocialHx patient={p} />
            <SocialHxForm />
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Comorbidities</h3>
            <Comorbidities />
          </Col>
          <Col>
            <h3>Medications</h3>
            <Medications />
            <h3>Allergies</h3>
            <Allergy />
          </Col>
        </Row>
       
      
      </Container>

  )
}

export default PatientView;