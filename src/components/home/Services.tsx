import React  from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";



const Services = () => {


    return (
        <section data-aos="fade-up" id="services">
            <Container>
               <Row className='d-flex aligm-items-stretch'>
               <Col lg={4} className='service-box text-start'>
                    <div className="text-box">
                        
                        <h4>Serviços</h4>
                        <h2>Temos os melhores<br/> seviços pra si</h2>
                        <p>
                            Prestamos serviços que impulcionam sua marca a ir além com baixo custo e alta qualidade. Sinta-se em casa para apreciá-los.
                        </p>
                    </div>
                </Col>
                <Col lg={8} className='row'>
                    <Col lg={4} className='service-box d-flex justify-content-baseline'>
                        <div className="box col-12 d-flex flex-column">
                            <span className="icon col-12 text-end">
                                <i className="fa fa-globe" />
                            </span>
                            <span className="text col-12 text-sta">
                                <p>Criação de sites</p>
                            </span>
                        </div>
                    </Col>
                    <Col lg={4} className='service-box'>
                        <div className="box col-12 d-flex flex-column">
                            <span className="icon col-12 text-end">
                                <i className="fa fa-video" />
                            </span>
                            <span className="text col-12">
                            <p> Edição de vídeo</p>
                            </span>
                        </div>
                    </Col>
                    <Col lg={4} className='service-box'>
                        <div className="box col-12 d-flex flex-column">
                            <span className="icon col-12 text-end">
                                <i className="fa fa-image" />
                            </span>
                            <span className="text col-12 text-sta">
                                <p>Edição de imagens</p>
                            </span>
                        </div>
                    </Col>
                    <Col lg={4} className='service-box'>
                        <div className="box col-12 d-flex flex-column">
                            <span className="icon col-12 text-end">
                                <i className="fa fa-layer-group" />
                            </span>
                            <span className="text col-12">
                            <p> Criação de flyers</p>
                            </span>
                        </div>
                    </Col>
                    
                    <Col lg={4} className='service-box'>
                        <div className="box col-12 d-flex flex-column">
                            <span className="icon col-12 text-end">
                                <i className="fa fa-money-bill-alt" />
                            </span>
                            <span className="text col-12 text-sta">
                                <p>Patrocínio, Tráfego pago</p>
                            </span>
                        </div>
                    </Col>
                    <Col lg={4} className='service-box'>
                        <div className="box col-12 d-flex flex-column">
                            <span className="icon col-12 text-end">
                                <i className="fa fa-building" />
                            </span>
                            <span className="text col-12">
                            <p> Criação de logotipo</p>
                            </span>
                        </div>
                    </Col>
                </Col>
               </Row>
            </Container>
        </section>
    )
}
export default Services;