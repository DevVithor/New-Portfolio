import {
  DbeaverOriginal,
  DockerOriginal,
  ExpressOriginalWordmark,
  FastifyOriginal,
  FigmaOriginal,
  GithubOriginal,
  GitlabOriginal,
  JavascriptOriginal,
  MysqlOriginal,
  NotionOriginal,
  OracleOriginal,
  PostmanOriginal,
  PrismaOriginal,
  ReactOriginal,
  TypescriptOriginal,
  VitejsOriginal,
  VitestOriginal,
} from "devicons-react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export function HardSkills() {
  const hardSkill = [
    <FastifyOriginal size={50} />,
    <ExpressOriginalWordmark size={50} />,
    <TypescriptOriginal size={50} />,
    <VitejsOriginal size={50} />,
    <JavascriptOriginal size={50} />,
    <ReactOriginal size={50} />,
    <DockerOriginal size={50} />,
    <MysqlOriginal size={50} />,
    <OracleOriginal size={50} />,
    <DbeaverOriginal size={50} />,
    <PrismaOriginal size={50} />,
    <PostmanOriginal size={50} />,
    <FigmaOriginal size={50} />,
    <GithubOriginal size={50} />,
    <GitlabOriginal size={50} />,
    <NotionOriginal size={50} />,
    <VitestOriginal size={50} />,
  ];

  return (
    <div className="swiper-2 flex h-[100px] w-full items-center justify-center text-center">
      <Swiper
        slidesPerView={5}
        loop={true}
        direction="horizontal"
        autoplay={true}
      >
        {hardSkill.map((val) => (
          <SwiperSlide className="flex justify-center">{val}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
