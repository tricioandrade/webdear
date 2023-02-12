import React from 'react';
import Welcome from './Welcome';
import Services from './Services';
import CarouselSlide from './CarouselSlide';
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
        </>
    );
}

export default Home;