import { IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Button from "./Button";

import service1 from "../../public/assets/img/services/Contract-Service-Programme/1.png";
import service2 from "../../public/assets/img/services/Hydraulic-System-Design/1.png";
import service3 from "../../public/assets/img/services/Hardchrome-Plating/1.png";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

const Services = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const services = [
    {
      title: "Contract Service Programme",
      desc: "Our highly experienced team of engineers at Total Prime are able to offer a range of tailored hydraulic service and maintenance contracts to meet individual customer requirements in a wide range of industries. With a diverse customer base, Total Prime offer flexible hydraulic service and maintenance programs from preventative solutions to problem solving that can be tailored to the exact requirements of an individual customer, whether that is budget or system based.",
      img: "/assets/img/services/Contract-Service-Programme/1.png",
      link: "/services/contract-service-programme",
    },
    {
      title: "Hydraulic System Design",
      desc: "We bring innovative hydraulics solutions to life with well designed hydraulic systems. Using tailored components, equipment, skills and know how, we design your hydraulic system to your exact requirements. This means our system designs factor in hydraulic system components only from the world's leading hydraulic manufacturers.",
      img: "/assets/img/services/Hydraulic-System-Design/1.png",
      link: "/services/hydraulic-repair",
    },
    {
      title: "Hardchrome Plating",
      desc: "Hard chrome is an electroplated surface finish that is also known as industrial hard chrome, functional chrome, and engineering chrome. When designing machine components, engineers often combine a base metal, or substrate, with a surface finish to achieve the quality, efficiency, and reliability desired in their product. Of the numerous hard coating surface finishes available, industrial hard chrome plating continues to be one of the most popular.",
      img: "/assets/img/services/Hardchrome-Plating/1.png",
      link: "/services/hydraulic-repair",
    },
  ];

  return (
    <>
      <section className="services my-[150px]">
        <div className="w-11/12 md:w-10/12 mx-auto">
          <div className="flex flex-col justify-center gap-y-6 md:gap-y-8">
            <div className="title flex flex-col gap-y-3 md:gap-y-5 text-center">
              <h4 className="text-oren text-sm md:text-base font-bold">
                {" "}
                Best Sealing & engineering company within and beyound indonesia
              </h4>
              <h2 className="title text-hitam text-xl md:text-2xl font-bold">
                High Quality Services <br /> Sealing Machines, hydraulic repairs
                and manufacture.
              </h2>
            </div>
            <div className="gallery w-full md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-5 md:gap-x-5">
              {services.map((item, itemIdx) => {
                return (
                  <>
                    <div
                      data-aos={`${
                        itemIdx % 2 == 0 ? "flip-left" : "flip-right"
                      }`}
                      data-aos-easing="linear"
                      // data-aos-duration={`${`200` * (itemIdx + 1)}`}
                      key={itemIdx}
                      className={`card col-span-1 flex flex-col drop-shadow-lg bg-white pb-5 ${itemIdx}`}
                    >
                      <img
                        alt="Total Prime Logo"
                        src={item.img}
                        className=" w-full h-[230px] object-cover"
                      />
                      <div className="content flex flex-col gap-y-2 px-5 py-3">
                        <div className="title text-oren font-semibold text-base md:text-lg">
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
            <div className="see-more w-full md:w-2/12 mx-auto ">
              <Button
                as={Link}
                href="/services"
                style="text-sm md:text-base font-bold text-hitem bg-oren flex justify-center items-center text-center gap-x md:gap-x-3 py-[10px] px-[10px] md:py-[10px] md:px-[10px] hover:text-oren hover:bg-hitam"
                text="See More"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
