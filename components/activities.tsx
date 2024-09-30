"use client";
import React from "react";
import SectionHeading from "./section-headings";

import { activitiesData } from "@/lib/data";
import { useSectionInView } from "@/hooks/hooks";

export default function Activities() {
  const { ref } = useSectionInView("Activities");

  return (
    <section
      id="activities"
      ref={ref}
      className=" flex flex-col scroll-mt-28 mb-28 sm:mb-40 px-4 sm:px-6 lg:px-8"
    >
      <SectionHeading>Activities</SectionHeading>
      <div className="flex flex-col items-center justify-center w-full space-y-10">
        {activitiesData.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-3xl"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.date}
              </p>
            </div>
            {item.description.map((v, index) => (
              <li
                key={index}
                className="text-base text-gray-700 dark:text-gray-300"
              >
                {v.description}
              </li>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
