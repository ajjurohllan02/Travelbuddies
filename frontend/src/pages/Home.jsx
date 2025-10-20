import React from "react";
import '../styles/home.css';
import{Container,Row,Col} from 'reactstrap';
import heroImg from '../assets/images/IMG_20230118_115305.jpg';
import heroImg02 from '../assets/images/ajju.webp';
import heroVideo from '../assets/images/ajayrohllan02_6931ea6338e14461be809aeb9104e8e9.mp4';
import worldImg from '../assets/images/world.png';
import experienceImg from '../assets/images/bag7777.png'

import Subtitle from '../shared/Subtitle';

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedToursList from "../components/Featured-tours/FeaturedToursList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";

const home = () => {
  return (<>
   {/* ========== hero section start ========== */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
           <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={'Know Before You Go'}/>
                  <img src={worldImg} alt="" />                
              </div>
              <h1>Traveling opens the door to  
              <span className="highlight"> fun </span>
              and
              <span className="highlight"> memories </span>
              </h1>
              <p>“Perhaps travel cannot prevent bigotry, but by demonstrating that all peoples cry, laugh, eat, worry, and die, it can introduce the idea that if we try and understand each other, we may even become friends.”</p>
           </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box">
              <img src={heroImg} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-4">
              <video src={heroVideo} alt="" controls />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-5">
              <img src={heroImg02} alt="" />
            </div>
          </Col>
          <SearchBar />
        </Row>
      </Container>
    </section>  
    {/* ========== hero section start ========== */}
    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className="services__subtitle">What we serve</h5>
            <h2 className="services__title">We offer our best services</h2>
          </Col>
          <ServiceList />
          </Row>
        </Container>
    </section>
      {/* ========== featured tour section start ========== */}
    <section>
      <Container>
        <Row>
          <Col lg='12' className="mb-5">
          <Subtitle subtitle={'Explore'}/>
          <h2 className="featured__tour-title">Our featured tours</h2>
          </Col>
          <FeaturedToursList />
        </Row>
      </Container>
    </section>
      {/* ========== featured tour section end ========== */}  
      {/* ========== experience section start ========== */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
            <div className="experience__img">
              <img src={experienceImg} alt=""/>

            </div>
            </Col>
            <Col lg='6'>
            <div className="experience__content">
            <Subtitle subtitle={"Experience"}/>
            <h2>With our all experience<br/>we will serve you</h2>
            <p>
              Travel far, travel wide, and travel often.
              <br/>
              Wherever you go, go with all your heart.
            </p>
            </div>
            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>2k+</span>
                <h6>Successful trip</h6>
              </div>
              <div className="counter__box">
                <span>2k+</span>
                <h6>Regular clients</h6>
              </div>
              <div className="counter__box">
                <span>2</span>
                <h6>Years experience</h6>
              </div>

            </div>
            </Col>
            

          </Row>
        </Container>
      </section>
      {/* ========== experience section end ========== */}
      {/* ========== gallery section start ========== */}
       <section>
        <Container>
          <Row>
            <Col lg='12'>
            <Subtitle subtitle={'Gallery'}/>
            <h2 className="gallery__title">
              Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg='12'>
              <MasonryImagesGallery/>
            </Col>
          </Row>
        </Container>
       </section>
      {/* ========== gallery section end ========== */}
      {/* ========== testimonial section start ========== */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
            <Subtitle subtitle={'Fans Love'}/>
            <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg='12'>
            <Testimonials/>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ========== testimonial section end ========== */}
       <Newsletter/>

  
  </>
    
); 
};

export default home;
