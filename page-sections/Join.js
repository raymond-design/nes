import React, { useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  { delay: 0.5, name: 'Join Us', description: 'Join the Community', link: '/join-us' },
  { delay: 0.75, name: 'Meet The Team', description: 'Meet the Team', link: '/meet-the-team' },
  { delay: 1, name: 'See Startups', description: 'See Startups', link: '/startups' },
  { delay: 1.25, name: 'Our History', description: 'Our History', link: '/history' }
];

const handleClick = (link) => {
  window.open(link, '_blank');
};

export default function Join() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust the threshold as needed
  });

  useEffect(() => {
    if (inView) {
      // Add logic for animations or effects when the component is in view
    }
  }, [inView]);

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Spinnaker&display=swap"
        />
      </Head>
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-8 px-4 py-12 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl" style={{ fontFamily: "Spinnaker, sans-serif" }}>
              Become a <span className="text-blue-500">Nittany Entrepreneur.</span>
            </h2>
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="hidden font-medium text-gray-900">
                    {feature.name}
                  </dt>
                  <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: feature.delay }}
                    style={{ fontFamily: "Spinnaker, sans-serif" }}
                  >
                    <div
                      className="flex items-center justify-center mb-4"
                      onClick={() => handleClick(feature.link)}
                      style={{ cursor: 'pointer' }}
                    >
                      <a className="w-3/4 flex flex-col items-center mt-12 cursor-pointer border border-blue-500 border-2 rounded-sm text-base font-medium">
                        <div className="font-bold tracking-light text-blue-600 py-2">
                          {feature.description}
                        </div>
                      </a>
                    </div>
                  </motion.div>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src="https://raw.githubusercontent.com/raymond-design/nesimgs/main/IMG_4640.jpeg"
              alt="people"
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://raw.githubusercontent.com/raymond-design/nesimgs/main/IMG_0731.jpeg"
              alt="people"
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://raw.githubusercontent.com/raymond-design/nesimgs/main/IMG_0659.jpeg"
              alt="people"
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://raw.githubusercontent.com/raymond-design/nesimgs/main/IMG_0744.jpeg"
              alt="people"
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
