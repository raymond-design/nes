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
