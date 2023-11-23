import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";

const Org = () => {
  return (
    <div className="font-oswald bg-accent_200">
      <div className=" h-8 flex justify-center text-center">
        <h2 className="m-auto text-bg_200">Organisations</h2>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={true}
        modules={([Pagination], [Autoplay])}
        autoplay={{ delay: 2000 }}
        className="mySwiper pt-3 px-3"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col justify-center items-center">
              <div>
                <img className="rounded-lg" src={slide.imageSrc} />
              </div>
              <div>
                <p className="text-center text-bg_200">{slide.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Org;

const slidesData = [
  { title: "Sunday School", imageSrc: "avatar.png" },
  { title: "Yuvajana Sakhyam", imageSrc: "avatar.png" },
  { title: "Sevika Sangam", imageSrc: "avatar.png" },
  { title: "Edavika Mission", imageSrc: "avatar.png" },
  { title: "Parish Choir", imageSrc: "avatar.png" },
  { title: "Senior Members Fellowship", imageSrc: "avatar.png" },
];
