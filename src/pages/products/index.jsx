import Button from "@/components/Button";
import Jumbotron from "@/components/Jumbotron";
import Layout from "@/widget/Layout";
import { IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

import products1 from "../../../public/assets/img/products/cnc_mechine.png";
import products2 from "../../../public/assets/img/products/mechanical_seals.png";
import products3 from "../../../public/assets/img/products/hydraulic_hoses.png";
import products4 from "../../../public/assets/img/products/hydraulic_cylinder.png";
import products5 from "../../../public/assets/img/products/turbochargers.png";
import products6 from "../../../public/assets/img/products/earthmoving_heavy.png";
import products7 from "../../../public/assets/img/products/equipment.png";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Head from "next/head";
import { products } from "@/datas";
// ..

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Head>
        <title>Total Prime Engineering - Our Products</title>
        <meta
          property="og:title"
          content="Total Prime Engineering - Our Products"
          key="title"
        />
      </Head>
      <Layout>
        <Jumbotron
          styleProps={{
            backgroundImage: `linear-gradient(89.99deg, rgba(0, 0, 0, 0.89) 18.07%, rgba(0, 0, 0, 0.37) 90.55%), url("/assets/img/page-products_bg.png")`,
          }}
          classStyle="md:min-h-[400px]"
          imageBg={"/assets/img/page-products_bg.png"}
        >
          {" "}
          <h2 className="md:text-3xl text-xl text-white font-bold md:leading-relaxed">
            Our <span className="text-oren">Products</span>
          </h2>
          <p className="desc text-sm md:text-base text-white">
            At Total Prime, you can find all the products ranging from sealing
            elements, hydraulic systems, mechanical seals, hydraulic hoses &
            connectors, hydraulic cylinders, turbochargers, earthmoving & heavy
            equipment parts, up to high-quality personal protective equipment
            with the best reputation in their respective fields.
          </p>
        </Jumbotron>

        <section className="services my-[150px]">
          <div className="w-11/12 md:w-10/12 mx-auto">
            <div className="flex flex-col justify-center gap-y-6 md:gap-y-8">
              <div className="title flex flex-col gap-y-3 md:gap-y-5 text-center">
                <h4 className="text-oren text-sm md:text-base font-bold">
                  {" "}
                  Best Sealing & engineering company within and beyound
                  indonesia
                </h4>
                <h2 className="title text-hitam text-xl md:text-2xl font-bold">
                  High Quality Products <br /> Fluid Connector, Safety products,
                  Hydraulic System and More
                </h2>
              </div>
              <div className="gallery w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-y-5 md:gap-x-5">
                {products?.card.map((item, itemIdx) => {
                  return (
                    <>
                      <div
                        data-aos={`${
                          itemIdx % 2 == 0 ? "flip-left" : "flip-right"
                        }`}
                        data-aos-easing="linear"
                        // data-aos-duration={`${`200` * (itemIdx + 0.5)}`}
                        key={itemIdx}
                        className="card col-span-1 flex flex-col drop-shadow-lg bg-white pb-5"
                      >
                        <img
                          alt={item.title}
                          src={item.img}
                          width={400}
                          height={200}
                          className="w-full h-[230px] object-cover"
                        />
                        <div className="content flex flex-col gap-y-2 px-5 py-3">
                          <div className="title text-oren font-semibold text-base md:text-lg ">
                            {item.title}
                          </div>
                          <p className="desc text-hitam text-sm md:text-base line-clamp-4">
                            {item.desc}
                          </p>
                          <Button
                            as={Link}
                            href={item.link}
                            icon={<IconChevronRight />}
                            style="text-oren w-5/12 md:w-2/4 flex items-center gap-x md:gap-x-3 py-[10px] px-[10px] md:py-[10px] md:px-[10px] text-sm md:text-base font-bold border-b border-hitam hover:text-hitam hover:bg-oren hover:border-none"
                            text="See Detail"
                          />
                        </div>
                      </div>
                    </>
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
