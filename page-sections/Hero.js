import React from "react";
import EaseInTransition from "../components/EaseInTransition.js";
import Head from "next/head";
import { motion } from "framer-motion";
import { ChevronDown } from "react-feather";

export default function Hero() {
  const handleClick = () => {
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
      <div
        id="hero"
        className="section-header flex flex-col justify-center items-center min-h-screen relative overflow-hidden"
        style={{
          position: "relative",
        }}
      >
        
        <EaseInTransition delay={0} duration={0.4} initialY={50}>
          <motion.div
            className="hidden absolute top-20 right-[12%] w-[35%] h-[15vw] transform rotate-12 opacity-50"
            style={{
              zIndex: 1,
              backgroundColor: "rgba(0, 0, 255, 0.5)",
              borderRadius: "50%",
              transformOrigin: "center",
            }}
            initial={{ opacity: 0, backgroundColor: "rgba(0, 0, 255, 0)" }}
            animate={{ opacity: 1, backgroundColor: "rgba(0, 0, 255, 0.1)" }}
            transition={{ duration: 2, backgroundColor: "rgba(0, 0, 255, 0.05)" }}
          ></motion.div>
        </EaseInTransition>

        <EaseInTransition delay={1} duration={1} initialY={50}>
          <div
            className="text-gray-100 text-title-responsive mt-2"
            style={{ fontFamily: "Spinnaker, sans-serif" }}
          >
            Nittany Entrepreneur Society<span className="text-blue-500">.</span>
          </div>
          <hr className="my-6 border border-gray-100/50"></hr>
          <div
            className="text-gray-100 text-subtitle-responsive my-6"
            style={{ fontFamily: "Spinnaker, sans-serif" }}
          >
            Penn State’s Oldest Community of Student Entrepreneurs<span className="text-blue-500">.</span>
          </div>
          <div className="mt-10"></div>
        </EaseInTransition>

        <motion.div
          className="flex flex-col items-center mt-8 cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          onClick={handleClick}
          style={{ fontFamily: "Spinnaker, sans-serif" }}
        >
          <div className="text-gray-100 hover:text-gray-300 mb-2">Discover What We Do</div>
          <ChevronDown size={24} className="text-blue-500 hover:text-blue-300"/>
        </motion.div>
      </div>
    </div>
  );
}
