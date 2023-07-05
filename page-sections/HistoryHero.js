import React from "react";
import EaseInTransition from "../components/EaseInTransition.js";
import Head from "next/head";
import { motion } from "framer-motion";
import { ChevronDown } from "react-feather";

export default function Hero() {
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
      >
        {/* Hero text */}
        <EaseInTransition delay={1} duration={1} initialY={50}>
          <div
            className="text-gray-100 text-title-responsive mt-2"
            style={{ fontFamily: "Spinnaker, sans-serif" }}
          >
            Our History<span className="text-blue-500">.</span>
          </div>
          <div className="mt-10"></div>
        </EaseInTransition>

        {/* Discover What We Do */}
        <motion.div
          className="flex flex-col items-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          style={{ fontFamily: "Spinnaker, sans-serif" }}
        >
          <div className="text-gray-200 mb-2">This is our history</div>
          <ChevronDown size={24} className="text-gray-200"/>
        </motion.div>
      </div>
      <style jsx>{`
        .floating-squares {
          position: absolute;
          top: 30%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .square {
          position: absolute;
          background-color: rgba(59, 130, 246, 0.3);
          opacity: 0; /* Start with opacity set to 0 */
          animation: float 6s infinite ease-in-out;
          animation-delay: 1s;
          transform-origin: center center;
        }

        .square-1 {
          width: 40px;
          height: 40px;
          top: -50px;
          left: -50px;
        }

        .square-2 {
          width: 60px;
          height: 60px;
          top: 50px;
          left: 50px;
        }

        .square-3 {
          width: 80px;
          height: 80px;
          top: 100px;
          left: -100px;
        }

        @keyframes float {
          0% {
            opacity: 0; /* Set opacity to 0 at the beginning of the animation */
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            opacity: 1; /* Set opacity to 1 at the middle of the animation */
            transform: translate(20px, 20px) rotate(180deg);
          }
          100% {
            opacity: 0; /* Maintain opacity at 1 at the end of the animation */
            transform: translate(0, 0) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
