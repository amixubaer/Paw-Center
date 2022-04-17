import React from 'react';
import { Form, Button, Row } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div>
            <div id="about" className="row ">
                
                <div className="title1 text-center my-5">
                    <div> <img src='https://avatars.githubusercontent.com/u/62588064?v=4' alt=''></img> </div>
                    <div>
                    <h3>I am Abu Jubaer. I am a web developping student. My goal is to become a web developper in a world top class company. I have a goal to learn React and laravel in next 5 months. After that I will try to learn angularjs. It'd be helpful for my web developping career.</h3>
                    
                    </div>
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