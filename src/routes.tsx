import * as React from 'react'
import PatientsPage from './patient/PatientsPage'

import {Container,Row,Col} from 'react-bootstrap'

import {BrowserRouter as Router, Route} from 'react-router-dom'
import App from './App'
import Drugs from './Drugs'
import CreatePatient from './patient/CreatePatient'

const Routes:React.FC = () => {

  return (
    <Router>
      <Route path="/" component={App}></Route>
      <br /> 
      <Route path="/patients" component={PatientsPage}></Route>
            
      <Route path="/drugs" component={Drugs}></Route>    
    </Router>
  )

}

export default Routes;