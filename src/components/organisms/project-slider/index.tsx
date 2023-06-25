import React, { useEffect } from "react";
import Swiper from 'swiper';
import 'swiper/swiper.min.css';

interface ProjectSliderProps {
  imgSrc: string[];
}

export const ProjectSlider: (props: ProjectSliderProps) => JSX.Element = ({ imgSrc }) => {
  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      // Swiper configuration options
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {/* Place your slides here */}
        {imgSrc.map((image,index)=>(<div className="swiper-slide" key={index}>
          <img src={image} alt={index.toString()} />
        </div>))}
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};
