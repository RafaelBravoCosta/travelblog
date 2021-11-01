import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';

import {
    Button,
    Card,
    CardGroup,
    CardImg,
    Col,
    Container,
    Form,
    FormControl,
    Image,
    Row
} from "react-bootstrap";



function Home () {

  return (

    <div>
    
            <Card style={{backgroundColor: "#d4f7ea"}}>

                <Card.Header>
                </Card.Header>


                <Card.Body>

                    <Card.Text>



                        <Container className="text-center">
                            <h1>User's Travel Stories</h1>


                        </Container>


                          
                                <Row>
                                 
                                    <Col xs={10} md={10} >
                                        <div style={{backgroundColor: "#8CABDF", borderRadius:'25px'}} >

                                            <Container style={{padding: "40px"}}>
                                                <Row>

                                                    <Col xs={12} md={12} >
                                                        <Card>
                                                            <CardImg
                                                                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630572642i/2165.jpg"
                                                                alt="" height="200px"/>

                                                            <Card.Footer>
                                                                <small className="text-muted">Last updated 3 mins
                                                                    ago</small>
                                                            </Card.Footer>
                                                        </Card>

                                                    </Col>
                                                    <Col xs={12} md={12}>
                                                        <Card>
                                                            <CardImg
                                                                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630572642i/2165.jpg"
                                                                alt="" height="200px"/>

                                                            <Card.Footer>
                                                                <small className="text-muted">Last updated 3 mins
                                                                    ago</small>
                                                            </Card.Footer>
                                                        </Card>
                                                    </Col>
                                                    <Col xs={12} md={12}>
                                                        <Card>
                                                            <CardImg
                                                                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630572642i/2165.jpg"
                                                                alt=""height="200px"/>

                                                            <Card.Footer>
                                                                <small className="text-muted">Last updated 3 mins
                                                                    ago</small>
                                                            </Card.Footer>
                                                        </Card>
                                                    </Col>
                                                   



                                                </Row>
                                            </Container>

                                        </div>

                                    </Col>
                                       <Col xs={2} md={2}>
                                        <div style={{backgroundColor: "#F4A261", padding:"10px"}} >
                                             <Col xs={12} md={12}>
                                                        <Card>
                                                            <CardImg
                                                                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630572642i/2165.jpg"
                                                                alt=""/>

                                                            <Card.Footer>
                                                                <small className="text-muted">Last updated 3 mins
                                                                    ago</small>
                                                            </Card.Footer>
                                                        </Card>
                                                    </Col>
                                                    <Col xs={12} md={12}>
                                                        <Card>
                                                            <CardImg
                                                                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630572642i/2165.jpg"
                                                                alt=""/>

                                                            <Card.Footer>
                                                                <small className="text-muted">Last updated 3 mins
                                                                    ago</small>
                                                            </Card.Footer>
                                                        </Card>
                                                    </Col>
                                                    <Col xs={12} md={12}>
                                                        <Card>
                                                            <CardImg
                                                                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630572642i/2165.jpg"
                                                                alt=""/>

                                                            <Card.Footer>
                                                                <small className="text-muted">Last updated 3 mins
                                                                    ago</small>
                                                            </Card.Footer>
                                                        </Card>
                                                    </Col>
                                                    <Col xs={12} md={12}>
                                                        <Card>
                                                            <CardImg
                                                                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630572642i/2165.jpg"
                                                                alt=""/>

                                                            <Card.Footer>
                                                                <small className="text-muted">Last updated 3 mins
                                                                    ago</small>
                                                            </Card.Footer>
                                                        </Card>
                                                    </Col>
                                                    
                                                    

                                            <h4>Trends</h4>
                                        </div>

                                    </Col>
                                </Row>
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted"> </Card.Footer>
            </Card>
    </div>
  );
};

export default Home;
