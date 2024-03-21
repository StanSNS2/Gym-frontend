import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Hero.css";
import img1 from "../../Resources/Hero/img1.jpg"
import img4 from "../../Resources/Hero/img4.jpg"
import img20 from "../../Resources/Hero/img20.jpg"
import img5 from "../../Resources/Hero/img5.jpg"
import img26 from "../../Resources/Hero/img26.jpg"
import img16 from "../../Resources/Hero/img16.jpg"
import img22 from "../../Resources/Hero/img22.jpg"
import img29 from "../../Resources/Hero/img29.jpg"
import img21 from "../../Resources/Hero/img21.jpg"
import img19 from "../../Resources/Hero/img19.jpg"
import img2 from "../../Resources/Hero/img2.jpg"
import img28 from "../../Resources/Hero/img28.jpg"
import img13 from "../../Resources/Hero/img13.jpg"
import img8 from "../../Resources/Hero/img8.jpg"
import img14 from "../../Resources/Hero/img14.jpg"
import img3 from "../../Resources/Hero/img3.jpg"
import img18 from "../../Resources/Hero/img18.jpg"
import img17 from "../../Resources/Hero/img17.jpg"
import img10 from "../../Resources/Hero/img10.jpg"
import img27 from "../../Resources/Hero/img27.jpg"
import img9 from "../../Resources/Hero/img9.jpg"
import img12 from "../../Resources/Hero/img12.jpg"
import img24 from "../../Resources/Hero/img24.jpg"
import img6 from "../../Resources/Hero/img6.jpg"

function Hero() {
    const carousel1Images = [
        img1,
        img4,
        img20,
        img5,
        img26,
        img16,
        img22,
        img29,
        img21,
        img19,
        img28,
        img13,
        img10,

    ];

    const carousel2Images = [
        img18,
        img17,
        img2,
        img27,
        img9,
        img12,
        img24,
        img6,
        img8,
        img14,
        img3
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
