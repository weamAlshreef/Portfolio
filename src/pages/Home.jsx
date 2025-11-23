import React from "react";
import { 
  Services, 
  Portfolio, 
  Resume, 
  Skill, 
  Testimonial, 
  Blog, 
  Contact 
} from "../utils/Router";
import { Hero } from "../screen/hero/Hero";

export const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Resume />
      <Skill />
      <Testimonial />
      <Blog />
      <Contact />
    </>
  );
};