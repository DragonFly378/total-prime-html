import Button from "@/components/Button";
import Jumbotron from "@/components/Jumbotron";
import Layout from "@/widget/Layout";
import { IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Head from "next/head";
import { brands } from "@/datas";

const index = () => {
  return (
    <>
      <Head>
        <title>Total Prime Engineering - Brands</title>
        <meta
          property="og:title"
          content="Total Prime Engineering - Brands"
          key="title"
        />
      </Head>
      <Layout>
        <Jumbotron
          styleProps={{
            backgroundImage: `linear-gradient(89.99deg, rgba(0, 0, 0, 0.89) 18.07%, rgba(0, 0, 0, 0.37) 90.55%), url("/assets/img/page-brands_bg.png")`,
          }}
          classStyle="md:min-h-[400px]"
          imageBg={"/assets/img/page-brands_bg.png"}
        >
          {" "}
          <h2 className="md:text-3xl text-xl text-white font-bold md:leading-relaxed">
            Brands
          </h2>
          <p className="desc text-sm md:text-base text-white">
            Discover well-known brands that guarantee quality and the best
            service that you can find at Total Prime.
          </p>
        </Jumbotron>

        <section className="brands-section my-[150px] ">
          <div className="w-11/12 md:w-10/12 mx-auto">
            <div className="content flex flex-col gap-y-8 text-center">
              <div className="flex flex-col gap-y-3  text-center">
                <h2 className="title text-hitam text-xl md:text-2xl font-bold">
                  OUR <span className="text-oren">BRANDS</span>
                </h2>
                <h4 className="text-hitam text-sm md:text-base ">
                  High Quality Services <br /> Sealing Machines, Hydraulic
                  repairs and Manufacture.
                </h4>
              </div>
              <div className="clients flex flex-col gap-y-20">
                {brands.map((item, itemIdx) => {
                  return (
                    <div
                      key={itemIdx}
                      className="category-clients md:w-10/12 mx-auto"
                    >
                      <div className="title text-hitam text-md md:text-xl font-bold md:text-left mb-4 md:mb-8">
                        {item.title}
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-12 gap-x-8 gap-y-8 justify-center items-center">
                        {item.img.map((image, imageIdx) => {
                          return (
                            <>
                              <div
                                key={imageIdx}
                                className="col-span-1 md:col-span-3 md:w-8/12 mx-auto"
                              >
                                <img
                                  alt={`clients-${itemIdx}`}
                                  src={image}
                                  className="w-3/4 mx-auto"
                                />
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default index;
