/* eslint-disable no-unused-vars */
import React, { SyntheticEvent } from 'react'
import { LinkContainer } from 'react-router-bootstrap'

import { Container, Nav, Navbar, NavItem } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { RouteComponentProps } from 'react-router';

import axios from 'axios';
import { boolean } from 'yup';
interface props {
    authorized: boolean,
   

}
const Header = ({ authorized }: props) => {
    const user=JSON.parse(localStorage.getItem('user')!);

    // const logoutHandler=(e:SyntheticEvent)=> {
    //     e.preventDefault();

    //     if (authorized) {
    //         localStorage.clear();
    //         // history.push('/login');            
    //     }
        
        
    // }

    return (
        <Navbar style={{ backgroundColor: '#2E3339' }} variant="dark" expand="lg">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand href="/">RECEPI</Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">


                    {authorized ? (
                        <Nav className="ms-auto">
                            
                            <Nav.Link href="/" onClick={()=>localStorage.clear()}>Logout</Nav.Link>
                          
                            
                        </Nav>
                    ) : (
                        <Nav className="ms-auto">

                            <LinkContainer to="/login">
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/singup">
                                <Nav.Link>Sing up</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    )}



                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
