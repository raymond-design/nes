import React from 'react';
import Head from "next/head";
import EaseInTransition from "../components/EaseInTransition.js";
import { motion } from "framer-motion";

const TeamSection = () => {
  const teamData = [
    {
      name: 'Matt',
      title: 'President',
      picture: 'https://robohash.org/Matt.png',
      bio: 'Matt is a senior studying Cyber Security Analytics and Operations. He has been involved in multiple ventures in recent years including founding GroupIt, a consumer financial startup. He enjoys snowboarding, boxing, and working out outside of academics.',
      linkedin: 'https://www.linkedin.com/in/matt-christianson/'
    },
    {
      name: 'Bianca',
      title: 'Vice President',
      picture: 'https://robohash.org/Bianca.png',
      bio: 'Bianca is a rising junior in the Ag Business Management major and the innovation and entrepreneurship minor at Penn State. She loves helping facilitate connections through the entrepreneurship ecosystem. Bianca current facilites manufacturing at OriginLabs in downtown State College.',
      linkedin: 'https://www.linkedin.com/in/bianca-wisekal-a65b1b22b/'
    },
    {
      name: 'Ethan',
      title: 'Marketing and Communications Director',
      picture: 'https://robohash.org/Ethan.png',
      bio: 'Ethan is a second year aerospace engineering major with a minor in entrepreneurship and innovation. Ethan loves football and soccer. Go birds.',
      linkedin: ''
    },
    {
        name: 'Pranav',
        title: 'External Relations and Outreach Specialist',
        picture: 'https://robohash.org/Pranav.png',
        bio: 'Pranav is the External Director & Outreach Specialist at the Nittany Entrepreneur Society, Pranav brings a global perspective shaped by his journey through 12 schools across 15 places. Beyond entrepreneurship, he\'s fueled by a love for adventure sports like hiking and rock climbing, and you\'ll often find him in the boxing ring.',
        linkedin: 'https://www.linkedin.com/in/pm28/'
    },
    {
        name: 'Mehul',
        title: 'Events and Ecosystem Coordinator',
        picture: 'https://robohash.org/Mehul.png',
        bio: 'Mehul is a data science major and rising junior. He is the founder of Therapeutrack, a Nittany AI team.',
        linkedin: 'https://www.linkedin.com/in/mehul-aggarwal-387144223/'
    },
    {
        name: 'Charlotte',
        title: 'Secretary and Community Connector',
        picture: 'https://robohash.org/Charlotte.png',
        bio: 'Charlotte is an industrial engineering major and rising sophomore. She currently serves as secretary of NES.',
        linkedin: 'https://www.linkedin.com/in/charlotte-patterson-748815285'
    },
    {
        name: 'Nico',
        title: 'Previous VP and Advisor',
        picture: 'https://robohash.org/Nico.png',
        bio: 'Nico is an advisor, founder, investor, and the previous Vice President of NES. He is a partner at Bullmont Capital and an incoming partner at Dorm Room Fund. Nico previously founded Solis, a personal computing infrastructure startup.',
        linkedin: 'https://www.linkedin.com/in/nico-symer-32940116b'
    },
    {
      name: 'Ray',
      title: 'Social Chair',
      picture: 'https://robohash.org/Ray.png',
      bio: 'Ray is an engineer, researcher, and data scientist. He was previously a part of CTFGuide, a cyber/edtech startup. Before that, he cofounded Uprads, a data analytics startup. He is also an avid music producer with experience in music publishing and royalties. His main interest areas include b2b security, green/agtech, hydroinformatics, supply chain security, etc.',
      linkedin: 'https://www.linkedin.com/in/raymondeyan/'
    },
    {
      name: 'Dennis',
      title: 'Treasurer',
      picture: 'https://robohash.org/Dennis.png',
      bio: 'Dennis is a senior business entrepreneurship major out of Philadelphia, Pennsylvania. He is involved in Army Rotc, corporate innovation and entrepreneurship society, and the International business association. His entrepreneurial dreams come from his exposure to business through family and the prominence of entrepreneurship in his culture. His main hobbies and passions are skiing, social media marketing, and fitness.',
      linkedin: ''
    },
    {
      name: 'Khush',
      title: 'Marketing',
      picture: 'https://robohash.org/Khush.png',
      bio: 'Khush leads NES\'s marketing team. He is currently building PROMUNCH Snacks, a nutrition-focused startup.',
      linkedin: ''
    },
  ];

  return (
    <div>
        <Head>
            <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Spinnaker&display=swap"
            />
        </Head>
        <div className="relative isolate overflow-hidden sm:py-8">
            <div
            className="mt-24 hidden sm:absolute sm:-top-10 sm:right-1/4 sm:-z-10 sm:mr-18 sm:block sm:transform-gpu sm:blur-3xl"
            aria-hidden="true"
            >
            <div
                className="mt-10 aspect-[900/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-40"
                style={{
                clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
            />
            </div>
      <div
        id="hero"
        className="py-20 flex flex-col justify-center items-center relative overflow-hidden"
      >
        <EaseInTransition delay={0} duration={0.4} initialY={50}>
        <motion.p
          className="text-xl font text-purple-400 sm:text-xl font-spinnaker"
          style={{ fontFamily: "Spinnaker, sans-serif" }}
        >
          Welcome.
        </motion.p>
        <motion.p
          className="mt-2 text-4xl font text-gray-100 sm:text-5xl font-spinnaker"
          style={{ fontFamily: "Spinnaker, sans-serif" }}
        >
          Meet the current team
          <span className="text-blue-500">.</span>
        </motion.p>
        <motion.p
          className="mt-6 mb-6 text-xl text-gray-200 font-spinnaker"
          style={{ fontFamily: "Spinnaker, sans-serif" }}
        >
          Our team spans entrepreneurs and creatives from all around the community
          <span className="text-blue-500">.</span>
        </motion.p>
        </EaseInTransition>
        {/* Transparent floating blue circles */}
        <div className="hidden absolute inset-0 z-0 overflow-hidden">
          <motion.div
            className="flex items-center justify-center"
            style={{ position: "absolute", left: "25%", top: "25%" }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="w-44 h-44 bg-blue-500 opacity-20 rounded-full"></div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            style={{ position: "absolute", left: "42.5%", top: "25%" }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="w-40 h-40 bg-blue-500 opacity-20 rounded-full"></div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            style={{ position: "absolute", left: "58.5%", top: "25%" }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
          >
            <div className="w-32 h-32 bg-blue-500 opacity-20 rounded-full"></div>
          </motion.div>
      </div>
      </div>
        <section className="py-8 px-16">
        <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8" style={{ fontFamily: "Spinnaker, sans-serif" }}>
            {teamData.map((teamMember, index) => (
                <div key={index} className="border border-gray-200 hover:border-blue-400 rounded-lg shadow-md p-6">
                    <div className="flex items-center justify-center mb-4">
                            <img src={teamMember.picture} alt={teamMember.name} className="rounded-full w-20 h-20" />
                        </div>
                        <h3 className="text-2xl text-gray-100">{teamMember.name}</h3>
                        <p className="text-gray-200 mb-3">{teamMember.title}</p>
                        <p className="text-gray-200 mb-4">{teamMember.bio}</p>
                        <a href={teamMember.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                            LinkedIn
                        </a>
                </div>
            ))}
            </div>
        </div>
        </section>
        </div>
    </div>
  );
};

export default TeamSection;
