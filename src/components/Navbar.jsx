import React, { useState } from "react";
import Link from "next/link";
// import { IconPhone } from "@tabler/icons";
import Image from "next/image";

import logo from "../../public/assets/img/logo-navbar.png";
import {
  IconChevronDown,
  IconChevronUp,
  IconMail,
  IconMapPin,
  IconMenu2,
  IconPhone,
  IconX,
} from "@tabler/icons-react";
import Button from "./Button";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useRouter } from "next/router";

const Navbar = ({ active }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [listOpen, setListOpen] = useState(false);

  // console.log("list kebuka = " + listOpen);

  const router = useRouter();

  const products = [
    {
      title: "Sealing Elements",
      target: "/products/sealing-elements",
    },
    {
      title: "CNC Machined Seals",
      target: "/products/cnc-machined-seals",
    },
    {
      title: "Mechanical Seals",
      target: "/products/mechanical-seals",
    },
    {
      title: "Hydraulic Hoses & Connectors",
      target: "/products/hydraulic-hoses",
    },
    {
      title: "Hydraulic Cylinder",
      target: "/products/hydraulic-cylinder",
    },
    {
      title: "Turbochargers",
      target: "/products/turbochargers",
    },
    {
      title: "Earthmoving & Heavy Equipment Parts",
      target: "/products/earthmoving-heavy-parts",
    },
    {
      title: "Personal Protective Equipments",
      target: "/products/personal-equipments",
    },
    {
      title: "Cutting Tools",
      target: "/products/cutting-tools",
    },
  ];

  const services = [
    // {
    //   title: "Hydraulic Cylinders Upgrade & Repair",
    //   target: "/services/hydraulic-repair",
    // },
    {
      title: "Hydraulic System Design",
      target: "/services/hydraulic-system-design",
    },
    {
      title: "Hardchrome Plating",
      target: "/services/hardchrome-plating",
    },
    {
      title: "Turbochargers Overhaul & Repair",
      target: "/services/turbochargers-repair",
    },
    {
      title: "Contract Service Programme",
      target: "/services/contract-service-programme",
    },
  ];

  const contents = [
    {
      type: "phone",
      title: "Contact us : ",
      desc: "(+62) 21 5835 3959",
      link: "tel:622158353959",
      icon: <IconPhone className="text-oren w-5 " />,
    },
    {
      type: "email",
      title: "Email us : ",
      desc: "sales@total-prime.com",
      link: "mailto:sales@total-prime.com",
      icon: <IconMail className="text-oren w-5 " />,
    },
    {
      type: "offices",
      title: "Our Offices",
      desc: "See Locations",
      link: "https://goo.gl/maps/ebTZWzQ2zGCKr4QA6",
      icon: <IconMapPin className="text-oren w-5 " />,
    },
  ];

  const navlinks = [
    {
      title: "Home",
      type: "link",
      target: "/",
    },
    {
      title: "About",
      type: "link",
      target: "/about",
    },
    {
      title: "Products",
      type: "list",
      options: products,
      target: "/products",
    },
    {
      title: "Services",
      type: "list",
      options: services,
      target: "/services",
    },
    {
      title: "Brands",
      type: "link",
      target: "/brands",
    },
    {
      title: "Contact",
      type: "link",
      target: "/contact",
    },
    {
      title: "Career",
      type: "link",
      target: "/career",
    },
  ];

  const handleChange = (e) => {
    router.push(`/${e.value}`);
  };

  const options = [
    {
      value: "/Hadeh",
      label: "One",
    },
    { value: "/Capek", label: "Two", className: "myOptionClassName" },
  ];
  const defaultOption = options[0];

  return (
    <>
      <nav className="navbar-section ">
        {/* Desktop View */}
        <div className="hidden md:block">
          {/* contact bar */}
          <div className="contact-bar bg-hitam py-4">
            <div className="w-10/12 mx-auto">
              <div
                style={{
                  display: "-webkit-flex",
                  "-webkit-justify-content": "space-between",
                }}
                className="flex flex-row justify-between"
              >
                <Link href="/" className="logo">
                  <img
                    alt="Total Prime Logo"
                    src={"/assets/img/logo-navbar.png"}
                    className="md:w-28 lg:w-40"
                    // width={1000}
                    // height={1000}
                    // style={{
                    //   maxWidth: "100%",
                    //   height: "auto",
                    // }}
                  />
                </Link>

                <div style={{ "margin-left": "auto" }} className="contact-bar">
                  <div className="grid grid-cols-6 gap-x-8">
                    {contents.map((item, itemIdx) => {
                      return (
                        <>
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${item.type} col-span-2`}
                            key={itemIdx}
                          >
                            <div className="flex gap-x-2 items-center">
                              <div className="icon ">{item.icon}</div>
                              <div className="desc">
                                <div className="text-oren text-md">
                                  {item.title}
                                </div>
                                <div className="font-bold text-white text-sm">
                                  {item.desc}
                                </div>
                              </div>
                            </div>
                          </a>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* navbar */}
          <div className="nav-links bg-oren ">
            <div className="w-10/12 mx-auto">
              <div className="flex flex-row justify-center">
                {navlinks.map((item, itemIdx) => {
                  return (
                    <>
                      {item.type === "list" ? (
                        item.title === "Products" ? (
                          <div
                            className={`nav-items relative md:z-50 py-5 px-3 text-hitam font-black hover:bg-hitam hover:text-oren hover:font-bold  ${
                              active !== "/" &&
                              active === item.target &&
                              `bg-hitam text-oren `
                            }`}
                            key={itemIdx}
                            onMouseEnter={() => setListOpen(item.title)}
                            onMouseLeave={() => setListOpen(false)}
                          >
                            {" "}
                            <Button
                              as={Link}
                              icon={
                                listOpen === "Products" ? (
                                  <IconChevronUp size={20} />
                                ) : (
                                  <IconChevronDown size={20} />
                                )
                              }
                              style="flex flex-row gap-x items-center"
                              text={item.title}
                              href={item.target}
                            />
                            {listOpen === "Products" && (
                              <div className="option-link absolute bg-opacity-80 bg-white flex flex-col w-60 left-0 top-16 ">
                                {products.map((item, itemIdx) => {
                                  return (
                                    <>
                                      <Button
                                        as={Link}
                                        key={itemIdx}
                                        text={item.title}
                                        href={`${item.target}`}
                                        style={`nav-items py-5 px-3 text-hitam font-black hover:bg-hitam hover:text-oren hover:font-bold  ${
                                          active !== "/" &&
                                          active === item.target &&
                                          `bg-hitam text-oren border-b-2 border-b-oren`
                                        }`}
                                      />
                                    </>
                                  );
                                })}{" "}
                              </div>
                            )}
                          </div>
                        ) : (
                          <div
                            className={`nav-items relative md:z-50 py-5 px-3 text-hitam font-black hover:bg-hitam hover:text-oren hover:font-bold  ${
                              active !== "/" &&
                              active === item.target &&
                              `bg-hitam text-oren`
                            }`}
                            key={itemIdx}
                            onMouseEnter={() => setListOpen(item.title)}
                            onMouseLeave={() => setListOpen(false)}
                          >
                            {" "}
                            <Button
                              as={Link}
                              icon={
                                listOpen === "Services" ? (
                                  <IconChevronUp size={20} />
                                ) : (
                                  <IconChevronDown size={20} />
                                )
                              }
                              style="flex flex-row gap-x items-center"
                              text={item.title}
                              href={item.target}
                            />
                            {listOpen === "Services" && (
                              <div className="option-link absolute bg-opacity-80 bg-white flex flex-col w-60 left-0 top-16 ">
                                {services.map((item, itemIdx) => {
                                  return (
                                    <>
                                      <Button
                                        as={Link}
                                        key={itemIdx}
                                        text={item.title}
                                        href={`${item.target}`}
                                        style={`nav-items py-5 px-3 text-hitam font-black hover:bg-hitam hover:text-oren hover:font-bold  ${
                                          active !== "/" &&
                                          active === item.target &&
                                          `bg-hitam text-oren border-b-2 border-b-oren`
                                        }`}
                                      />
                                    </>
                                  );
                                })}{" "}
                              </div>
                            )}
                          </div>
                        )
                      ) : (
                        <div
                          className={`nav-items relative md:z-50 py-5 px-3 text-hitam font-black hover:bg-hitam hover:text-oren hover:font-bold  ${
                            active !== "/" &&
                            active === item.target &&
                            `bg-hitam text-oren`
                          }`}
                          key={itemIdx}
                        >
                          {" "}
                          <Button
                            as={Link}
                            style="flex flex-row gap-x items-center"
                            text={item.title}
                            href={item.target}
                          />
                        </div>
                      )}
                    </>
                  );
                })}{" "}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="block md:hidden top-0 fixed w-full z-40">
          <div className="contact-bar bg-hitam py-4">
            <div className="w-11/12 mx-auto">
              <div className="flex flex-col">
                <div className="contact-bar text-white mb-3">
                  <div className="flex flex-row justify-between">
                    {contents.map((item, itemIdx) => {
                      return (
                        <>
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={item.type}
                            key={itemIdx}
                          >
                            <div className="flex gap-x-2 items-center">
                              <div className="icon ">{item.icon}</div>
                              <div className="desc">
                                <div className="text-oren text-xs">
                                  {item.title}
                                </div>
                                <div className="font-bold text-white text-kecil">
                                  {item.desc}
                                </div>
                              </div>
                            </div>
                          </a>
                        </>
                      );
                    })}
                  </div>
                </div>

                <div className="nav-brand flex justify-between py-4">
                  <Link className="nav-logo flex items-center" href="/">
                    <img
                      alt="Total Prime Logo"
                      src={"/assets/img/logo-navbar.png"}
                      className="w-24"
                    />
                  </Link>
                  <Button
                    onClick={() => setIsOpen(!isOpen)}
                    href="/"
                    icon={isOpen ? <IconX /> : <IconMenu2 />}
                    style="text-white text-xl"
                  />
                </div>
                <div
                  className={`${
                    isOpen === true ? "h-screen top-[100px]" : "top-[-800px] "
                  }     nav-links  bg-hitam  text-oren my-auto text-center py-36 absolute left-0 right-0 z-20 ease-in-out duration-700`}
                >
                  <div className="flex flex-col gap-y-5">
                    {navlinks.map((item, itemIdx) => {
                      return (
                        <button
                          key={itemIdx}
                          className={`${
                            active === item.target && "text-orange font-medium"
                          }  ${
                            item.className
                          } hover:underline hover:underline-offset-8 hover:decoration-wavy hover:text-orange transition ease-in-out delay-150`}
                        >
                          <Link href={`${item.target}`}>{item.title}</Link>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
