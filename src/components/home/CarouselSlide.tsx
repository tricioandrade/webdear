import React from 'react';
import { Carousel, Col } from 'react-bootstrap';
import img1 from '../../assets/slide/6.jpg';
import img2 from '../../assets/slide/2.jpg';
import img3 from '../../assets/slide/1.jpg';
import shadow from '../../assets/shadow.png';
import { Link } from 'react-router-dom';

const CarouselSlide = () => {

    const carousel = () => {

        const items = [
            {
                image: img1, 
                caption: {
                    interval: 4500,
                    title: 'Bem-vindo a WebDear',
                    text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
                },
                imageAlt: ''
            },
            {
                image: img2, 
                caption: {
                    interval: 4500,
                    title: 'Bem-vindo a WebDear',
                    text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
                },
                imageAlt: ''
            },
            {
                image: img3, 
                caption: {
                    interval: 4500,
                    title: '',
                    text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
                },
                imageAlt: ''
            }
        ];

        return items.map( (item, key) => {
            return <Carousel.Item  style= {{  height: '85vh' }} interval={ item.caption.interval }>
                        <img style={{
                            width: '100%',
                            height:'100%',
                            objectFit: 'cover'
                        }} src={ item.image } 
                            className="d-block w-100" 
                            alt={ item.imageAlt } />
                        <Carousel.Caption>
                            <p>Bem-vindo a WebDear</p>
                            <h2>O seu futuro <br/>começa aqui</h2>
                            <p className='d-sm-none d-lg-block'>Um novo começo o aguarda </p>
                            <Link to='#' className='btn btn-link'>Saber mais</Link>
                        </Carousel.Caption>
                    </Carousel.Item>
        });

    }

    return (
        <>
            <Carousel  className='mb-0 owl-carousel' fade>
                { carousel() }    
            </Carousel>
            {/* <Col lg={12} className='shadow-img'> <img src={ shadow } /> </Col> */}
        </>
    );
}

export default CarouselSlide;