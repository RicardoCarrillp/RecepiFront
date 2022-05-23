/* eslint-disable no-unused-vars */
import React, { SyntheticEvent } from 'react'
import { LinkContainer } from 'react-router-bootstrap'

import { Container, Nav, Navbar, NavItem,Button } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { RouteComponentProps } from 'react-router';

import axios from 'axios';
import { boolean } from 'yup';
interface props {
    authorized: boolean,
   

}
const Header = ({ authorized }: props) => {
    const user=JSON.parse(localStorage.getItem('user')!);



    // useEffect(()=>{
    //         // eslint-disable-next-line no-console
    //     console.log(window.location.href);

    // })
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
                {authorized?
                 <LinkContainer to="/home">
                    <Navbar.Brand href="/home">RECEPI</Navbar.Brand>
                </LinkContainer>
                
                
                : <LinkContainer to="/">
                <Navbar.Brand href="/">RECEPI</Navbar.Brand>
            </LinkContainer>}
               

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">


                    {authorized ? (
                        <Nav activeKey={location.pathname} className="ms-auto">
                         
                            
                            <Nav.Link as={Link} to="/search" ><Button variant="outline-secondary">Buscar recetas</Button></Nav.Link>
                            <Nav.Link as={Link} to="/random-recipe" ><Button variant="outline-secondary">Recetas random</Button></Nav.Link>
                            <Nav.Link  href="/" onClick={()=>localStorage.clear()}><Button variant="outline-danger">Cerrar sesión</Button></Nav.Link>

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
