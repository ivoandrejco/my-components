import React, { useState } from 'react'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import {IPatient} from './Patient'

interface PatientsListProps {
  patients: IPatient[];
  href: string;
}

const PatientsList:React.FC<PatientsListProps> = (props) => {
  const { patients, href} = props
  
  return (
    <div>
    <ul className="list-unstyled">
      
      { patients && patients.map( (pt,i) => {
          const link = href + pt.id
          return <Link to={link} key={i}><li key={i}>{pt.fname} {pt.lname}</li></Link>
      })}
    </ul>
    </div>
  )
}

export const PatientsFullList: React.FC<PatientsListProps> = props => {
  const {patients, href} = props

  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Name</th><th>Birthday</th><th>Gender</th><th>Initial Visit</th><th>Tasks</th>
        </tr>
      </thead>
      <tbody>
        {patients.map( (patient, i) => {
          const link = href + patient.id
          return (
            <tr key={i}> 
              <td><Link to={link}>{patient.fname} {patient.lname}</Link></td>
              <td>{patient.dob}</td>
              <td>{patient.gender}</td>
            </tr>
          )
        }

        )}
      </tbody>
    </Table>
    
  )
}


export default PatientsList;