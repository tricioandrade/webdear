import React from 'react';
import Welcome from './Welcome';
import Services from './Services';
import CarouselSlide from './CarouselSlide';
import About from './About';
import Portifolio from './Portifolio';
// import Short from './Short';
// import ShortCards from './ShortCards';
// import News from './News';
// import ContactForm from './ContactForm';

const Home = () => {

    return (
        <>
            {/* <Welcome /> */}
            <CarouselSlide/>
            <Services/>
            <About/>
            <Portifolio/>
        </>
    );
}

export default Home;