import React from 'react';
import { Form, Button, Row } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div>
            <div id="about" className="row cover1">
                <div className="col-md-6">

                </div>

                <div className="title1 col-md-6 my-5">
                    
                    <h3>We Are The Best Friend of Your Pet</h3>
                    <p className="text-white text-center mt-3">
                        Paw Center is managed by Dr. Abdur Rahman. Here you will get all your pet related help in a single place. Don't get worried with your pet. If anytime you need any kind of medical attention just call Paw Center. </p>
                   
                </div>
            </div>


            <section class="subscribe py-5 my-5">
                <div class="container py-5">
                    <div class="row d-flex align-items-center py-5">
                        <div class="sub col-12 col-md-6 col-lg-6">
                            <div>
                                <h3>Subscribe Newsletter</h3>
                                <p>Get e-mail updates about our latest shop and special offers.</p>
                            </div>
                        </div>

                        <div class="form col-12 col-md-6 col-lg-6">
                            <div>
                                <Form>
                                    <Row controlId="formBasicEmail" className="align-items-center">
                                        <Form.Control type="email" placeholder="Enter email" />
                                        <Button variant="primary button-3 " type="submit">Subscribe</Button>
                                    </Row>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;