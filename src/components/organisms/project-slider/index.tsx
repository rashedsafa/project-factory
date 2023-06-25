import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { useState } from "react";
import SwiperCore, { Pagination } from "swiper";
import { List } from "../../molecules/list";
import { Button } from "../../atoms/button";
import { Icon } from "../../atoms/icon";

SwiperCore.use([Pagination]);

interface ProjectSliderProps {
  header: string;
  listDescription: string;
  listItems: React.ReactNode[];
  imgSrc: string[];
}

export const ProjectSlider = ({
  header,
  listDescription,
  listItems,
  imgSrc,
}: ProjectSliderProps) => {
  const [swiper, setSwiper] = useState<SwiperCore>();

  return (
    <div className="o-projectSlider">
      <div className="o-projectSlider__listWrapper">
        <div className="o-projectSlider__listHeader">{header}</div>
        <div className="o-projectSlider__listDescription">
          {listDescription}
        </div>
        <List>{listItems}</List>
      </div>
      <div className="o-projectSlider__sliderWrapper">
      <Swiper
        modules={[Pagination]}
        pagination={{ type: "fraction" }}
        spaceBetween={16}
        centeredSlides={true}
        slidesPerView="auto"
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
        onActiveIndexChange={(swiper) => {
          console.log("active index is", swiper.activeIndex);
        }}
        className="o-projectSlider__slider"
      >
        {imgSrc.map((image, index) => (
          <SwiperSlide>
            <img src={image} alt={index.toString()} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="o-projectSlider__buttonWrapper">
        <Button
          className="button"
          onClick={() => {
            swiper?.slidePrev();
          }}
          icon
        >
          <Icon icon="left_arrow" />
        </Button>
        <Button
          className="button"
          onClick={() => {
            swiper?.slideNext();
          }}
          icon
        >
          <Icon icon="right_arrow" />
        </Button>
      </div>
      </div>
    </div>
  );
};
