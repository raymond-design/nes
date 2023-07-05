import React from "react";
import Head from "next/head";

export default function Hero() {
  const handleClick = () => {
    // Logic to scroll the page down
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Spinnaker&display=swap"
        />
      </Head>
    </div>
  );
}
