import StartupShowcase from './Showcase.js';
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import Head from "next/head";
import EaseInTransition from "../components/EaseInTransition.js";

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
      <EaseInTransition delay={0} duration={0.4} initialY={50}>
        <motion.p
          className="text-xl font text-purple-400 sm:text-xl font-spinnaker"
          variants={textVariant}
          style={{ fontFamily: "Spinnaker, sans-serif" }}
        >
          Discover.
        </motion.p>
        <motion.p
          className="mt-2 text-4xl font text-gray-100 sm:text-5xl font-spinnaker"
          variants={textVariant}
          style={{ fontFamily: "Spinnaker, sans-serif" }}
        >
          Discover our bustling startup ecosystem
          <span className="text-blue-500">.</span>
        </motion.p>
        <motion.p
          className="mt-6 mb-6 text-xl text-gray-200 font-spinnaker"
          variants={textVariant}
          style={{ fontFamily: "Spinnaker, sans-serif" }}
        >
          Each startup below was started by a current or former Penn State alumni or club member
          <span className="text-blue-500">.</span>
        </motion.p>
        </EaseInTransition>
        <hr className="hidden my-6 border border-gray-50/70"></hr>  
        </div>
        <StartupShowcase startups={startups} />
        </div>
    </div>
  );
}

const startups = [
    {
      name: 'Startup 1',
      yearFounded: 2010,
      industry: 'Software',
      logo: '/logos/startup1.png',
      description: 'A revolutionary software company providing cutting-edge solutions.',
      relation: 'Penn State Alumni',
    },
    {
      name: 'Startup 2',
      yearFounded: 2012,
      industry: 'Arts',
      logo: '/logos/startup2.png',
      description: 'A creative studio specializing in digital art and design.',
      relation: 'Club Alumni',
    },
    {
      name: 'Startup 3',
      yearFounded: 2015,
      industry: 'Security',
      logo: '/logos/startup3.png',
      description: 'A cybersecurity firm protecting businesses from online threats.',
      relation: 'State College',
    },
    {
      name: 'Startup 4',
      yearFounded: 2011,
      industry: 'Consumer',
      logo: '/logos/startup4.png',
      description: 'An e-commerce platform offering unique and trendy products.',
      relation: 'Club Alumni',
    },
    {
      name: 'Startup 5',
      yearFounded: 2014,
      industry: 'Services',
      logo: '/logos/startup5.png',
      description: 'A service-based company providing personalized solutions.',
      relation: 'State College',
    },
    {
      name: 'Startup 6',
      yearFounded: 2018,
      industry: 'Software',
      logo: '/logos/startup6.png',
      description: 'A software development agency specializing in web applications.',
      relation: 'Penn State Alumni',
    },
    {
      name: 'Startup 7',
      yearFounded: 2013,
      industry: 'Arts',
      logo: '/logos/startup7.png',
      description: 'An art gallery showcasing works from emerging artists.',
      relation: 'State College',
    },
    {
      name: 'Startup 8',
      yearFounded: 2016,
      industry: 'Security',
      logo: '/logos/startup8.png',
      description: 'A privacy-focused company developing secure communication tools.',
      relation: 'Club Alumni',
    },
    {
      name: 'Startup 9',
      yearFounded: 2019,
      industry: 'Consumer',
      logo: '/logos/startup9.png',
      description: 'A subscription box service delivering curated products.',
      relation: 'State College',
    },
    {
      name: 'Startup 10',
      yearFounded: 2017,
      industry: 'Services',
      logo: '/logos/startup10.png',
      description: 'A professional consulting firm offering strategic business advice.',
      relation: 'Penn State Alumni',
    },
    {
      name: 'Startup 11',
      yearFounded: 2020,
      industry: 'Software',
      logo: '/logos/startup11.png',
      description: 'A machine learning startup developing intelligent algorithms.',
      relation: 'Club Alumni',
    },
    {
      name: 'Startup 12',
      yearFounded: 2011,
      industry: 'Arts',
      logo: '/logos/startup12.png',
      description: 'An online marketplace for buying and selling artwork.',
      relation: 'State College',
    },
    {
      name: 'Startup 13',
      yearFounded: 2014,
      industry: 'Security',
      logo: '/logos/startup13.png',
      description: 'A biometric authentication company providing advanced security solutions.',
      relation: 'Penn State Alumni',
    },
    {
      name: 'Startup 14',
      yearFounded: 2013,
      industry: 'Consumer',
      logo: '/logos/startup14.png',
      description: 'A sustainable fashion brand committed to eco-friendly practices.',
      relation: 'Club Alumni',
    },
    {
      name: 'Startup 15',
      yearFounded: 2016,
      industry: 'Services',
      logo: '/logos/startup15.png',
      description: 'A digital marketing agency helping businesses reach their audience.',
      relation: 'State College',
    },
    {
      name: 'Startup 16',
      yearFounded: 2018,
      industry: 'Software',
      logo: '/logos/startup16.png',
      description: 'A cloud-based collaboration platform for remote teams.',
      relation: 'Penn State Alumni',
    },
    {
      name: 'Startup 17',
      yearFounded: 2015,
      industry: 'Arts',
      logo: '/logos/startup17.png',
      description: 'A music streaming service focusing on independent artists.',
      relation: 'State College',
    },
    {
      name: 'Startup 18',
      yearFounded: 2017,
      industry: 'Security',
      logo: '/logos/startup18.png',
      description: 'A data protection company securing sensitive information.',
      relation: 'Club Alumni',
    },
    {
      name: 'Startup 19',
      yearFounded: 2019,
      industry: 'Consumer',
      logo: '/logos/startup19.png',
      description: 'An online marketplace for handmade and artisanal products.',
      relation: 'State College',
    },
    {
      name: 'Startup 20',
      yearFounded: 2021,
      industry: 'Services',
      logo: '/logos/startup20.png',
      description: 'A platform connecting freelancers with clients for gig-based work.',
      relation: 'Penn State Alumni',
    },
    {
      name: 'Startup 21',
      yearFounded: 2012,
      industry: 'Software',
      logo: '/logos/startup21.png',
      description: 'An artificial intelligence company developing autonomous systems.',
      relation: 'Club Alumni',
    },
    {
      name: 'Startup 22',
      yearFounded: 2014,
      industry: 'Arts',
      logo: '/logos/startup22.png',
      description: 'A virtual reality studio creating immersive experiences.',
      relation: 'State College',
    },
    {
      name: 'Startup 23',
      yearFounded: 2016,
      industry: 'Security',
      logo: '/logos/startup23.png',
      description: 'A blockchain technology company providing decentralized solutions.',
      relation: 'Penn State Alumni',
    },
    {
      name: 'Startup 24',
      yearFounded: 2018,
      industry: 'Consumer',
      logo: '/logos/startup24.png',
      description: 'A health and wellness brand offering natural and organic products.',
      relation: 'Club Alumni',
    },
    {
      name: 'Startup 25',
      yearFounded: 2015,
      industry: 'Services',
      logo: '/logos/startup25.png',
      description: 'A language learning platform with personalized lessons.',
      relation: 'State College',
    },
    {
      name: 'Startup 26',
      yearFounded: 2017,
      industry: 'Software',
      logo: '/logos/startup26.png',
      description: 'A mobile app development company building innovative solutions.',
      relation: 'Penn State Alumni',
    },
    {
      name: 'Startup 27',
      yearFounded: 2019,
      industry: 'Arts',
      logo: '/logos/startup27.png',
      description: 'An online photography community for enthusiasts and professionals.',
      relation: 'State College',
    },
    {
      name: 'Startup 28',
      yearFounded: 2020,
      industry: 'Security',
      logo: '/logos/startup28.png',
      description: 'A threat intelligence platform helping organizations stay secure.',
      relation: 'Club Alumni',
    },
    {
      name: 'Startup 29',
      yearFounded: 2013,
      industry: 'Consumer',
      logo: '/logos/startup29.png',
      description: 'A personalized nutrition service based on genetic analysis.',
      relation: 'State College',
    },
    {
      name: 'Startup 30',
      yearFounded: 2011,
      industry: 'Services',
      logo: '/logos/startup30.png',
      description: 'A virtual assistant company providing administrative support.',
      relation: 'Penn State Alumni',
    },
  ];  
