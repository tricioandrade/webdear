import React from 'react';
import { Col, Container, Figure, Row } from 'react-bootstrap';
import img from '../../assets/about/2.jpg'


const About = () => {


    return (
        <section data-aos="fade-up" id='about'>
            <Container>
                <Row>
                    <Col lg={6} className='pb-0 mb-0'>
                        <Figure>
                            <Figure.Image
                                    width={471}
                                    src={img}
                                />
                        </Figure>
                    </Col>
                    <Col lg={6} id='text-content' className=' pb-0 mb-0'>
                        <div className='col-12'>
                            <h4>Sobre</h4>
                            <h2>Saiba quem somos...</h2>
                        </div>
                        <div className="col-12">
                            <p>
                                Somos uma empresa on-line localizada em Luanda, Angola,
                                especialistas em marketing digital mas especificamente design gráfico,
                                desenvolvimento de websites, edição de vídeo, gestor de mídias sociais, gestor de
                                tráfego e muito mais. CFC - Colaboração Foco e Crescimento este é o poder que
                                daremos às sua empresa, a Web Dear tem para si as melhores ordenações para que a
                                sua empresa tenha uma boa apresentação e seja sólida.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;