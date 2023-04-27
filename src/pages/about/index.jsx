import Button from "@/components/Button";
import Jumbotron from "@/components/Jumbotron";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Layout from "@/widget/Layout";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

import aboutImg from "../../../public/assets/img/about-img.png";
import Image from "next/image";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>Total Prime Engineering - About Us</title>
        <meta
          property="og:title"
          content="Total Prime Engineering - About Us"
          key="title"
        />
      </Head>
      <Layout>
        <Jumbotron
          styleProps={{
            backgroundImage: `linear-gradient(89.99deg, rgba(0, 0, 0, 0.89) 18.07%, rgba(0, 0, 0, 0.37) 90.55%), url("/assets/img/page-about_bg.png")`,
          }}
          classStyle="md:min-h-[400px]"
          imageBg={"/assets/img/page-about_bg.png"}
        >
          {" "}
          <h2 className="md:text-3xl text-xl text-white font-bold md:leading-relaxed">
            TOTAL PRIME ENGINEERING
          </h2>
          <p className="desc text-sm md:text-base text-white">
            With more than a decade of experience in sealing elements and
            hydraulic systems, we are a market leader capable of delivering a
            very comprehensive range of products at very competitive prices.
          </p>
        </Jumbotron>

        <section className="desc-about my-[150px]">
          <div className="w-11/12 md:w-10/12 mx-auto">
            <div className="content grid grid-cols-2 md:grid-cols-12 gap-y-5 md:gap-x-2">
              <div className="col-span-2 md:col-span-6 ">
                <div className="flex flex-col md:w-10/12 mx-auto">
                  <h2 className="title text-hitem text-xl md:text-3xl font-bold">
                    ABOUT <span className="text-oren">US</span>
                  </h2>{" "}
                  <p className="text-sm md:text-lg text-hitam mt-3 font-medium leading-relaxed md:w-11/12">
                    TOTAL PRIME ENGINEERING started on 2008 as Sealing elements
                    company. Today we are recognized by market, as the most
                    reliable partner with high quality products at very
                    reasonable price. In addition to our recognition as the
                    biggest stockiest in sealing business in Indonesia, now we
                    have expand our business to Repair & Manufacture Hydraulic /
                    Pneumatic cylinders. <br /> <br />
                    Our workshop located in area of 5330 sq meter in Cikarang,
                    West Java. Having adequate space enable us to do manufacture
                    and repair in one roof. In order to meet your specifications
                    and requirements of seals used in the cylinder, we are
                    equipped with 5 (five) CNC Sealing Machines with capacity up
                    to 500 mm.
                  </p>
                </div>
              </div>
              <div className="col-span-2 md:col-span-6 ">
                <div className="image-about flex justify-center md:w-8/12 mx-auto">
                  <img
                    alt="about_image"
                    src={"/assets/img/about-img.png"}
                    className="w-full md:w-3/4"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Products />

        <Services />
      </Layout>
    </>
  );
};

export default index;
