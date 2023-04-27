import React, { useRef, useState } from "react";

import Jumbotron from "@/components/Jumbotron";
import Image from "next/image";
import Layout from "../widget/Layout";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { Autoplay, Pagination } from "swiper";

import Services from "@/components/Services";
import Products from "@/components/Products";
import Head from "next/head";
import Button from "@/components/Button";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";

export default function Home() {
  const clients = [
    "/assets/img/clients_1.png",
    "/assets/img/clients_2.png",
    "/assets/img/clients_3.png",
    "/assets/img/clients_4.png",
    "/assets/img/clients_5.png",
    "/assets/img/clients_6.png",
    "/assets/img/clients_7.png",
    "/assets/img/clients_8.png",
    "/assets/img/clients_9.png",
    "/assets/img/clients_10.png",
    "/assets/img/clients_11.png",
  ];

  return (
    <>
      <Head>
        <title>Total Prime Engineering</title>
        <meta
          property="og:title"
          content="Total Prime Engineering"
          key="title"
        />
      </Head>
      <Layout>
        <section className="swiper-jumbotron static z-0">
          <Swiper
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              // dynamicBullets: true,
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            // onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper-jumbotron"
          >
            <SwiperSlide>
              {" "}
              <Jumbotron
                styleProps={{
                  backgroundImage: `linear-gradient(89.99deg, rgba(0, 0, 0, 0.89) 18.07%, rgba(0, 0, 0, 0.37) 90.55%), url("/assets/img/page-home_bg.png")`,
                }}
                classStyle="md:min-h-[900px]"
                // imageBg={"/assets/img/page-home_bg.png"}
              >
                {" "}
                <h2 className="md:text-3xl text-xl text-white font-bold md:leading-relaxed">
                  Helping your industries for{" "}
                  <span className="text-oren"> Manufacture </span> and
                  <span className="text-oren"> Stockiest in sealing </span>{" "}
                  business
                </h2>
                <p className="desc text-sm md:text-base text-white">
                  10 years+ as Sealing elements company. Today we are recognized
                  by market, as the most reliable partner with high quality
                  products at very reasonable price. As the biggest stockiest &
                  manufacture of sealing element in Indonesia,
                </p>
              </Jumbotron>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Jumbotron
                styleProps={{
                  backgroundImage: `url("/assets/img/exhibition2.png")`,
                  backgroundSize: "contain",
                }}
                classStyle="min-h-[452px] md:min-h-[900px]"
                // imageBg={"/assets/img/exhibition.png"}
              >
                {/* {" "}
                <h2 className="md:text-3xl text-xl text-oren font-bold md:leading-relaxed">
                  PRECISE
                </h2>
                <p className="desc text-sm md:text-base text-white">
                  In order to give an impact on countless future partners, it
                  has been our instinct to constantly seek out new solutions for
                  every problems with ACCURACY and PERFECTION engraved on every
                  step.
                </p>
                <div className="flex justify-center md:block">
                  <Button
                    as={Link}
                    href="/products"
                    type="primary"
                    icon={<IconChevronRight />}
                    style="text-hitam justify-center content-center w-2/5 md:w-2/4 text-xs md:text-base bg-oren font-bold"
                    text="Our Products"
                  />
                </div> */}
              </Jumbotron>
            </SwiperSlide>
            {/* <SwiperSlide>
              {" "}
              <Jumbotron
                styleProps={{
                  backgroundImage: `linear-gradient(89.99deg, rgba(0, 0, 0, 0.89) 18.07%, rgba(0, 0, 0, 0.37) 90.55%), url("/assets/img/page-home_bg.png")`,
                }}
                classStyle="md:min-h-[720px]"
                // imageBg={"/assets/img/page-home_bg.png"}
              >
                {" "}
                <h2 className="md:text-3xl text-xl text-oren font-bold md:leading-relaxed">
                  AGILE
                </h2>
                <p className="desc text-sm md:text-base text-white">
                  Embedded in our deep-rooted history is a combination of
                  determination and perseverance with getting the job done right
                  ON-TIME as our number one priority.
                </p>
                <div className="flex justify-center md:block">
                  <Button
                    as={Link}
                    href="/services"
                    type="primary"
                    icon={<IconChevronRight />}
                    style="text-hitam justify-center content-center w-2/5 md:w-2/4 text-xs md:text-base bg-oren font-bold"
                    text="Our Services"
                  />
                </div>
              </Jumbotron>
            </SwiperSlide> */}
          </Swiper>
        </section>

        <Services />

        <Products />

        <section
          className={`trusted-section mt-[150px] mb-[-150px] py-20 md:py-32 bg-hitam`}
        >
          <div className="w-11/12 md:w-10/12 mx-auto">
            <div className="content flex flex-col gap-y-3 md:gap-y-8 text-center">
              <h2 className="title text-white text-xl md:text-2xl font-bold">
                Our Clients
              </h2>
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                // freeMode={true}
                loop={true}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="clients-swiper w-full mx-auto h-[200px] md:h-[300px]"
              >
                {clients.map((item, itemIdx) => {
                  return (
                    <>
                      <SwiperSlide>
                        {" "}
                        <img
                          alt={`clients-${itemIdx}`}
                          src={item}
                          width={200}
                          height={400}
                          className="w-full"
                        />
                      </SwiperSlide>
                    </>
                  );
                })}
              </Swiper>

              {/* <div className="clients w-full mx-auto grid grid-cols-12 gap-x-8 gap-y-8 justify-center items-center">
                {clients.map((item, itemIdx) => {
                  return (
                    <div key={itemIdx} className="col-span-3">
                      <img
                        alt={`clients-${itemIdx}`}
                        src={item}
                        width={200}
                        height={400}
                        className="w-full"
                      />
                    </div>
                  );
                })}
              </div> */}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
