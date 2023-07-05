import { motion } from "framer-motion";
import Head from "next/head";
import EaseInTransition from "../components/EaseInTransition.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const links = [
  { name: 'Join The Community', href: '#' },
  { name: 'Meet The Team', href: '/team' },
  { name: 'Discover Startups', href: '/startups' },
  { name: 'Read Our History', href: '/history' },
];

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 1,
    },
  },
};

export default function WorkWithUs() {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Spinnaker&display=swap"
        />
      </Head>
      <div className="relative isolate overflow-hidden bg-gray-900 mt-12 sm:mt-16">
        <div
          className="mt-20 hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="mt-6 aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#458dcc] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="mt-28 absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="mt-10 aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#5ea1ff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <EaseInTransition delay={0} duration={0.4} initialY={50}>
          <div className="mx-auto max-w-2xl lg:mx-0">
            <motion.h2
              className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
              style={{ fontFamily: "Spinnaker, sans-serif" }}
              variants={itemVariants}
            >
              Discover entrepreneurship
              <span className="text-blue-500">.</span>
            </motion.h2>
            <motion.p
              className="mt-6 text-lg leading-8 text-gray-200"
              style={{ fontFamily: "Spinnaker, sans-serif" }}
              variants={itemVariants}
            >
              We are builders. We are creators. We are Nittany Entrepreneurs.
            </motion.p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <motion.div
              className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-gray-100 sm:grid-cols-2 md:flex lg:gap-x-10"
              style={{ fontFamily: "Spinnaker, sans-serif" }}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {links.map((link) => (
                <motion.a
                  className="hover:text-gray-300"
                  key={link.name}
                  href={link.href}
                  variants={itemVariants}
                >
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </motion.a>
              ))}
            </motion.div>
          </div>
          </EaseInTransition>
        </div>
        <div className="mt-28 pb-4 text-white">
          <hr className="py-2 w-5/6 mx-auto"></hr>
          <motion.div
            className="px-28 justify-between items-center flex-wrap-reverse"
            variants={itemVariants}
          >
            <div className="flex">
              <div
                className="text-xl font-light"
                style={{ fontFamily: "Spinnaker, sans-serif" }}
              >
                © Nittany Entrepreneurship Society
                <span className="text-blue-500">.</span>
              </div>
              <div className="flex ml-auto">
                <a
                  href="https://www.instagram.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="mr-6 h-7 hover:text-blue-500"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/example"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="mr-2 h-7 hover:text-blue-500"
                  />
                </a>
                <a
                  href="https://orgcentral.psu.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-light ml-4 hover:text-blue-500"
                  style={{ fontFamily: "Spinnaker, sans-serif" }}
                >
                  OrgCentral
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
