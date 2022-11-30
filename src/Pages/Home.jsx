import React from 'react';
import Announcement from "../components/Announcement";
import Categories from '../components/Categories';
import Footer from '../components/Footer';
// import Navbar from '../Components/Navbar';
// import Landing from '../Components/Landing';
import Intro from "../components/Intro";
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import Slider from '../components/Slider';

function Home() {
    return (
        <div>
            <Announcement />
            <Intro />
            <Slider />
            <Categories />
            <Products />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Home;