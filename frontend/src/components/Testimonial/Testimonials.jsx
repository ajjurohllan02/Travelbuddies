import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../assets/images/Screenshot_20250923-113309~2-removebg-preview.jpg';
import ava02 from '../../assets/images/Screenshot_20250923-115352~2.png';
import ava03 from '../../assets/images/vijay2.jpeg';
import ava04 from '../../assets/images/ajju2.jpeg';


const Testimonials = () => {
    const settings={
         dots:true,
         infinite:true,
         autoplay:true,
         speed:1000,
         swipeToSlide:true,
         autoplaysSpeed:2000,
         slidesToShow:3,

         responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true,
               },
            },
            {
                breakpoint:576,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                    
               },
            },
         ]
    }
  return <Slider {...settings}>
    <div className ="testimonial py-4 px-3">
        <p>First of all let me thank you for designing such a wonderful and memorable tour for my family. Ever since we got in touch with you, we could see your commitment of making our trip memorable and the best it could be. It was indeed a smooth sailing for us. Everything was available to us at ease.</p>
    <div className ='d-flex align-items-center gap-4 mt-3'>
         <img src={ava01} className="w-25 h-25 rounded-2"alt=""/>
         <div>
            <h5 className="mb-0 mt-3">Kunal Abhijeet</h5>
            <p>Customer</p>
         </div>
    </div>
    </div>
    <div className ="testimonial py-4 px-3">
        <p>I booked my Kedarkantha trek through Travel Buddies and had a wonderful experience. The arrangements were very good from hotels to transport, everything was well managed. The driver and guide were polite and helpful, and they made the journey comfortable. The agency also kept checking if everything was going fine, which I really appreciated.</p>
    <div className ='d-flex align-items-center gap-4 mt-3'>
         <img src={ava02} className="w-25 h-25 rounded-2"alt=""/>
         <div>
            <h5 className="mb-0 mt-3">Ankesh Singh</h5>
            <p>Customer</p>
         </div>
    </div>
    </div>
    <div className ="testimonial py-4 px-3">
        <p>I recently went on a trip to Dayara Bugyal with Travel Buddies, and it was one of the best experiences of my life. The trek was a little tiring, but the beautiful mountains and fresh air made it all worth it. The green meadows looked like something out of a movie. When I reached the top, the view of the snow-covered peaks was amazing. I felt very peaceful and happy and satisfied with company's facilities.</p>
    <div className ='d-flex align-items-center gap-4 mt-3'>
         <img src={ava03} className="w-25 h-25 rounded-2"alt=""/>
         <div>
            <h5 className="mb-0 mt-3">Vijay kumar</h5>
            <p>Customer</p>
         </div>
    </div>
    </div>
    <div className ="testimonial py-4 px-3">
        <p>Travel Buddies made my Kedarkantha trek an unforgettable experience. From the moment I booked the trip, their team was professional and attentive to my needs. The accommodations were comfortable, and the food provided during the trek was delicious and energizing. The guides were knowledgeable about the area and ensured our safety throughout the journey. I highly recommend Travel Buddies for anyone looking to explore the Himalayas.</p>
    <div className ='d-flex align-items-center gap-4 mt-3'>
         <img src={ava04} className="w-25 h-25 rounded-2"alt=""/>
         <div>
            <h5 className="mb-0 mt-3">Ajju</h5>
            <p>Customer</p>
         </div>
    </div>
    </div>
  </Slider>
};

export default Testimonials
