import React from "react";
import { Carousel } from "react-responsive-carousel";
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

export default function Portfolio() {
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
        <div className="relative isolate overflow-hidden bg-gray-900 sm:py-8">
            <div
            className="mt-24 hidden sm:absolute sm:-top-10 sm:right-1/4 sm:-z-10 sm:mr-18 sm:block sm:transform-gpu sm:blur-3xl"
            aria-hidden="true"
            >
            <div
                className="mt-10 aspect-[900/845] w-[38.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-40"
                style={{
                clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
            />
            </div>
      <div id="portfolio" className="section">
        <motion.p
          className="text-xl font text-blue-500 sm:text-xl font-spinnaker"
          variants={textVariant}
          style={{ fontFamily: "Spinnaker, sans-serif" }}
        >
          What we do.
        </motion.p>
        <motion.p
          className="mt-2 text-4xl font text-gray-100 sm:text-5xl font-spinnaker"
          variants={textVariant}
          style={{ fontFamily: "Spinnaker, sans-serif" }}
        >
          We provide all kinds of opportunities
          <span className="text-blue-500">.</span>
        </motion.p>
        <motion.p
          className="mt-6 mb-6 text-xl text-gray-200 font-spinnaker"
          variants={textVariant}
          style={{ fontFamily: "Spinnaker, sans-serif" }}
        >
          Whether you're learning, building, or simply hanging out, our
          community offers events and resources to support your journey
          <span className="text-blue-500">.</span>
        </motion.p>
        <hr className="hidden my-6 border border-gray-50/70"></hr>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={variants.container}
          viewport={{ once: true }}
        >
          <div className="mt-10 mb-8">
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={5000}
              stopOnHover={false}
              borderRadius={0}
            >
              <div>
                <Card
                  title="Pitch Competitions and Grants"
                  description="We help students with funding and accelerator opportunities."
                  image_url="https://raw.githubusercontent.com/raymond-design/nesimgs/main/IMG_0730.jpeg"
                />
              </div>
              <div>
                <Card
                  title="Community Events"
                  description="Meet other student entrepreneurs and see what they're building. We host all kinds of events to help students flex their entrepreneurial muscles."
                  image_url="https://raw.githubusercontent.com/raymond-design/nesimgs/main/IMG_4532.jpeg"
                />
              </div>
              <div>
                <Card
                  title="Speaker Events"
                  description="Learn more from industry professionals and alumni. We host speaker events, networking sessions, and more."
                  image_url="https://raw.githubusercontent.com/raymond-design/nesimgs/main/IMG_0730.jpeg"
                />
              </div>
              <div>
                <Card
                  title="Startup Resources"
                  description="NES members have access to discounts and free trials for a variety of startup resources, including AWS credits and more."
                  image_url="https://raw.githubusercontent.com/raymond-design/nesimgs/main/IMG_0659.jpeg"
                />
              </div>
            </Carousel>
          </div>
        </motion.div>
        </div>
        </div>
    </div>
  );
}
