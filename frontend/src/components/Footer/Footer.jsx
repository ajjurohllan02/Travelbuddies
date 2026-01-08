import React from "react";
import './footer.css';

import { Container,Row,Col,ListGroup,ListGroupItem } from "reactstrap";

import { Link } from "react-router-dom";
import logo from '../../assets/images/travel.jpg';


const quick__links = [
  {
    path: "/home",
    display: "Home",
    
  },
  {
    path:"/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];
const quick__links2 = [
  {
    path: "/gallery",
    display: "Gallery",
    
  },
  {
    path:"/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

const Footer = () => {



  return <footer className="footer">
       <Container>
        <Row>
          <Col lg='3'>
          <div className="logo">
             <img src={logo} alt=""/>
             <p>"The world is a book and those who do not travel read only one page"</p>
             <div className="social__links d-flex align_items-center gap-4">
              <span>
                <a
  href="https://www.youtube.com/@yourchannel"
  target="_blank"
  rel="noopener noreferrer"
>
  <i className="ri-youtube-line"></i>
</a>

              </span>
              <span>
                <a
  href="https://wa.me/919610329022"
  target="_blank"
  rel="noopener noreferrer"
>
  <i className="ri-whatsapp-line"></i>
</a>

              </span>
              <span>
                <a
  href="https://www.facebook.com/yourprofile"
  target="_blank"
  rel="noopener noreferrer"
>
  <i className="ri-facebook-circle-line"></i>
</a>

              </span>
              <span>
                <a
  href="https://www.instagram.com/thetravel.buddies"
  target="_blank"
  rel="noopener noreferrer"
>
  <i className="ri-instagram-line"></i>
</a>

              </span>
             </div>
          </div>
          </Col>
          <Col lg='3'>
          <h5 className="footer__link-title">Discover</h5>
          <ListGroup className="footer__quick-links">
             {
              quick__links.map((item,index)=>(
                 <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                 </ListGroupItem>
              ))
             }
          </ListGroup>
          </Col>
          <Col lg='3'>
          <h5 className="footer__link-title">Quick Links</h5>
          <ListGroup className="footer__quick-links">
             {
              quick__links2.map((item,index)=>(
                 <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                 </ListGroupItem>
              ))
             }
          </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className="footer__link-title">Contact</h5>
          <ListGroup className="footer__quick-links">   
                <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span><a
                        href="https://www.google.com/maps?q=Bhiwani,Haryana"
                        target="_blank"
                        rel="noopener noreferrer">
                       <i className="ri-map-pin-line"></i>
                      </a>
                    </span>
                    Address:
                  </h6>
                  <p className="mb-0">Bhiwani,Haryana</p>
                </ListGroupItem>
                <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span><a href="mailto:ajayrohllan2506@gmail.com">
                         <i className="ri-mail-line"></i>
                         </a>
                    </span>
                    Email:
                  </h6>
                  <p className="mb-0">ajayrohllan2506@gmail.com</p>
                </ListGroupItem>
                <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span><a href="tel:8690586083">
                         <i className="ri-phone-fill"></i>
                         </a>
                     </span>
                    Phone:
                  </h6>
                  <p className="mb-0">8690586083</p>
                </ListGroupItem>
                <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span>
                      <a href="https://wa.me/919610329022"target="_blank"rel="noopener noreferrer"><i className="ri-whatsapp-line"></i></a>
                    </span>
                    Phone:
                  </h6>
                  <p className="mb-0">9610329022</p>
                </ListGroupItem>
          </ListGroup>
          </Col>
          <Col lg='12' className="text-center pt-5">
          <p className="copyright"> Developed by Ajay Kumar.</p>
          </Col>
        </Row>
       </Container>
  </footer>
}

export default Footer