import React from 'react';
import { Form, Button, Row } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div>
            <div id="about" className="row ">
                
                <div className="title1 text-center my-5">
                    <div> <img src='https://media.istockphoto.com/photos/portrait-of-male-doctor-in-white-coat-and-stethoscope-standing-in-picture-id1327024466?b=1&k=20&m=1327024466&s=170667a&w=0&h=vcw4Exhv4pkR8fMVLNXhNESaKq1HbYwJ1iElLlQBxI0='></img> </div>
                    <div>
                    <h3>I am Dr. MD Abdur Rahman. I am a pet specialist. I give all kind of pet treatments. If you need any kind of medical attention for your beloved pet, dont waste time. Contact me fast. All my services are in resonable price.</h3>
                    
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