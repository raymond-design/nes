import React from "react";
import SEO from "../components/SEO.js";
import Hero from "../page-sections/Hero.js";
import About from "../page-sections/About.js";
import Portfolio from "../page-sections/Portfolio.js";
import Nav from "../components/StartupsNav.js";
import WorkWithUs from "../page-sections/Community.js";

export default function Home() {
  return (
    <div id="top" className="bg-gray-900 overflow-x-hidden">
      <SEO
        title="Nittany Entrepreneurship Society"
        description="Nittany Entrepreneurship Society is Penn State’s oldest community of student entrepreneurs. We are a student organization that provides resources, connections, and opportunities to students who are interested in entrepreneurship."
      />
      <Nav navigation={[
        { name: 'Home', href: '/', current: true },
        { name: 'Resources', href: '/resources', current: false },
        { name: 'Team', href: '/team', current: false },
        { name: 'Startups', href: '/startups', current: false },
        { name: 'Our History', href: '/history', current: false },
        { name: 'Contact', href: '/contact', current: false },
      ]}/>
      <Hero />
      <About />
      <Portfolio />
      <WorkWithUs />
    </div>
  );
}
