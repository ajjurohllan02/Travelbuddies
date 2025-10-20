import React from 'react';
import './newsletter.css';

import { Container,Col,Row } from 'reactstrap';
import trekker from '../assets/images/email.png';


const handleChange=()=>{
  alert("Subscribed Successfully");
}

const Newsletter = () => {
  return <section className="newsletter">
    <Container>
        <Row>
            <Col lg='6'>
            <div className="newsletter__content">
                 <h2>Subscribe now to get more travelling details</h2>
                 <div className="newsletter__input">
                      <input type="email" placeholder='Enter your email'/>
                      <button className="btn newsletter__btn " onClick={handleChange}>Subscribe</button>
                 </div>
                 <p>Once you’re ready to fill the pages of a photo book with all your favorite vacation photos, consider adding a few of your top quote picks for captions!</p>
            </div>
            </Col>
            <Col lg='6'>
            <div className="newsletter__img">
                 <img src={trekker} alt=''/>
            </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default Newsletter
