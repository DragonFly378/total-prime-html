import React from "react";
import CustomInput from "@/components/form/CustomInput";
import { useRouter } from "next/router";
import { Form, Formik } from "formik";
import Button from "./Button";
import {
  IconMapPin,
  IconPhone,
  IconMail,
  IconChevronRight,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandGmail,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";

import logo from "../../public/assets/img/logo.png";

const Footer = () => {
  const location = useRouter();

  const path = location.pathname;

  // console.log(path);

  const offices = [
    {
      title: "Head Office Jakarta",
      address:
        "Jl. Kedoya Raya No. 1 Kedoya Selatan - Kebon Jeruk, Jakarta Barat 11520 INDONESIA",
    },
    {
      title: "Factory Cikarang",
      address:
        "Delta Silicon 3 Industrial Park, Jl.Kayu Manis 1 Serang Cikarang Selatan, Jawa Barat 17530 INDONESIA",
    },
    {
      title: "Factory Balikpapan",
      address:
        "Jl. Bhayangkara RT. 46 Graha Indah, Balikpapan Utara, Kalimantan Timur INDONESIA",
    },
  ];

  const links = [
    {
      title: "Home",
      target: "/",
    },
    {
      title: "About",
      target: "/about",
    },
    {
      title: "Products",
      target: "/products",
    },
    {
      title: "Services",
      target: "/services",
    },
    {
      title: "Brands",
      target: "/brands",
    },
    {
      title: "Contact",
      target: "/contact",
    },
    {
      title: "Career",
      target: "/career",
    },
  ];

  const footerLinks = [
    {
      type: "offices",
      title: "Our Offices",
      desc: "Jl. Kedoya Raya No. 1 Kedoya Selatan - Kebon Jeruk, Jakarta Barat 11520 INDONESIA",
      link: "https://goo.gl/maps/ebTZWzQ2zGCKr4QA6",
      icon: <IconMapPin size={28} className="text-white text-lg " />,
    },
    {
      type: "phone",
      title: "Contact us : ",
      desc: "(+62) 21 5835 3959",
      link: "tel:622158353959",
      icon: <IconPhone size={28} className="text-white text-lg " />,
    },
    {
      type: "email",
      title: "Email us : ",
      desc: "sales@total-prime.com",
      link: "mailto:sales@total-prime.com",
      icon: <IconMail size={28} className="text-white text-lg " />,
    },
  ];

  const socialMedia = [
    {
      icon: <IconBrandFacebook size={28} />,
      link: "https://www.facebook.com/totalprimeengineering",
    },
    {
      icon: <IconBrandInstagram size={28} />,
      link: "https://www.instagram.com/total_prime_engineering/",
    },
    {
      icon: <IconMail size={28} />,
      link: "mailto:sales@total-prime.com",
    },
    {
      icon: <IconBrandLinkedin size={28} />,
      link: "https://www.linkedin.com/company/pt-total-prime-engineering/",
    },
  ];

  const onSubmitHandler = (values, actions) => {
    // const formData = new FormData();
    // formData.append("json", JSON.stringify(values));
    console.log(values);
    window.location.href = `mailto:sales@total-prime.com?subject=${values.subject}&body=${values.message}`;
  };

  return (
    <>
      {path === "/contact" || path === "/about" ? (
        <section className="connect-us my-[150px]  bg-white md:bg-transparent">
          <div className="w-11/12 md:w-10/12 mx-auto">
            <div className="content grid grid-cols-2 md:grid-cols-12 gap-y-5 md:gap-x-5">
              <div className="col-span-2 md:col-span-8 ">
                <div className="form-section md:bg-white py-[40px] md:py-[50px] md:px-[70px]">
                  <h2 className="title text-hitam text-center md:text-left text-xl md:text-2xl font-bold mb-7">
                    Lets Connect!
                  </h2>
                  <div className="form">
                    <Formik
                      initialValues={{
                        fullname: "",
                        email: "",
                        subject: "",
                        message: "",
                      }}
                      onSubmit={onSubmitHandler}
                      enableReinitialize={true}
                    >
                      {(props) => (
                        <Form>
                          <div className="grid grid-cols-2 gap-2 md:gap-3">
                            <div className="form-item  col-span-2 md:col-span-1">
                              <CustomInput
                                name="fullname"
                                type="text"
                                placeholder="Name"
                                classLabel="font-medium md:text-xl text-md "
                                classInput="bg-light border border-[#727272] text-sm md:text-base px-3 py-3 md:px-5 md:py-3 w-full"
                              />
                            </div>
                            <div className="form-item  col-span-2 md:col-span-1">
                              <CustomInput
                                name="email"
                                type="email"
                                placeholder="Email"
                                classLabel="font-medium md:text-xl text-md"
                                classInput="bg-light border border-[#727272] text-sm md:text-base px-3 py-3 md:px-5 md:py-3 w-full"
                              />
                            </div>
                            <div className="form-item col-span-2 ">
                              <CustomInput
                                name="subject"
                                type="text"
                                placeholder="Subject"
                                classLabel="font-medium md:text-xl text-md "
                                classInput="bg-light border border-[#727272] text-sm md:text-base px-3 py-3 md:px-5 md:py-3 w-full"
                              />
                            </div>
                            <div className="form-item  col-span-2">
                              <CustomInput
                                name="message"
                                type="textarea"
                                cols="30"
                                rows="10"
                                placeholder="Message"
                                classLabel="font-medium md:text-xl text-md"
                                classInput="bg-light border border-[#727272] text-sm md:text-base px-3 py-3 md:px-5 md:py-3 w-full"
                              />
                            </div>
                          </div>
                          <Button
                            btnType="submit"
                            style="w-full text-white justify-center text-xs md:text-base bg-oren font-medium py-2 md:py-3 hover:bg-hitam hover:font-bold "
                            text="SUBMIT"
                          />
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
              <div className="col-span-2 md:col-span-4 bg-oren py-[35px] px-[20px] md:px-[30px]">
                <h2 className="title text-white text-center md:text-left text-xl md:text-2xl font-bold mb-7">
                  Contact Us
                </h2>{" "}
                <div className="content md:mt-5">
                  <div className="offices flex flex-col gap-y-7 mb-5">
                    {offices.map((item, itemIdx) => {
                      return (
                        <>
                          <div
                            key={itemIdx}
                            className="item grid grid-cols-8 justify-center "
                          >
                            <div className="icon col-span-1 md:mt-1">
                              <IconMapPin
                                size={28}
                                className="text-white text-lg "
                              />
                            </div>
                            <div className="desc col-span-7">
                              {" "}
                              <h4 className="name text-white font-bold text-base md:text-lg mb-1">
                                {item.title}
                              </h4>
                              <p className="address text-white text-md md:text-base ">
                                {item.address}
                              </p>
                            </div>
                          </div>
                        </>
                      );
                    })}
                    <div className="item grid grid-cols-8 justify-center ">
                      <div className="icon col-span-1 md:mt-1">
                        <IconPhone size={28} className="text-white text-lg " />
                      </div>
                      <div className="desc col-span-7">
                        {" "}
                        <h4 className="name text-white font-bold text-base md:text-lg mb-1">
                          Contacts
                        </h4>
                        <p className="address text-white text-md md:text-base ">
                          T : (+62)21 5835-3959 <br /> F : (+62)21 5835-3913
                        </p>
                      </div>
                    </div>
                    <div className="item grid grid-cols-8 justify-center ">
                      <div className="icon col-span-1 md:mt-1">
                        <IconMail size={28} className="text-white text-lg " />
                      </div>
                      <div className="desc col-span-7">
                        {" "}
                        <h4 className="name text-white font-bold text-base md:text-lg mb-1">
                          Email
                        </h4>
                        <p className="address text-white text-md md:text-base ">
                          sales@total-prime.com
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button
                    as={Link}
                    href="mailto:sales@total-prime.com"
                    type="primary"
                    style="text-white justify-center content-center w-full text-xs md:text-base bg-hitam"
                    text="Contact Us"
                  />
                </div>
              </div>
            </div>
          </div>{" "}
        </section>
      ) : (
        ""
      )}

      <footer className="footer">
        <section className="footer-section mt-[150px] py-20 md:py-28 bg-hitam">
          <div className="w-11/12 md:w-10/12 mx-auto">
            <div className="content md:text-left justify-center md:justify-start grid md:grid-cols-12 md:gap-x-12 gap-y-8 ">
              <div className="item logo col-span-1 md:col-span-3 justify-center items-center">
                <img
                  alt="logo-totalprime"
                  src={"/assets/img/logo.png"}
                  className="w-3/4 md:w-full mx-auto"
                />
              </div>
              {/* <div className="item company col-span-1 md:col-span-4 flex flex-col gap-y-5">
                <h3 className="title text-white font-bold text-xl">
                  PT TOTAL PRIME ENGINEERING
                </h3>
                <p className="desc text-white">
                  12+ years as Sealing elements company. In addition to our
                  recognition as the biggest stockiest in sealing business in
                  Indonesia, today we are recognized by the market as the most
                  reliable partner of high quality hydraulic cylinder
                  manufacture.
                </p>
              </div>
              <div className="item links col-span-1 md:col-span-2 flex flex-col gap-y-5">
                <h3 className="title text-white font-bold text-xl">Links</h3>
                <div className="flex flex-col gap-y-4">
                  {links.map((item, itemIdx) => {
                    return (
                      <>
                        <Button
                          key={itemIdx}
                          as={Link}
                          href={item.target}
                          target="_blank"
                          iconPosition="left"
                          icon={<IconChevronRight />}
                          style="text-white text-base md:text-lg flex hover:text-oren"
                          text={item.title}
                        />
                      </>
                    );
                  })}
                </div>
              </div> */}
              <div className="item company col-span-1 md:col-span-9 flex flex-col gap-y-5">
                <h3 className="title text-white font-bold text-xl">
                  Lets Connected!
                </h3>
                <div className="content flex flex-col md:grid md:grid-cols-9 gap-5">
                  {" "}
                  {footerLinks.map((item, itemIdx) => {
                    return (
                      <>
                        <a
                          key={itemIdx}
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="item grid grid-cols-8 md:col-span-3 justify-center "
                        >
                          <div className="icon col-span-1 md:mt-1">
                            {item.icon}
                          </div>
                          <div className="desc col-span-7">
                            {" "}
                            <h4 className="name text-white font-bold text-base md:text-lg mb-1">
                              {item.title}
                            </h4>
                            <p className="address text-white text-md md:text-base ">
                              {item.desc}
                            </p>
                          </div>
                        </a>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="copy-section py-3 md:py-5 bg-oren">
          <div className="w-11/12 md:w-10/12 mx-auto">
            <div className="flex flex-col gap-y-3">
              <div className="social-media flex flex-row justify-center gap-x-3 md:gap-x-5">
                {socialMedia.map((item, itemIdx) => {
                  return (
                    <>
                      <a
                        key={itemIdx}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="item"
                      >
                        {item.icon}
                      </a>
                    </>
                  );
                })}
              </div>
              <p className="text-center font-semibold text-xs md:text-base">
                Copyright 2023 PT Total Prime Engineering
              </p>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
