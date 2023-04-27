import "@/styles/globals.scss";
import "@/styles/Home.scss";

import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  // console.log(path);
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
