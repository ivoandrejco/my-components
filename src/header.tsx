import * as React from 'react'

import {Nav, Navbar, NavDropdown, Form, FormControl} from 'react-bootstrap'

interface IProps {
  handleSearchSubmit: (e:any) => void;
  handleSearchChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
}

const Header:React.FC<IProps> = (props) => {
  const {handleSearchChange,handleSearchSubmit} = props

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="/">Raptor</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/drugs">Drugs</Nav.Link>
        <NavDropdown title="Patiens" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/patients/create">Create Patient</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline onSubmit={handleSearchSubmit}>
        <FormControl 
          type="text" 
          placeholder="Search" 
          className="mr-sm-2" 
          onChange={handleSearchChange}
        />
      </Form>
    </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;