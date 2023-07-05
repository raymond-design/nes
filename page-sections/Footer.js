import React from "react";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Spinnaker&display=swap"
        />
      </Head>
      <div className="text-white">
        <div
          className="px-14 py-4 justify-between items-center flex-wrap-reverse"
        >
          <div className="flex">
            <div className="text-xl font-light" style={{ fontFamily: "Spinnaker, sans-serif" }}>
              © Nittany Entrepreneurship Society<span className="text-blue-500">.</span>
            </div>
            <div className="flex ml-auto">
              <a
                href="https://www.instagram.com/example"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} className="mr-6 h-7 hover:text-blue-500" />
              </a>
              <a
                href="https://www.linkedin.com/company/example"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} className="mr-2 h-7 hover:text-blue-500" />
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
        </div>
      </div>
    </div>
  );
}
