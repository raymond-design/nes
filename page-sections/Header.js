import React from "react";
import EaseInTransition from "../components/EaseInTransition.js";
import Head from "next/head";

export default function Header() {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Spinnaker&display=swap"
        />
      </Head>
      <div className="bg-transparent pt-4">
        <EaseInTransition delay={0.35}>
          <div className="max-w-screen-xl mx-auto lg:px-40 px-6">
            <div className="flex justify-between items-center border-gray-100 py-2 md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="#">
                  <span className="text-xl md:text-3xl font-medium" style={{ fontFamily: "Spinnaker, sans-serif" }}>
                    nes<span className="text-blue-500">.</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </EaseInTransition>
      </div>
    </div>
  );
}
