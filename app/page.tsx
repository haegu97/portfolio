import About from "@/components/about";
import Activities from "@/components/activities";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

const HomePage = () => {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Skills />
      <Projects />
      <Activities />
    </main>
  );
};

export default HomePage;
