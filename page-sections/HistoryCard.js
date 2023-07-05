import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import Head from "next/head";

const variants = {
  container: {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delay: 0.1,
        ease: "easeOut",
      },
    },
  },
  card: {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.8,
        duration: 1,
      },
    },
  },
};

function Card({
  title,
  description,
  image_url,
}) {
  return (
    <motion.div variants={variants.card}>
      <div className="rounded-sm px-6 py-4 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <div
            className={
              "grid grid-cols-1 my-auto mx-6 flex-1 text-center lg:text-left"
            }
          >
            <p className="text-gray-100 font-semibold py-4 text-3xl" style={{ fontFamily: "Spinnaker, sans-serif" }}>{title}</p>
            <p className="text-gray-200 mb-4 text-md lg:pr-16" style={{ fontFamily: "Spinnaker, sans-serif" }}> {description}</p>
          </div>
        </div>
        <div className="flex-1">
          <img
            src={image_url}
            className="rounded-md black mx-auto my-auto shadow-xl object-cover"
          />{" "}
        </div>
      </div>
    </motion.div>
  );
}

export default function HistoryCard({ subtitle, title, description }) {
  const textVariant = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 2, delay: 0.5 } },
  };

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Spinnaker&display=swap"
        />
      </Head>
      <div id="portfolio" className="section">
        <motion.p
          className="text-xl font text-blue-500 sm:text-xl font-spinnaker"
          variants={textVariant}
          style={{ fontFamily: "Spinnaker, sans-serif" }}
        >
          {subtitle}
        </motion.p>
        <motion.p
          className="mt-2 text-4xl font text-gray-100 sm:text-5xl font-spinnaker"
          variants={textVariant}
          style={{ fontFamily: "Spinnaker, sans-serif" }}
        >
          {title}
          <span className="text-blue-500">.</span>
        </motion.p>
        <motion.p
          className="mt-6 mb-6 text-xl text-gray-200 font-spinnaker"
          variants={textVariant}
          style={{ fontFamily: "Spinnaker, sans-serif" }}
        >
          {description}
          <span className="text-blue-500">.</span>
        </motion.p>
        <hr className="hidden my-6 border border-gray-50/70"></hr>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={variants.container}
          viewport={{ once: true }}
        >
        </motion.div>
        </div>
    </div>
  );
}
