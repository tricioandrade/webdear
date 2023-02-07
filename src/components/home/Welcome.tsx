import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import img1 from '../../assets/slide/4.jpg';
import img2 from '../../assets/slide/5.jpg';
import img3 from '../../assets/slide/6.jpg';
import { Link } from 'react-router-dom';
const Welcome = () => {


    return (
        <section id='homeBackground' style={{
            background: "url(" + img2  +")"
        }}>
            <Container className="welcome">
                <Row>
                    <Col sm={12} lg={8} >
                        <p>Bem-vindo ao lar</p>
                        <h1>
                            O seu futuro <br/>começa aqui 
                        </h1>    
                        <p>Lorem ipsum dolor adipisicing elit.
                            Tenetur modi  in quidem?</p>
                    </Col>
                    <Col lg={8}>
                        <div className='d-grid gap-2 d-md-block text-end'>
                            <Link to='#form' className='btn btn-primary'><i className='fa fa-shopping-bag'/> Encomendar</Link>
                            <Link to='#form' className='btn btn-primary'><i className='fa fa-layer-group'/> Portifólio</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    
    );
}

export default Welcome;