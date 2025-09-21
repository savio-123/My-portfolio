import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { styles } from "../styles";
import { educations } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const EducationCard = ({ education, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });

  return (
    <motion.div
      ref={ref}
      variants={fadeIn("up", "spring", index * 0.3, 0.75)} 
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      <VerticalTimelineElement
        contentStyle={{ background: "#1d1836", color: "#fff",marginBottom:"40px" }}
        contentArrowStyle={{ borderRight: "7px solid  #232631" }}
        date={education.date}
      > 
        <h3 className="text-white text-[24px] font-bold">{education.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {education.points.map((point, i) => (
            <React.Fragment key={i}>
              {point}
              <br />
            </React.Fragment>
          ))}
        </p>
      </VerticalTimelineElement>
    </motion.div>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Academic Journey</p>
        <h2 className={styles.sectionHeadText}>Education</h2>
      </motion.div>

      <div className="flex flex-col mt-20 -ml-10">
        <VerticalTimeline animate={false}>
          {educations.map((education, index) => (
            <EducationCard key={index} education={education} index={index} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");