import React from "react";
import SEO from "../components/SEO.js";
import Hero from "../page-sections/TeamHero.js";
import Footer from "../page-sections/Footer.js";
import Team from "../page-sections/Team.js";
import Nav from "../components/StartupsNav.js";

export default function Home() {
  return (
    <div id="top" className="bg-gray-900 overflow-x-hidden">
      <SEO
        title="Nittany Entrepreneurship Society"
        description="Nittany Entrepreneurship Society is Penn State’s oldest community of student entrepreneurs. We are a student organization that provides resources, connections, and opportunities to students who are interested in entrepreneurship."
      />
      <Nav navigation={[
        { name: 'Home', href: '../', current: false },
        { name: 'Team', href: '/team', current: true },
        { name: 'History', href: '/history', current: false },
      ]}/>
      <Hero />
      <Team />
      <Footer />
    </div>
  );
}
