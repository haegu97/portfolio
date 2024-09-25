"use client";

import React, { useState } from "react";
import SectionHeading from "./section-headings";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/hooks/hooks";
import ProjectModal from "./project-modal";

type ProjectProps = (typeof projectsData)[number];

export default function Projects() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(
    null
  );
  const { ref } = useSectionInView("Projects", 0.5);

  const handleOpenProjectModal = (project: ProjectProps) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };

  const handleCloseProjectModal = () => {
    setIsProjectModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <div key={index} onClick={() => handleOpenProjectModal(project)}>
            <Project {...project} />
          </div>
        ))}
      </div>
      {isProjectModalOpen && selectedProject && (
        <ProjectModal
          isOpen={isProjectModalOpen}
          project={selectedProject}
          handleClose={handleCloseProjectModal}
        />
      )}
    </section>
  );
}
