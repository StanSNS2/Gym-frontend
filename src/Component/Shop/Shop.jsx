import React, {useState} from 'react';
import {Button, Card, Col, Container, Dropdown, Pagination, Row} from 'react-bootstrap';
import "./Shop.css"
import {FaBolt, FaListAlt, FaShoppingCart, FaSort, FaTimes} from "react-icons/fa";
import {CgDollar} from "react-icons/cg";

const Shop = () => {
    const products = [
        {
            id: 1,
            name: "Whey Protein",
            description: "Premium whey protein powder for muscle building and recovery. Made with high-quality ingredients and available in various flavors.",
            imageUrl: "https://res.cloudinary.com/dejmsrjrx/image/upload/v1711021673/gym-shop/img1_dt8vr1.png",
            price: 39.99,
        },
        {
            id: 2,
            name: "Creatine Monohydrate",
            description: "Pure micronized creatine monohydrate for increased strength and power. Enhance your performance during high-intensity workouts.",
            imageUrl: "https://res.cloudinary.com/dejmsrjrx/image/upload/v1711021772/gym-shop/img2_gtpxwg.jpg",
            price: 19.99,
        },
        {
            id: 3,
            name: "BCAA",
            description: "Branch chain amino acids supplement for muscle preservation and endurance. Supports muscle recovery and reduces muscle fatigue.",
            imageUrl: "https://res.cloudinary.com/dejmsrjrx/image/upload/v1711021774/gym-shop/img3_sxtxii.jpg",
            price: 29.99,
        },
        {
            id: 4,
            name: "Pre-Workout",
            description: "Energy-boosting pre-workout supplement with caffeine and beta-alanine. Get pumped up and improve focus during your workouts.",
            imageUrl: "https://res.cloudinary.com/dejmsrjrx/image/upload/v1711021775/gym-shop/img4_v911r6.jpg",
            price: 34.99,
        },
        {
            id: 5,
            name: "Fish Oil",
            description: "Omega-3 fish oil supplement for joint health and inflammation reduction. Supports heart health and cognitive function.",
            imageUrl: "https://res.cloudinary.com/dejmsrjrx/image/upload/v1711021777/gym-shop/img5_pgri5i.jpg",
            price: 14.99,
        },
        {
            id: 6,
            name: "Multivitamin",
            description: "Comprehensive multivitamin for overall health and well-being. Provides essential vitamins and minerals for daily nutritional support.",
            imageUrl: "https://res.cloudinary.com/dejmsrjrx/image/upload/v1711021779/gym-shop/img6_hiarzi.jpg",
            price: 24.99,
        },
        {
            id: 7,
            name: "Glutamine",
            description: "Pure L-glutamine powder for muscle recovery and immune support. Helps reduce muscle soreness and improve post-workout recovery.",
            imageUrl: "https://res.cloudinary.com/dejmsrjrx/image/upload/v1711021781/gym-shop/img7_itl420.jpg",
            price: 22.99,
        },
        {
            id: 8,
            name: "Casein Protein",
            description: "Slow-digesting casein protein powder for sustained muscle protein synthesis. Ideal for consumption before bedtime.",
            imageUrl: "https://res.cloudinary.com/dejmsrjrx/image/upload/v1711021783/gym-shop/img8_ecqyfi.jpg",
            price: 49.99,
        },
        {
            id: 9,
            name: "Fat Burner",
            description: "Thermogenic fat burner to support weight loss and increase metabolism. Formulated with natural ingredients.",
            imageUrl: "https://res.cloudinary.com/dejmsrjrx/image/upload/v1711021784/gym-shop/img9_xhni13.png",
            price: 29.99,
        },
        {
            id: 10,
            name: "Protein Bar",
            description: "Convenient protein bar for on-the-go nutrition. Packed with protein and low in sugar for guilt-free snacking.",
            imageUrl: "https://res.cloudinary.com/dejmsrjrx/image/upload/v1711021786/gym-shop/img10.jpg",
            price: 2.99,
        },
        {
            id: 11,
            name: "Whey Protein",
            description: "Premium whey protein powder for muscle building and recovery.",
            imageUrl: "https://res.cloudinary.com/dejmsrjrx/image/upload/v1711021788/gym-shop/img11.jpg",
            price: 39.99,
        },
        {
            id: 12,
            name: "Creatine Monohydrate",
            description: "Pure micronized creatine monohydrate for increased strength and power.",
            imageUrl: "https://res.cloudinary.com/dejmsrjrx/image/upload/v1711021579/gym-shop/img12_fxu7rc.jpg",
            price: 19.99,
        },
        {
            id: 13,
            name: "BCAA",
            description: "Branch chain amino acids supplement for muscle preservation and endurance.",
            imageUrl: "https://res.cloudinary.com/dejmsrjrx/image/upload/v1711021581/gym-shop/img13_psszim.jpg",
            price: 29.99,
        },
        {
            id: 14,
            name: "Pre-Workout",
            description: "Energy-boosting pre-workout supplement with caffeine and beta-alanine.",
            imageUrl: "https://res.cloudinary.com/dejmsrjrx/image/upload/v1711021583/gym-shop/img14_aqcowd.jpg",
            price: 34.99,
        },
        {
            id: 15,
            name: "Fish Oil",
            description: "Omega-3 fish oil supplement for joint health and inflammation reduction.",
            imageUrl: "https://res.cloudinary.com/dejmsrjrx/image/upload/v1711021584/gym-shop/img15_xnwhle.jpg",
            price: 14.99,
        },
        {
            id: 16,
            name: "Glutamine",
            description: "Pure L-glutamine powder for muscle recovery and immune support.",
            imageUrl: "https://res.cloudinary.com/dejmsrjrx/image/upload/v1711021586/gym-shop/img16_run1th.jpg",
            price: 24.99,
        },
        {
            id: 17,
            name: "Casein Protein",
            description: "Slow-release casein protein powder for sustained muscle repair and growth.",
            imageUrl: "https://res.cloudinary.com/dejmsrjrx/image/upload/v1711021587/gym-shop/img17_i1wprh.jpg",
            price: 49.99,
        },
        {
            id: 18,
            name: "Citrulline Malate",
            description: "Nitric oxide booster for enhanced blood flow and muscle pumps during workouts.",
            imageUrl: "https://res.cloudinary.com/dejmsrjrx/image/upload/v1711021669/gym-shop/img18_pmlwcy.jpg",
            price: 27.99,
        },
        {
            id: 19,
            name: "ZMA",
            description: "Zinc, magnesium, and vitamin B6 complex for better sleep and recovery.",
            imageUrl: "https://res.cloudinary.com/dejmsrjrx/image/upload/v1711021671/gym-shop/img19_n8rqaj.jpg",
            price: 21.99,
        },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const productsPerPage = 16;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    const clearSearch = () => {
        setSearchQuery('');
        setCurrentPage(1);
    };

    return (
        <Container>
            <div className="topShopSection">
                <div className="searchInputContainer">
                    <h4>Search:</h4>

                    <input
                        maxLength={20}
                        type="text"
                        className="searchInput ms-3"
                        placeholder="Search for product..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />

                    {searchQuery && (
                        <Button variant={"dark"} className="inputClearButton fw-bolder ms-2" onClick={clearSearch}>
                            Clear <FaTimes/>
                        </Button>
                    )}
                </div>

                <div className="dropDownButtons">
                    <Dropdown className="me-3">
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                            <FaBolt className="align-baseline"/>
                            <span className="ms-1 fw-bolder align-text-bottom">Flash Deals</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Up to 50% Off</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Up to 30% Off</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Up to 10% Off</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className="me-3">
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                            <FaListAlt className="align-baseline"/>
                            <span className="ms-2 fw-bolder align-text-bottom">Category</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Fat Burners</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Proteins</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Gym equipment</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                            <FaSort className="align-baseline"/>
                            <span className="ms-1 fw-bolder align-text-bottom">Order by:</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Price</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Newest</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Rating</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>


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

            {filteredProducts.length === 0 && searchQuery && (
                <Row>
                    <div className="noResultsMessage">
                        <span>No products found for:</span>
                        <span>'{searchQuery}'.</span>
                    </div>
                </Row>
            )}
            <Row>
                <Col className="d-flex justify-content-center mt-4">
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