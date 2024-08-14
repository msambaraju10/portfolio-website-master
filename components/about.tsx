"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-24 max-w-[45rem] text-center leading-8 sm:mb-32 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      {
        <p className="mb-3">
          Software Development Engineer(SDE) who holds Masters Degree in Computer Science and Engineering from University of South Florida.
        </p>
      }
      {/* <p className="mb-3">
      During my time at the University of South Florida, I pioneered research that used 
      {" "}
        <span className="font-medium">Virtual Reality</span> to empower individuals with severe cognitive disabilities, 
      crafting immersive experiences fueled by gamification principles.
      </p> */}

      <p className="mb-3">
        Demonstrated experience in the IT industry for over 3+ years in Java with Spring Boot framework for the back-end development and 
        I am equally skilled in building various components and services in React/Angular for front-end development. I have worked on SQL and NoSQL Databases and leveraging AWS for scalable cloud solutions.
       
        </p>
        <p className="mb-3">
        <span className="italic">When I'm not coding</span>, you might find me reading a book or in the office gym.
         {/* I also enjoy{" "}
        <span className="font-medium">astronomy and excited about space travel</span>. I am currently
        reading{" "}
        <span className="font-medium"> "The Book Thief" by Markus Zusak
</span>. People who know me, know me as a dedicated, amicable individual with great attention to detail. */}

      </p>
      <p>
      I am actively seeking for{" "}
        <span className="font-medium">full-time opportunities</span> as a Software developer.
      </p>
    </motion.section>
  );
}
