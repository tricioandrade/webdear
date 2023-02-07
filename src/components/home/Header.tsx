import React from 'react';
import { Container, Nav, NavDropdown, Navbar , Col, Row, Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Header = () => {

    return (
            <Navbar bg="" expand="lg" variant='light' className='d-block fixed-top navbar-menu'>
                <Container>
                    <Navbar.Brand href="#home"> 
                    <img src={logo} alt='webdear' /> 
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />        
                    <Navbar.Collapse id="basic-navbar-nav" className='flex-row-reverse'>
                        
                        <Nav className="me-4">
                           <Nav.Item><Link to='#header' className='nav-link'><i className='fa fa-home'/> Home</Link></Nav.Item>
                           <Nav.Item><Link to='#header' className='nav-link'><i className='fa fa-question-circle'/> Sobre</Link></Nav.Item>
                           <Nav.Item><Link to='#header' className='nav-link'><i className='fa fa-phone-alt'/> Contacto</Link></Nav.Item>
                           <Nav.Item><Link to='#header' className='nav-link'><i className='fa fa-store'/> Serviços</Link></Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}


export default Header; 