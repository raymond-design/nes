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
      bio: 'I\'m a fourth year studying Cyber Security Analytics and Operations. I\'ve been involved in a couple of startups in recent years that spiked my interest in entrepreneurship! I enjoy snowboarding, boxing, and working out outside of academics.',
      linkedin: 'https://www.linkedin.com/in/johndoe'
    },
    {
      name: 'Bianca',
      title: 'Vice President',
      picture: 'https://robohash.org/Bianca.png',
      bio: 'Bianca is a rising junior figuring out her major but enrolled in the innovation and entrepreneurship minor at Penn State. Currently, as the vice president of the entrepreneurship club she loves helping facilitate connections through the entrepreneurship ecosystem. She has ventured into different aspects of startup culture. You can find her working in the prototyping and manufacturing facility OriginLabs. Bianca has served the entrepreneurship community for almost 2 years and will continue to help Penn State entrepreneurship shine!',
      linkedin: 'https://www.linkedin.com/in/janesmith'
    },
    {
      name: 'Ethan',
      title: 'Marketing and Communications Director',
      picture: 'https://robohash.org/YOUR-TEXT.png',
      bio: 'Second year aerospace engineering major with a minor in entrepreneurship and innovation. I love football and soccer. Go birds.',
      linkedin: 'https://www.linkedin.com/in/alexjohnson'
    },
    {
        name: 'Pranav',
        title: 'External Relations and Outreach Specialist',
        picture: 'https://robohash.org/YOUR-TEXT.png',
        bio: 'I\'m Pranav Mishra – an adventurous soul and committed entrepreneur. As the External Director & Outreach Specialist at the Nittany Entrepreneurship Society, I bring a global perspective shaped by my journey through 12 schools across 15 places. Beyond entrepreneurship, I\'m fueled by a love for adventure sports like hiking and rock climbing, and you\'ll often find me in the boxing ring. My dynamic background enriches our outreach efforts, embodying our mission to foster innovation and entrepreneurial success.',
        linkedin: 'https://www.linkedin.com/in/alexjohnson'
    },
    {
        name: 'Mehul',
        title: 'Events and Ecosystem Coordinator',
        picture: 'https://robohash.org/YOUR-TEXT.png',
        bio: '',
        linkedin: 'https://www.linkedin.com/in/alexjohnson'
    },
    {
        name: 'Charlotte',
        title: 'Secretary and Community Connector',
        picture: 'https://robohash.org/YOUR-TEXT.png',
        bio: '',
        linkedin: 'https://www.linkedin.com/in/alexjohnson'
    },
    {
        name: 'Heer',
        title: 'Treasurer and Financial Strategist',
        picture: '/alex-johnson.jpg',
        bio: '',
        linkedin: 'https://www.linkedin.com/in/alexjohnson'
    },
    {
      name: 'Ray',
      title: 'Social Chair',
      picture: '/alex-johnson.jpg',
      bio: '',
      linkedin: 'https://www.linkedin.com/in/alexjohnson'
    },
    {
      name: 'Dennis',
      title: 'Philanthropy Chair',
      picture: '/alex-johnson.jpg',
      bio: '',
      linkedin: 'https://www.linkedin.com/in/alexjohnson'
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
