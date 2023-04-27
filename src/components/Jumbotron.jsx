import Image from "next/image";
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

const Jumbotron = ({ children: content, classStyle, styleProps }) => {
  // const imageBg = "/assets/img/jumbotron_bg.png";

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  console.log(styleProps);
  return (
    <>
      <section
        style={styleProps}
        className={`bg-hitam jumbotron-page py-32 ${classStyle} flex items-center  bg-center bg-no-repeat bg-cover `}
      >
        <div className="w-11/12 md:w-10/12 mx-auto">
          <div className="content block text-center md:text-left items-center md:grid md:grid-cols-2 ">
            <div
              data-aos="zoom-in-down"
              data-aos-easing="linear"
              className="md:col-span-1 xl:w-3/4 md:w-full flex flex-col justify-center gap-y-3 md:gap-y-6"
            >
              {content}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Jumbotron;
