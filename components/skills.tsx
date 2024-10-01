"use client";

import React from "react";
import SectionHeading from "./section-headings";
import { skillData } from "@/lib/data";
import { useSectionInView } from "@/hooks/hooks";
import { motion } from "framer-motion";

interface Skill {
  SkillIcon: {
    src: string;
  };
  title: string;
  description: string;
}

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 mx-auto"
    >
      <SectionHeading>My skills</SectionHeading>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 justify-items-center text-white">
        {skillData.map(
          (skill, index) =>
            skill && (
              <motion.div
                key={index}
                className="w-11/12 sm:w-auto max-w-sm p-4 bg-gray-800 rounded-lg dark:bg-gray-700 dark:text-white"
                variants={fadeInAnimationVariants}
                initial="initial"
                animate="animate"
                custom={index}
              >
                <img
                  src={skill.SkillIcon.src}
                  alt={skill.title}
                  className="w-12 h-12 mx-auto"
                />
                <h3 className="mt-4 text-lg font-semibold">{skill.title}</h3>
                <p className="mt-2 text-sm text-white">{skill.description}</p>
              </motion.div>
            )
        )}
      </div>
    </section>
  );
}
