import React from "react";
import EaseInTransition from "../components/EaseInTransition.js";
import Head from "next/head";
import { motion } from "framer-motion";
import Stats from "../components/Stats.js";

export default function Hero() {
  const handleClick = () => {
    // Logic to scroll the page down
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const textVariant = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.25 } },
  };

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Spinnaker&display=swap"
        />
      </Head>
      <div
        id="hero"
        className="bg-gray-900 flex flex-col justify-center items-center min-h-screen relative overflow-hidden"
      >
        {/* Hero text */}
        <EaseInTransition delay={0.5} duration={0.5} initialY={50}>
        <motion.p
          className="text-2xl font text-blue-500 sm:text-2xl font-spinnaker text-center" // Added "text-center" class
          variants={textVariant}
          style={{ fontFamily: "Spinnaker, sans-serif" }}
        >
          By the numbers
        </motion.p>
        <motion.p
          className="mt-2 mb-12 text-4xl font text-gray-100 sm:text-5xl font-spinnaker text-center" // Added "text-center" class
          variants={textVariant}
          style={{ fontFamily: "Spinnaker, sans-serif" }}
        >
          A quick look at the startup ecosystem
        </motion.p>
        <Stats />
        </EaseInTransition>
      </div>
    </div>
  );
}
