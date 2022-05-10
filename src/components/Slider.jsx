import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Slider = (props) => {
  console.log(props);

  // console.log(images);
  return (
    <div className="container">
      <Swiper spaceBetween={50} slidesPerView={props.perView}>
        {props.photos
          ? props.photos.map((p, i) => (
              <SwiperSlide key={i}>
                <img style={{ width: "100%" }} src={p} alt="" />
              </SwiperSlide>
            ))
          : null}
      </Swiper>
    </div>
  );
};

export default Slider;
