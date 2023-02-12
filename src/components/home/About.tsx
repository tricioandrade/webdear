import React from 'react';
import { Col, Container, Figure, Row } from 'react-bootstrap';
import img from '../../assets/about/0.png'


const About = () => {


    return (
        <section>
            <Container>
                <Row>
                    <Col lg={6}>
                        <Figure>
                            <Figure.Image
                                    width={471}
                                    src={img}
                                />
                            <Figure.Caption>
                                Nulla vitae elit libero, a pharetra augue mollis interdum.
                            </Figure.Caption>
                        </Figure>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;