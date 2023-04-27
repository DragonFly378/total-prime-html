import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "@/widget/Layout";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Jumbotron from "@/components/Jumbotron";
import { products } from "@/datas";

const ProductDetail = () => {
  const router = useRouter();
  const { productName } = router.query;
  // console.log(productName);

  const product = products?.detail[productName];

  // const { title, desc, imageProducts, imageBrands } = products[productName];
  // console.log(products[productName]?.title);

  // console.log(product.desc);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Layout>
        <Jumbotron
          styleProps={{
            backgroundImage: `linear-gradient(89.99deg, rgba(0, 0, 0, 0.89) 18.07%, rgba(0, 0, 0, 0.37) 90.55%), url(${product?.images[0]})`,
          }}
          classStyle="md:min-h-[400px]"
          imageBg={product?.images[0]}
        >
          {" "}
          <h2 className="md:text-3xl text-xl text-white font-bold md:leading-relaxed">
            {product?.title}
          </h2>
        </Jumbotron>
        <section className="section-content my-[80px]">
          <div className="w-11/12 md:w-10/12 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10">
              <div className="col-span-1 md:col-span-2">
                <div className="image-products flex flex-col gap-y-4 md:gap-y-8">
                  {product?.images?.map((item, itemIdx) => {
                    return (
                      <>
                        <img
                          key={itemIdx}
                          data-aos={`fade-up`}
                          data-aos-easing="linear"
                          data-aos-duration={`200`}
                          alt={product?.title}
                          src={item}
                          width={200}
                          height={100}
                          className="w-full h-[200px] object-cover border border-hitam"
                        />
                      </>
                    );
                  })}
                </div>
              </div>
              <div className="col-span-1 md:col-span-8 md:w-11/12 mx-auto bg-[#ebebeb] text-justify py-2 md:py-6 px-2 md:px-8">
                {product?.desc}
              </div>
              <div className="col-span-1 md:col-span-2 md:py-6">
                <h2 className="text-center md:text-left md:text-3xl mb-10 md:mb-8 text-xl text-hitam font-bold md:leading-relaxed">
                  Brands
                </h2>{" "}
                <div className="image-brands flex flex-col gap-y-8 md:gap-y-10 w-8/12 md:w-11/12 mx-auto">
                  {product?.brands?.map((item, itemIdx) => {
                    return (
                      <>
                        <img
                          data-aos={`fade-up`}
                          data-aos-easing="linear"
                          data-aos-duration={`200`}
                          key={itemIdx}
                          alt="brands"
                          src={item}
                          width={200}
                          height={100}
                          className="w-full"
                        />
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ProductDetail;
