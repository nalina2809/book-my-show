import React from "react";
import HeroSlider from "react-slick";

import {NextArrow,PrevArrow} from "./Arrows.component";



const HeroCarousal = () => {
    const settingsLG = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "300px",
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };

        const settings = {
        arrows: true,
        infinte: true,
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };

      const images = [
       "https://images.unsplash.com/photo-1632948415561-8f066bb29611?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=386&q=80",
      "https://images.unsplash.com/photo-1632686428394-7ad2ba08d9e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80",
      "https://images.unsplash.com/photo-1631914289850-b572c63ddafb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=437&q=80",
      "https://images.unsplash.com/photo-1631621450971-e8654e5d7a55?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
      "https://images.unsplash.com/photo-1631730486646-aa2f0eee7c68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=475&q=80",
    ];

return (
  <>
  <div className = "lg:hidden">
    <HeroSlider {...settings}>
      {images.map((image) => (
        <div className="w=full h-52 md:h-64 py-3">
          <img src={image} alt="testing" className ="w-full h-full rounded-md" />
          </div>
      ))}
       </HeroSlider>
    </div>

    <div className = "hidden lg:block"> 
    <HeroSlider {...settingsLG}>
    {images.map((image) => (
        <div className="w=8/12 h-72 px-2 py-3">
          <img src={image} alt="testing" className ="w-full h-full rounded-md" />
          </div>
      ))}
     </HeroSlider>
    </div>
    </>
);
    };


export default HeroCarousal;