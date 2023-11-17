import React from "react";
// import Tilt from "react-tilt";
// import { motion } from "framer-motion";
import Servicescard from "./Servicescard";
import { styles } from "../styles";
import { services } from "../constants";
// // import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
        <div >
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview</h2>
            <p  className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
            I'm a skilled software developer with experience in TypeScript and
            JavaScript, and expertise in frameworks like React, Node.js, and
            Three.js. I'm a quick learner and collaborate closely with clients to
            create efficient, scalable, and user-friendly solutions that solve
            real-world problems. Let's work together to bring your ideas to life!
            </p>
            <div className="container mx-auto px-4">
             <div className='mt-20 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4 sm:m'>
                {services.map((service, index) => (
                <Servicescard key={service.title} index={index} {...service} />
                ))}
                </div>
            </div>
            
        </div>
    </>
  )
}

export default About
