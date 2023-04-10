import React from 'react';
import { Card, Col, Container, Figure, Row } from 'react-bootstrap';
import img from '../../assets/portfolio/1.jpeg';
import img2 from '../../assets/portfolio/2.jpeg';
import img4 from '../../assets/portfolio/4.jpeg';
import img5 from '../../assets/portfolio/5.jpeg';
import img6 from '../../assets/portfolio/6.jpeg';
import img3 from '../../assets/portfolio/3.jpeg';


const portfolio = () => {


    return (
        <section data-aos="fade-up" id='portfolio'>
            <Container>
                <Row>
                    <Col lg={4} className='row'>
                        <div className='col-12'>
                            <h4>Portifólio</h4>
                            <h2>Conheça mais dos nossos serviços</h2>
                            <p>
                                Prestamos serviços que impulcionam sua marca a ir além com baixo custo e alta qualidade. Sinta-se em casa para apreciá-los.
                            </p>
                        </div>
                    </Col>
                    <div className='row col-6 list-cards'>
                        <div className='portfolio-box '>
                            <Figure>
                                <Figure.Image src={img} />
                                <Figure.Caption>
                                    <h5>Title</h5>
                                    Lorem, ipsum dolor.
                                </Figure.Caption>
                            </Figure>
                        </div>
                        <div className='portfolio-box'>
                            <Figure>
                                <Figure.Image src={img2} />
                                <Figure.Caption>
                                    <h5>Title</h5>
                                    Lorem, ipsum dolor.
                                </Figure.Caption>
                            </Figure>
                        </div>
                        <div className='portfolio-box'>
                            <Figure>
                                <Figure.Image src={img3} />
                                <Figure.Caption>
                                    <h5>Title</h5>
                                    Lorem, ipsum dolor.
                                </Figure.Caption>
                            </Figure>
                        </div>
                        <div className='portfolio-box'>  
                            <Figure>
                                <Figure.Image src={img4} />
                                <Figure.Caption>
                                    <h5>Title</h5>
                                    Lorem, ipsum dolor.
                                </Figure.Caption>
                            </Figure>
                        </div>
                        <div className='portfolio-box'>
                            <Figure>
                                <Figure.Image src={img5} />
                                <Figure.Caption>
                                    <h5>Title</h5>
                                    Lorem, ipsum dolor.
                                </Figure.Caption>
                            </Figure>
                        </div>
                        <div className='portfolio-box'>
                            <Figure>
                                <Figure.Image src={img6} />
                                <Figure.Caption>
                                    <h5>Title</h5>
                                    Lorem, ipsum dolor.
                                </Figure.Caption>
                            </Figure>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default portfolio;