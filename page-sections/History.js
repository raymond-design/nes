import React, { useEffect, useRef } from 'react';
import Head from "next/head";
import { ChevronRight } from "react-feather";
import HistoryHero from "../page-sections/HistoryHero.js";
import HistoryCard from "../page-sections/HistoryCard.js";

const ClubHistory = () => {
  const timelineContainerRef = useRef(null);
  const timelineLineRef = useRef(null);
  const pagesRef = useRef([]);

  useEffect(() => {
    const timelineContainer = timelineContainerRef.current;
    const timelineLine = timelineLineRef.current;
    const pages = pagesRef.current;

    // Calculate timeline line height
    const timelineHeight = timelineContainer.scrollHeight;
    timelineLine.style.height = `${timelineHeight}px`;

    // Add event listener for scroll
    const handleScroll = () => {
      const scrollTop = timelineContainer.scrollTop;
      const containerHeight = timelineContainer.clientHeight;

      // Calculate current active page
      const currentPageIndex = Math.floor(scrollTop / containerHeight);
      const currentPage = pages[currentPageIndex];

      // Highlight current page on the timeline
      pages.forEach(page => page.classList.remove('active'));
      currentPage.classList.add('active');
    };

    timelineContainer.addEventListener('scroll', handleScroll);

    return () => {
      timelineContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Spinnaker&display=swap"
        />
      </Head>
        <div className="bg-gray-900 relative overflow-y-scroll h-screen">
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
            <div
                className="mt-10 aspect-[700/845] w-[88.5625rem] bg-gradient-to-tr from-[#776fff] to-[#ff4694] opacity-40"
                style={{
                clipPath:
                    'polygon(94.1% 44.1%, 100% 31.6%, 97.5% 26.9%, 45.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
            />
            <div
                className="mt-10 aspect-[938/645] w-[108.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-40"
                style={{
                clipPath:
                    'polygon(94.1% 44.1%, 100% 31.6%, 97.5% 26.9%, 45.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 70.2% 62.4%, 52.4% 68.1%, 67.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 27.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
            />
            <div
                className="mt-10 aspect-[394/945] w-[78.5625rem] bg-gradient-to-tr from-[#776fff] to-[#ff4694] opacity-40"
                style={{
                clipPath:
                    'polygon(44.1% 44.1%, 100% 31.6%, 57.5% 26.9%, 45.5% 0.1%, 30.7% 2%, 72.5% 32.5%, 70.2% 42.4%, 52.4% 68.1%, 67.5% 58.3%, 45.2% 44.5%, 27.5% 76.7%, 0.1% 64.9%, 27.9% 100%, 27.6% 66.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
            />
            <div
                className="mt-10 aspect-[203/1038] w-[108.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-40"
                style={{
                clipPath:
                    'polygon(24.1% 44.1%, 100% 31.6%, 97.5% 26.9%, 45.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 70.2% 62.4%, 42.4% 68.1%, 67.5% 58.3%, 45.2% 54.5%, 27.5% 76.7%, 0.1% 24.9%, 27.9% 100%, 47.6% 76.8%, 76.1% 97.7%, 94.1% 44.1%)',
                }}
            />
            </div>
        <div
            className="absolute top-0 left-2 bg-gray-50 w-1"
            ref={timelineLineRef}
        ></div>
        <div className="flex flex-col" ref={timelineContainerRef}>
            <div className="flex-shrink-0 h-screen px-4" ref={el => (pagesRef.current[0] = el)}>
            <h2 className="flex text-gray-50 text-2xl font-bold" style={{ fontFamily: "Spinnaker, sans-serif" }}><ChevronRight className='mt-1'/>Our History</h2>
                <HistoryHero />
            </div>
            <div className="flex-shrink-0 h-screen px-4" ref={el => (pagesRef.current[1] = el)}>
            <h2 className="flex text-gray-50 text-2xl font-bold mt-6" style={{ fontFamily: "Spinnaker, sans-serif" }}><ChevronRight className='mt-1'/>2010</h2>
                <HistoryCard subtitle="The Beginning" title="Original team members join forces" description="From 2010 until 2023, we were named Innoblue. We were founded as a non-profit and social venture fund. Since inception, our entreprenurial members have shaped what a student entrepreneur ecosystem should look like"/>
            </div>
            <div className="flex-shrink-0 h-screen px-4" ref={el => (pagesRef.current[2] = el)}>
            <h2 className="flex text-gray-50 text-2xl font-bold mt-6" style={{ fontFamily: "Spinnaker, sans-serif" }}><ChevronRight className='mt-1'/>2010</h2>
                <HistoryCard subtitle="First Venture" title="HackPSU Created" description="HackPSU is the biggest hackathon that takes place each semester! It was started by our original members"/>
            </div>
            <div className="flex-shrink-0 h-screen px-4" ref={el => (pagesRef.current[3] = el)}>
            <h2 className="flex text-gray-50 text-2xl font-bold mt-6" style={{ fontFamily: "Spinnaker, sans-serif" }}><ChevronRight className='mt-1'/>2012</h2>
                <HistoryCard subtitle="First Entrepreneurial Programs" title="1000 Pitches and the Accelerator" description="Our members started 1000 pitches as well as one of the early startup accelerators for the student community. HackPSU gains support from the College of IST and becomes a well-known event"/>
            </div>
            <div className="flex-shrink-0 h-screen px-4" ref={el => (pagesRef.current[4] = el)}>
            <h2 className="flex text-gray-50 text-2xl font-bold mt-6" style={{ fontFamily: "Spinnaker, sans-serif" }}><ChevronRight className='mt-1'/>2015</h2>
                <HistoryCard subtitle="More Startup Programs" title="IST Startup Week and Summer Founders" description="We introduced 3DayStartUp and IST Startup Week. Our President, Eli, helps establish the Summer Founders Program. Then Penn State President Barron announces the $30 million Invent Penn State initiative"/>
            </div>
            <div className="flex-shrink-0 h-screen px-4" ref={el => (pagesRef.current[5] = el)}>
            <h2 className="flex text-gray-50 text-2xl font-bold mt-6" style={{ fontFamily: "Spinnaker, sans-serif" }}><ChevronRight className='mt-1'/>2016</h2>
                <HistoryCard subtitle="More Coworking Space" title="Happy Valley LaunchBox Opens Downtown" description="IST Startup Week merges with Invent Penn State to become the Penn State Startup Week that we all know of"/>
            </div>
            <div className="flex-shrink-0 h-screen px-4" ref={el => (pagesRef.current[6] = el)}>
            <h2 className="flex text-gray-50 text-2xl font-bold mt-6" style={{ fontFamily: "Spinnaker, sans-serif" }}><ChevronRight className='mt-1'/>2017</h2>
                <HistoryCard subtitle="Even More Programs" title="We launch CodeBlue Workshops" description="We also launched Demo Day for people to share about their startups"/>
            </div>
            <div className="flex-shrink-0 h-screen px-4" ref={el => (pagesRef.current[7] = el)}>
            <h2 className="flex text-gray-50 text-2xl font-bold mt-6" style={{ fontFamily: "Spinnaker, sans-serif" }}><ChevronRight className='mt-1'/>2017</h2>
            
            </div>
            <div className="flex-shrink-0 h-screen px-4" ref={el => (pagesRef.current[8] = el)}>
            <h2 className="flex text-gray-50 text-2xl font-bold mt-6" style={{ fontFamily: "Spinnaker, sans-serif" }}><ChevronRight className='mt-1'/>2018</h2>
            
            </div>
            <div className="flex-shrink-0 h-screen px-4" ref={el => (pagesRef.current[9] = el)}>
            <h2 className="flex text-gray-50 text-2xl font-bold mt-6" style={{ fontFamily: "Spinnaker, sans-serif" }}><ChevronRight className='mt-1'/>2019</h2>
            
            </div>
            <div className="flex-shrink-0 h-screen px-4" ref={el => (pagesRef.current[10] = el)}>
            <h2 className="flex text-gray-50 text-2xl font-bold mt-6" style={{ fontFamily: "Spinnaker, sans-serif" }}><ChevronRight className='mt-1'/>2020</h2>
            
            </div>
            <div className="flex-shrink-0 h-screen px-4" ref={el => (pagesRef.current[11] = el)}>
            <h2 className="flex text-gray-50 text-2xl font-bold mt-6" style={{ fontFamily: "Spinnaker, sans-serif" }}><ChevronRight className='mt-1'/>2021</h2>
            
            </div>
            <div className="flex-shrink-0 h-screen px-4" ref={el => (pagesRef.current[12] = el)}>
            <h2 className="flex text-gray-50 text-2xl font-bold mt-6" style={{ fontFamily: "Spinnaker, sans-serif" }}><ChevronRight className='mt-1'/>2022</h2>
            
            </div>
            <div className="flex-shrink-0 h-screen px-4" ref={el => (pagesRef.current[13] = el)}>
            <h2 className="flex text-gray-50 text-2xl font-bold mt-6" style={{ fontFamily: "Spinnaker, sans-serif" }}><ChevronRight className='mt-1'/>2023</h2>
            
            </div>
        </div>
        </div>
        </div>
    </div>
  );
};

export default ClubHistory;
