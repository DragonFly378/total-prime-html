import Button from "@/components/Button";
import Jumbotron from "@/components/Jumbotron";
import Layout from "@/widget/Layout";
import { IconChevronRight } from "@tabler/icons-react";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <>
      <Head>
        <title>Total Prime Engineering - Contact Us</title>
        <meta
          property="og:title"
          content="Total Prime Engineering - Contact Us"
          key="title"
        />
      </Head>
      <Layout>
        <Jumbotron
          styleProps={{
            backgroundImage: `linear-gradient(89.99deg, rgba(0, 0, 0, 0.89) 18.07%, rgba(0, 0, 0, 0.37) 90.55%), url("/assets/img/page-contact_bg.png")`,
          }}
          classStyle="md:min-h-[400px]"
          imageBg={"/assets/img/page-contact_bg.png"}
        >
          {" "}
          <h2 className="md:text-3xl text-xl text-white font-bold md:leading-relaxed">
            Contact <span className="text-oren">Us</span>
          </h2>
          <p className="desc text-sm md:text-base text-white">
            If you need information, quotes, or require a more detailed
            discussion about the products and services we offer, please contact
            us via the contact form or through email.
          </p>
        </Jumbotron>

        {/* <section className="services"></section> */}
      </Layout>
    </>
  );
};

export default index;
