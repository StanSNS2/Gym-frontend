import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Hero.css";

function Hero() {
    const carousel1Images = [
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    ];

    const carousel2Images = [
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    ];

    return (
        <div className="carouselContainer">
            <Carousel data-bs-theme="dark" className="carousel" indicators={false}>
                {carousel1Images.map((image, index) => (
                    <Carousel.Item key={index} interval={3000}>
                        <div className="sliderImageContainer">
                            <img
                                className="sliderImage"
                                src={image}
                                alt={`Slide ${index + 1}`}
                            />
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>

            <Carousel data-bs-theme="dark" className="carousel" indicators={false}>
                {carousel2Images.map((image, index) => (
                    <Carousel.Item key={index} interval={3000}>
                        <div className="sliderImageContainer">
                            <img
                                className="sliderImage"
                                src={image}
                                alt={`Slide ${index + 1}`}
                            />
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default Hero;
