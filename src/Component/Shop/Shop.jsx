import React, {useState} from 'react';
import {Container, Row, Col, Card, Pagination, Button} from 'react-bootstrap';
import "./Shop.css"
import {FaShoppingCart} from "react-icons/fa";
import {CgDollar} from "react-icons/cg";

const Shop = () => {
    const products = [
        {
            id: 1,
            name: "Product 1",
            description: "Description of Prod sas dsd sd s sa as as sad sadasdas sadsad sad sadsas uct 3",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
            price: 255.58,
        },
        {
            id: 2,
            name: "Product 2",
            description: "Description of Product 2",
            imageUrl: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
            price: 25,
        },
        {
            id: 3,
            name: "Product 3",
            description: "Description of Product 3",
            imageUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
            price: 25,
        },
        {
            id: 4,
            name: "Product 3",
            description: "Description of Product 3",
            imageUrl: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
            price: 25,
        },
        {
            id: 5,
            name: "Product  sasdsa dsad asd asd asd ds ad sad a asd asd ds daasd 3",
            description: "Description of Prod sas dsd sd s sa as as sad sadasdas sadsad sad sadsas uct 3",
            imageUrl: "https://media.istockphoto.com/id/1322220448/photo/abstract-digital-futuristic-eye.jpg?s=612x612&w=0&k=20&c=oAMmGJxyTTNW0XcttULhkp5IxfW9ZTaoVdVwI2KwK5s=",
            price: 25,
        },
        {
            id: 6,
            name: "Product 3",
            description: "Description of Product 3",
            imageUrl: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
            price: 25,
        },
        {
            id: 7,
            name: "Product  sasdsa dsad asd asd asd ds ad sad a asd asd ds daasd 3",
            description: "Description of Prod sas dsd sd s sa as as sad sadasdas sadsad sad sadsas uct 3",
            imageUrl: "https://media.istockphoto.com/id/1322220448/photo/abstract-digital-futuristic-eye.jpg?s=612x612&w=0&k=20&c=oAMmGJxyTTNW0XcttULhkp5IxfW9ZTaoVdVwI2KwK5s=",
            price: 25,
        },
        {
            id: 8,
            name: "Product 3",
            description: "Description of Product 3",
            imageUrl: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
            price: 25,
        },
        {
            id: 9,
            name: "Product  sasdsa dsad asd asd asd ds ad sad a asd asd ds daasd 3",
            description: "Description of Prod sas dsd sd s sa as as sad sadasdas sadsad sad sadsas uct 3",
            imageUrl: "https://media.istockphoto.com/id/1322220448/photo/abstract-digital-futuristic-eye.jpg?s=612x612&w=0&k=20&c=oAMmGJxyTTNW0XcttULhkp5IxfW9ZTaoVdVwI2KwK5s=",
            price: 25,
        },
        {
            id: 10,
            name: "Product  sasdsa dsad asd asd asd ds ad sad a asd asd ds daasd 3",
            description: "Description of Prod sas dsd sd s sa as as sad sadasdas sadsad sad sadsas uct 3",
            imageUrl: "https://media.istockphoto.com/id/1322220448/photo/abstract-digital-futuristic-eye.jpg?s=612x612&w=0&k=20&c=oAMmGJxyTTNW0XcttULhkp5IxfW9ZTaoVdVwI2KwK5s=",
            price: 25,
        },
        {
            id: 11,
            name: "Product 3",
            description: "Description of Product 3",
            imageUrl: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
            price: 25,
        },
        {
            id: 12,
            name: "Product  sasdsa dsad asd asd asd ds ad sad a asd asd ds daasd 3",
            description: "Description of Prod sas dsd sd s sa as as sad sadasdas sadsad sad sadsas uct 3",
            imageUrl: "https://media.istockphoto.com/id/1322220448/photo/abstract-digital-futuristic-eye.jpg?s=612x612&w=0&k=20&c=oAMmGJxyTTNW0XcttULhkp5IxfW9ZTaoVdVwI2KwK5s=",
            price: 255.58,
        },
        {
            id: 13,
            name: "Product  sasdsa dsad asd asd asd ds ad sad a asd asd ds daasd 3",
            description: "Description of Prod sas dsd sd s sa as as sad sadasdas sadsad sad sadsas uct 3",
            imageUrl: "https://media.istockphoto.com/id/1322220448/photo/abstract-digital-futuristic-eye.jpg?s=612x612&w=0&k=20&c=oAMmGJxyTTNW0XcttULhkp5IxfW9ZTaoVdVwI2KwK5s=",
            price: 25,
        },
        {
            id: 14,
            name: "Product 3",
            description: "Description of Product 3",
            imageUrl: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
            price: 25,
        },
        {
            id: 15,
            name: "Product  sasdsa dsad asd asd asd ds ad sad a asd asd ds daasd 3",
            description: "Description of Prod sas dsd sd s sa as as sad sadasdas sadsad sad sadsas uct 3",
            imageUrl: "https://media.istockphoto.com/id/1322220448/photo/abstract-digital-futuristic-eye.jpg?s=612x612&w=0&k=20&c=oAMmGJxyTTNW0XcttULhkp5IxfW9ZTaoVdVwI2KwK5s=",
            price: 25,
        },
        {
            id: 16,
            name: "Product  sasdsa dsad asd asd asd ds ad sad a asd asd ds daasd 3",
            description: "Description of Prod sas dsd sd s sa as as sad sadasdas sadsad sad sadsas uct 3",
            imageUrl: "https://media.istockphoto.com/id/1322220448/photo/abstract-digital-futuristic-eye.jpg?s=612x612&w=0&k=20&c=oAMmGJxyTTNW0XcttULhkp5IxfW9ZTaoVdVwI2KwK5s=",
            price: 25,
        },
        {
            id: 17,
            name: "Product  sasdsa dsad asd asd asd ds ad sad a asd asd ds daasd 3",
            description: "Description of Prod sas dsd sd s sa as as sad sadasdas sadsad sad sadsas uct 3",
            imageUrl: "https://media.istockphoto.com/id/1322220448/photo/abstract-digital-futuristic-eye.jpg?s=612x612&w=0&k=20&c=oAMmGJxyTTNW0XcttULhkp5IxfW9ZTaoVdVwI2KwK5s=",
            price: 25,
        },
        {
            id: 18,
            name: "Product 3",
            description: "Description of Product 3",
            imageUrl: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
        },
        {
            id: 19,
            name: "Product  sasdsa dsad asd asd asd ds ad sad a asd asd ds daasd 3",
            description: "Description of Prod sas dsd sd s sa as as sad sadasdas sadsad sad sadsas uct 3",
            imageUrl: "https://media.istockphoto.com/id/1322220448/photo/abstract-digital-futuristic-eye.jpg?s=612x612&w=0&k=20&c=oAMmGJxyTTNW0XcttULhkp5IxfW9ZTaoVdVwI2KwK5s="
        }
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