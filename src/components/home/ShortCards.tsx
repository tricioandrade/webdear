import React  from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


const ShortCards = () => {




    return (
        <section  id="shortCards">
            <Container>
               <Row className='d-flex aligm-items-stretch'>
               <Col lg={6} className='service-box text-start'>
                    <div className="text-box">
                        <h3>Temos os melhores<br/> seviços pra si</h3>
                        <p>
                            Prestamos seviços que impulcionam sua marca a ir além com baixo custo e alta qualidade. Sinta-se em casa para apreciá-los.
                        </p>
                    </div>
                </Col>
                <Col lg={3} className='service-box'>
                    <div className="box col-12 d-flex flex-column">
                        <span className="icon col-12 text-end">
                            <i className="fa fa-globe" />
                        </span>
                        <span className="text col-12 text-sta">
                            <p>Criação de sites</p>
                        </span>
                    </div>
                </Col>
                <Col lg={3} className='service-box'>
                    <div className="box col-12 d-flex flex-column">
                        <span className="icon col-12 text-end">
                            <i className="fa fa-video" />
                        </span>
                        <span className="text col-12">
                           <p> Edição de vídeo.</p>
                        </span>
                    </div>
                </Col>
                <Col lg={3} className='service-box'>
                    <div className="box col-12 d-flex flex-column">
                        <span className="icon col-12 text-end">
                            <i className="fa fa-globe" />
                        </span>
                        <span className="text col-12 text-sta">
                            <p>Lorem, ipsum dolor.</p>
                        </span>
                    </div>
                </Col>
                <Col lg={3} className='service-box'>
                    <div className="box col-12 d-flex flex-column">
                        <span className="icon col-12 text-end">
                            <i className="fa fa-video" />
                        </span>
                        <span className="text col-12">
                           <p> Lorem, ipsum dolor.</p>
                        </span>
                    </div>
                </Col>
                
                <Col lg={3} className='service-box'>
                    <div className="box col-12 d-flex flex-column">
                        <span className="icon col-12 text-end">
                            <i className="fa fa-globe" />
                        </span>
                        <span className="text col-12 text-sta">
                            <p>Lorem, ipsum dolor.</p>
                        </span>
                    </div>
                </Col>
                <Col lg={3} className='service-box'>
                    <div className="box col-12 d-flex flex-column">
                        <span className="icon col-12 text-end">
                            <i className="fa fa-video" />
                        </span>
                        <span className="text col-12">
                           <p> Lorem, ipsum dolor.</p>
                        </span>
                    </div>
                </Col>
               </Row>
            </Container>
        </section>
    )
}
export default ShortCards;