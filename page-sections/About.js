import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ComputerDesktopIcon, HomeIcon, HeartIcon } from "@heroicons/react/20/solid";
import Head from "next/head";

const handleClick = () => {
  window.open('https://www.google.com', '_blank');
};

const features = [
  {
    name: 'Tech and Physical Products',
    description:'We help visionaries build their products, find customers, enter accelerators, and scale quickly.',
    icon: ComputerDesktopIcon,
    color: 'text-sky-400',
  },
  {
    name: 'Small Businesses and Services',
    description: 'We support small businesses in the State College area, arts and crafts, and more.',
    icon: HomeIcon,
    color: 'text-purple-400',
  },
  {
    name: 'Social Entrepreneurship',
    description: 'We help social entrepreneurs build sustainable businesses that solve real social problems.',
    icon: HeartIcon,
    color: 'text-red-400',
  }
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const textVariant = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 2, delay: 0.5 } },
  };

  const imageVariant = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 2, delay: 0.5 } },
  };

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Spinnaker&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Raleway&display=swap"
        />
      </Head>
      <div className="overflow-hidden py-6 sm:py-8">
        <div className="relative isolate overflow-hidden bg-gray-900 sm:py-8">
            <div
            className="mt-20 hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            aria-hidden="true"
            >
            <div
                className="mt-20 aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                style={{
                clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
            />
            </div>
            <div
            className="mt-20 absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            aria-hidden="true"
            >
            <div
                className="mt-20 aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                style={{
                clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
            />
            </div>  
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            ref={ref}
            className={`mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 ${
              inView ? "opacity-100" : "opacity-0"
            } transition-opacity duration-1000 ease-in-out`}
          >
            <motion.div className="lg:pr-8 lg:pt-4" variants={textVariant}>
              <div className="lg:max-w-lg">
                <motion.p
                  className="mt-2 text-xl font text-blue-500 sm:text-xl font-spinnaker"
                  variants={textVariant}
                  style={{ fontFamily: "Spinnaker, sans-serif" }}
                >
                  Who we are.
                </motion.p>
                <motion.p
                  className="mt-2 text-4xl font text-gray-100 sm:text-5xl font-spinnaker"
                  variants={textVariant}
                  style={{ fontFamily: "Spinnaker, sans-serif" }}
                >
                  We help student entrepreneurs at any stage<span className="text-blue-500">.</span>
                </motion.p>
                <motion.p className="mt-4 text-xl font-extralight text-gray-200" variants={textVariant} style={{ fontFamily: "Spinnaker, sans-serif" }}>
                  Curious about starting? Already have an idea or company? This is your place<span className="text-blue-500">.</span>
                </motion.p>
                <dl className="mt-14 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="text-2xl font-semibold text-gray-200 mb-1 font-spinnaker" style={{ fontFamily: "Spinnaker, sans-serif" }}>
                        <feature.icon className={`absolute left-1 top-1.5 h-5 w-5 ${feature.color}`} aria-hidden="true" />
                        <span className="">{feature.name}</span>
                      </dt>
                      <dd className="inline font-spinnaker text-gray-300" style={{ fontFamily: "Spinnaker, sans-serif" }}>{feature.description}</dd>
                    </div>
                  ))}
                </dl>
                <div className="flex items-center justify-center mb-24">
                  <motion.div
                    className="mb-20 w-1/2 flex flex-col items-center mt-12 cursor-pointer border border-gray-300 hover:border-gray-400 border-2 rounded-sm text-base font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    onClick={handleClick}
                    style={{ fontFamily: "Spinnaker, sans-serif" }}
                  >
                    <div className="font-bold tracking-light text-gray-100 py-2">Join the Community</div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            <motion.img
              src="https://raw.githubusercontent.com/raymond-design/nesimgs/a41e9f6fe201dbb4d1399aa231f11856423cc19b/DSC_3346.jpeg"
              alt="Product screenshot"
              className="mt-24 flex items-center justify-center w-[48rem] max-w-none rounded-md shadow-xl ring-2 ring-gray-50/70 backdrop-filter backdrop-blur-xl/50 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
              variants={imageVariant}
            />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
