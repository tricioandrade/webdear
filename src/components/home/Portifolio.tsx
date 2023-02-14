import React from 'react';
import { Card, Col, Container, Figure, Row } from 'react-bootstrap';
import img from '../../assets/slide/1.jpg';
import img2 from '../../assets/slide/2.jpg';
import img3 from '../../assets/slide/3.jpg';


const portfolio = () => {


    return (
        <section data-aos="fade-up" id='portfolio'>
            <Container>
                <Row>
                    <Col lg={12} className='row'>
                        <div className='col-12'>
                            <h4>Pórtifólio</h4>
                            <h2>Conheça mais dos nossos serviços</h2>
                        </div>
                    </Col>
                    <Col lg={12} className='row d-flex align-items-stretch justify-content-center'>
                        <div className='col-4 portfolio-box '>
                            <div className='portfolio-content'>
                                <img src={img} />
                                <div className="portfolio-caption">
                                    <h5>Title</h5>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-4 portfolio-box'>
                            <div className='portfolio-content'>
                                <img src={img2} />
                                <div className="portfolio-caption">
                                    <h5>Title</h5>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-4 portfolio-box'>
                            <div className='portfolio-content'>
                                <img src={img3} />
                                <div className="portfolio-caption">
                                    <h5>Title</h5>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-4 portfolio-box'>
                            <div className='portfolio-content'>
                                <img src={img2} />
                                <div className="portfolio-caption">
                                    <h5>Title</h5>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-4 portfolio-box'>
                            <div className='portfolio-content'>
                                <img src={img3} />
                                <div className="portfolio-caption">
                                    <h5>Title</h5>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-4 portfolio-box'>
                            <div className='portfolio-content'>
                                <img src={img} />
                                <div className="portfolio-caption">
                                    <h5>Title</h5>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default portfolio;