
import Footer from "../components/Footer/Footer";
import React from 'react';
// @ts-ignore
import {Link} from 'react-router-dom';


import { Card, Container} from "react-bootstrap";



function Help () {

  return (

    <div>
     <Card>

                <Card.Header>
                </Card.Header>


                <Card.Body>

                    <Card.Text>


                        <Container className="text-center">
                            <h1>Help </h1>

                            <h2>Frequently Asked Questions (FAQ): </h2>
                        </Container>

                        <Container  style={{width: '65rem'}} className="justify-content-lg-center ">

                            <br/>
                            <br/>
                            <p> <h4> Are the travel stories real?</h4>

                                Yes! They are all real stories from the users. 
                            </p>

                            <p> <h4> How can I send you my travel stories?</h4>

                                Send us via Contact Us page :)
                            </p>
                        


                        </Container>

                    </Card.Text>

                </Card.Body>
        
            </Card>


 
    </div>
  );
};

export default Help;
