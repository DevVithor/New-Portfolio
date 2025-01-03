import { Swiper, SwiperSlide } from "swiper/react";

export function SoftSkills() {
  const softSkill = [
    "TEAMWORK",
    "EMOTIONAL INTELLIGENCE",
    "PROBLEM SOLVING ABILITY",
  ];

  return (
    <div className="swiper flex">
      <Swiper
        spaceBetween={10}
        loop={true}
        direction="horizontal"
        autoplay={true}
      >
        {softSkill.map((val) => (
          <SwiperSlide className="flex justify-center text-zinc-950">
            {val}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
