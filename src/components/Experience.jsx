import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import "./styles/Experience.css";

import { experiences } from "../config/constants/Experience";

const SectionWrapper = (Component, idName) => {
  return function HOC() {
    return (
      <motion.section
        initial={{ opacity: 0, y: -50 }} // Use Framer's built-in animation props
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="padding max-w-7xl mx-auto relative z-0"
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };
};

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="d-flex justify-content-center align-items-center w-100 h-100">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-75 h-75 object-contain"
          />
        </div>
      }
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.75, delay: 0.2 }}
      >
        <h3 className="text-white display-6 fw-bold">{experience.title}</h3>
        <p className="text-secondary fs-6 fw-semibold" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
        <ul className="mt-3 list-unstyled ms-3">
          {experience.points.map((point, index) => (
            <li key={`experience-point-${index}`} className="text-white-100 fs-6 pe-1">
              {point}
            </li>
          ))}
        </ul>
      </motion.div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <div className="padding-x padding-y">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.25, ease: "easeOut" }}
        >
          <p className="section-sub-text text-center">What I have done so far</p>
          <h2 className="section-head-text text-center">Work Experience.</h2>
        </motion.div>
      </div>

      <div className="mt-5 d-flex flex-column">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
