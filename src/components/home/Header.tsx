import React from 'react';
import { Container, Nav, NavDropdown, Navbar , Col, Row, Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Header = () => {

    return (
            <header  className='d-block fixed-top'>
                <Navbar bg="" expand="lg" variant='light' className='d-block navbar-menu'>
                    <Container>
                        <Nav className="me-4 justify-content-start">
                            <Nav.Item><Link to='#header' className='nav-link'><i className='fa fa-envelope'/> webdear@outlook.pt</Link></Nav.Item>
                            <Nav.Item><Link to='#header' className='nav-link'><i className='fa fa-phone-square'/> +244 952 991 773</Link></Nav.Item>
                        </Nav>
                        <Nav className="me-4 justify-content-end">
                            <Nav.Item><Link to='#header' className='nav-link'><i className='fab fa-facebook'/></Link></Nav.Item>
                            <Nav.Item><Link to='#header' className='nav-link'><i className='fab fa-whatsapp'/></Link></Nav.Item>
                            <Nav.Item><Link to='#header' className='nav-link'><i className='fab fa-instagram'/></Link></Nav.Item>
                            <Nav.Item><Link to='#header' className='nav-link'><i className='fab fa-twitter'/></Link></Nav.Item>
                        </Nav>
                    </Container>
                </Navbar>
                <Navbar bg="" expand="lg" variant='light' className='d-block navbar-menu'>
                <Container>
                    <Navbar.Brand href="#home"> 
                    <img src={logo} alt='webdear' /> 
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />        
                    <Navbar.Collapse id="basic-navbar-nav" className='d-lg-flex justify-content-end'>
                        <Nav className="me-4 justify-content-end">
                           <Nav.Item><Link to='#header' className='nav-link'><i className='fa fa-home'/> Home</Link></Nav.Item>
                           <Nav.Item><Link to='#header' className='nav-link'><i className='fa fa-question-circle'/> Sobre</Link></Nav.Item>
                           <Nav.Item><Link to='#header' className='nav-link'><i className='fa fa-phone-alt'/> Contacto</Link></Nav.Item>
                           <Nav.Item><Link to='#header' className='nav-link'><i className='fa fa-store'/> Serviços</Link></Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </header>
    )
}


export default Header; 