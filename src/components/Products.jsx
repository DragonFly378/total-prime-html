import { IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Button from "./Button";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

const Products = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const products = [
    {
      name: "CNC Machined Seals",
      link: "/products/cnc-machined-seals",
    },
    {
      name: "Mechanical Seals",
      link: "/products/mechanical-seals",
    },
    {
      name: "Hydraulics Cylinders",
      link: "/products/hydraulic-cylinder",
    },
    {
      name: "Turbochargers",
      link: "/products/turbochargers",
    },
    {
      name: "See More",
      link: "/products",
    },
  ];

  return (
    <>
      <section className="products my-[150px] py-20 md:py-32 bg-[url('../../public/assets/img/products_bg.png')] bg-center bg-no-repeat bg-cover">
        <div className="w-11/12 md:w-10/12 mx-auto">
          <div className="content block text-center md:text-left md:grid md:grid-cols-12 md:gap-x-5">
            <div
              data-aos={`fade-down`}
              data-aos-easing="linear"
              className="content col-span-6"
            >
              <div className="flex flex-col gap-y-3">
                <h4 className="text-oren text-sm md:text-lg font-semibold">
                  The Seals, O-Rings, & Hydraulic Cylinder Specialist
                </h4>
                <h2 className="title text-white text-xl md:text-2xl font-bold md:w-10/12">
                  TO BE THE BEST SEALING & <br /> ENGINEERING COMPANY WITHIN AND
                  BEYOND INDONESIA
                </h2>
                <p className="desc text-sm md:text-base text-white">
                  To Be The Preferred One-Stop Sealing Solution And Hydraulic
                  Cylinder Repair & Manufacturing By Delivering Quality Products
                  With A Reasonable Price, Timely Delivery And Satisfactory
                  Customer Service To Build Long-Term Partnership
                </p>
                <div className="motto mt-4">
                  <ul className="text-oren list-disc list-inside flex flex-wrap justify-center md:justify-start gap-y-3 gap-x-4 md:gap-x-8">
                    <li className="uppercase">Determination</li>
                    <li className="uppercase">Respect</li>
                    <li className="uppercase">Integrity</li>
                    <li className="uppercase">Virtue</li>
                    <li className="uppercase">Excellence</li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              data-aos={`fade-up`}
              data-aos-easing="linear"
              className="product-list col-span-6 w-4/6 mx-auto mt-8 md:mt-0  flex flex-col gap-y-3"
            >
              <div className="title  text-lg md:text-2xl pb-2 md:pb-3 font-bold text-oren border-b-4 ">
                Our Products
              </div>
              <div className="list-produk flex flex-col bg-oren">
                {products.map((item, itemIdx) => {
                  return (
                    <>
                      <Button
                        as={Link}
                        key={itemIdx}
                        href={item.link}
                        target="_blank"
                        iconPosition="right"
                        icon={<IconChevronRight />}
                        style="item-produk text-base md:text-lg flex px-4 md:px-6 py-2 md:py-4 justify-between hover:bg-hitam hover:text-oren"
                        text={item.name}
                      />
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
