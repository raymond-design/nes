import React from "react";
import SEO from "../components/SEO.js";
import Footer from "../page-sections/Footer.js";
import Nav from "../components/StartupsNav.js";
import StartupShowcase from "../page-sections/StartupShowcase.js";

export default function Home() {
  return (
    <div id="top" className="bg-gray-900 overflow-x-hidden">
      <SEO
        title="Nittany Entrepreneur Society"
        description="Nittany Entrepreneur Society is Penn State’s oldest community of student entrepreneurs. We are a student organization that provides resources, connections, and opportunities to students who are interested in entrepreneurship."
      />
      <Nav navigation={[
        { name: 'Home', href: '../', current: false },
        { name: 'Resources', href: '/resources', current: false },
        { name: 'Team', href: '/team', current: false },
        { name: 'Startups', href: '/startups', current: true },
        { name: 'Our History', href: '/history', current: false },
        { name: 'Contact', href: '/contact', current: false },
      ]}/>
      <StartupShowcase />
      <Footer />
    </div>
  );
}
