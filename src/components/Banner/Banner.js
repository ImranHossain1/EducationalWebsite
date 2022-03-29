import React from 'react';
import "./Banner.css"
import { Carousel } from 'react-bootstrap';
import img1 from '../../images/banner1.jpg';
import img2 from '../../images/banner2.jpg';
import img3 from '../../images/banner3.jpg';

const Banner = () => {
    return (
        <div className='banner mt-2'>
            <Carousel >
            <Carousel.Item interval={5000}>
                <img
                    className="img-fluid"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption  className='text-white bg-dark bg-opacity-10'>
                    <h3>Education is what remains after one has forgotten what one has learned in school</h3>
                    <p >– Albert Einstein</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="fluid"
                    src={img2}
                    alt="Second slide"
                />
                <Carousel.Caption  className='text-white bg-light bg-opacity-10'>
                    <h3>Education is not the filling of a pail, but the lighting of a fire</h3>
                    <p >-W.B. Yeats</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="fluid"
                    src={img3}
                    alt="Third slide"
                />
                <Carousel.Caption  className='text-dark bg-light bg-opacity-10'>
                    <h3>Education is not preparation for life; education is life itself.</h3>
                    <p>-John Dewey</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default Banner;