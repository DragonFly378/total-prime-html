import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import React from "react";

const Layout = ({ children: konten, style }) => {
  const location = useRouter();

  const path = location.pathname;

  // console.log(path);
  return (
    <>
      <Navbar active={path} />
      <div className={`mt-32 md:mt-0 ${style}`}>{konten}</div>
      <Footer />
    </>
  );
};

export default Layout;
