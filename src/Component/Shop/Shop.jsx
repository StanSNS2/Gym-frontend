import React, {useState} from 'react';
import {Container, Row, Col, Card, Pagination, Button} from 'react-bootstrap';
import "./Shop.css"
import {FaShoppingCart} from "react-icons/fa";
import {CgDollar} from "react-icons/cg";

import img1 from "../../Resources/Shop/img1.png"
import img2 from "../../Resources/Shop/img2.jpg"
import img3 from "../../Resources/Shop/img3.jpg"
import img4 from "../../Resources/Shop/img4.jpg"
import img5 from "../../Resources/Shop/img5.jpg"
import img6 from "../../Resources/Shop/img6.jpg"
import img7 from "../../Resources/Shop/img7.jpg"
import img8 from "../../Resources/Shop/img8.jpg"
import img9 from "../../Resources/Shop/img9.png"
import img10 from "../../Resources/Shop/img10.jpg"
import img11 from "../../Resources/Shop/img11.jpg"
import img12 from "../../Resources/Shop/img12.jpg"
import img13 from "../../Resources/Shop/img13.jpg"
import img14 from "../../Resources/Shop/img14.jpg"
import img15 from "../../Resources/Shop/img15.jpg"
import img16 from "../../Resources/Shop/img16.jpg"
import img17 from "../../Resources/Shop/img17.jpg"
import img18 from "../../Resources/Shop/img18.jpg"
import img19 from "../../Resources/Shop/img19.jpg"

const Shop = () => {
    const products = [
        {
            id: 1,
            name: "Whey Protein",
            description: "Premium whey protein powder for muscle building and recovery. Made with high-quality ingredients and available in various flavors.",
            imageUrl: img1,
            price: 39.99,
        },
        {
            id: 2,
            name: "Creatine Monohydrate",
            description: "Pure micronized creatine monohydrate for increased strength and power. Enhance your performance during high-intensity workouts.",
            imageUrl: img2,
            price: 19.99,
        },
        {
            id: 3,
            name: "BCAA",
            description: "Branch chain amino acids supplement for muscle preservation and endurance. Supports muscle recovery and reduces muscle fatigue.",
            imageUrl: img3,
            price: 29.99,
        },
        {
            id: 4,
            name: "Pre-Workout",
            description: "Energy-boosting pre-workout supplement with caffeine and beta-alanine. Get pumped up and improve focus during your workouts.",
            imageUrl: img4,
            price: 34.99,
        },
        {
            id: 5,
            name: "Fish Oil",
            description: "Omega-3 fish oil supplement for joint health and inflammation reduction. Supports heart health and cognitive function.",
            imageUrl: img5,
            price: 14.99,
        },
        {
            id: 6,
            name: "Multivitamin",
            description: "Comprehensive multivitamin for overall health and well-being. Provides essential vitamins and minerals for daily nutritional support.",
            imageUrl: img6,
            price: 24.99,
        },
        {
            id: 7,
            name: "Glutamine",
            description: "Pure L-glutamine powder for muscle recovery and immune support. Helps reduce muscle soreness and improve post-workout recovery.",
            imageUrl: img7,
            price: 22.99,
        },
        {
            id: 8,
            name: "Casein Protein",
            description: "Slow-digesting casein protein powder for sustained muscle protein synthesis. Ideal for consumption before bedtime.",
            imageUrl: img8,
            price: 49.99,
        },
        {
            id: 9,
            name: "Fat Burner",
            description: "Thermogenic fat burner to support weight loss and increase metabolism. Formulated with natural ingredients.",
            imageUrl: img9,
            price: 29.99,
        },
        {
            id: 10,
            name: "Protein Bar",
            description: "Convenient protein bar for on-the-go nutrition. Packed with protein and low in sugar for guilt-free snacking.",
            imageUrl: img10,
            price: 2.99,
        },
        {
            id: 11,
            name: "Whey Protein",
            description: "Premium whey protein powder for muscle building and recovery.",
            imageUrl: img11,
            price: 39.99,
        },
        {
            id: 12,
            name: "Creatine Monohydrate",
            description: "Pure micronized creatine monohydrate for increased strength and power.",
            imageUrl: img12,
            price: 19.99,
        },
        {
            id: 13,
            name: "BCAA",
            description: "Branch chain amino acids supplement for muscle preservation and endurance.",
            imageUrl: img13,
            price: 29.99,
        },
        {
            id: 14,
            name: "Pre-Workout",
            description: "Energy-boosting pre-workout supplement with caffeine and beta-alanine.",
            imageUrl: img14,
            price: 34.99,
        },
        {
            id: 15,
            name: "Fish Oil",
            description: "Omega-3 fish oil supplement for joint health and inflammation reduction.",
            imageUrl: img15,
            price: 14.99,
        },
        {
            id: 16,
            name: "Glutamine",
            description: "Pure L-glutamine powder for muscle recovery and immune support.",
            imageUrl: img16,
            price: 24.99,
        },
        {
            id: 17,
            name: "Casein Protein",
            description: "Slow-release casein protein powder for sustained muscle repair and growth.",
            imageUrl: img17,
            price: 49.99,
        },
        {
            id: 18,
            name: "Citrulline Malate",
            description: "Nitric oxide booster for enhanced blood flow and muscle pumps during workouts.",
            imageUrl: img18,
            price: 27.99,
        },
        {
            id: 19,
            name: "ZMA",
            description: "Zinc, magnesium, and vitamin B6 complex for better sleep and recovery.",
            imageUrl: img19,
            price: 21.99,
        },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 16;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <Container>
            <Row>
                {currentProducts.map(product => (
                    <Col md={3} key={product.id} className="mb-4">
                        <Card className="h-100 shopCard">
                            <div className="cardImageContainer">
                                <Card.Img variant="top" src={product.imageUrl} className="cardImage"/>
                            </div>
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text className="cardText">
                                    <span> {product.description}</span>
                                    <span className="fw-bolder mt-2"> <CgDollar
                                        className="align-text-bottom"/>Price: ${product.price}</span>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="dark">
                                    <FaShoppingCart className="align-baseline me-2"/>
                                    Add to cart
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Row>
                <Col className="d-flex justify-content-center">
                    <Pagination>
                        {Array.from({length: Math.ceil(products.length / productsPerPage)}, (_, i) => (
                            <Pagination.Item key={i + 1} onClick={() => paginate(i + 1)} active={i + 1 === currentPage}>
                                {i + 1}
                            </Pagination.Item>
                        ))}
                    </Pagination>
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;