import Button from "@/components/Button";
import Jumbotron from "@/components/Jumbotron";
import Layout from "@/widget/Layout";
import { IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import maintenance from "../../../public/assets/img/maintenance.svg";

const index = () => {
  return (
    <>
      <Layout>
        {/* <Jumbotron
          styleProps={{
              backgroundImage: `linear-gradient(89.99deg, rgba(0, 0, 0, 0.89) 18.07%, rgba(0, 0, 0, 0.37) 90.55%), url("/assets/img/jumbotron_bg.png")`,
            }}
          classStyle="md:min-h-[400px]"
          imageBg={"/assets/img/jumbotron_bg.png"}
        >
          {" "}
          <h2 className="md:text-3xl text-xl text-white font-bold md:leading-relaxed">
            Career
          </h2>
          <p className="desc text-sm md:text-base text-white">
            If you are someone who seeks more challenges in your career, join
            more than 250 people who are already part of Total Prime.
          </p>
          <div className="flex justify-center md:block">
            <Button
              as={Link}
              href="#"
              type="primary"
              icon={<IconChevronRight />}
              style="text-hitam justify-center content-center w-2/5 md:w-2/4 text-xs md:text-base bg-oren font-bold"
              text="Let's Explore!"
            />
          </div>
        </Jumbotron> */}

        <section className="career mt-[250px]">
          <div className="w-11/12 md:w-6/12 mx-auto">
            <h2 className="md:text-2xl text-base text-center text-hitam font-bold md:leading-relaxed">
              This Site is Under Construction
            </h2>
            <img
              alt="Under Maintenance"
              src={"/assets/img/maintenance.svg"}
              width={400}
              height={200}
              className="w-3/4 mx-auto   object-cover"
            />

            <div className="flex mx-auto justify-center md:block mt-[20px] md:mt-[50px]">
              <Button
                as={Link}
                href="/"
                type="primary"
                icon={<IconChevronRight />}
                style="text-hitam justify-center mx-auto content-center w-2/5 md:w-1/4 text-xs md:text-base bg-oren font-bold"
                text="Back To Home"
              />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default index;
