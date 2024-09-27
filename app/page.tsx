// import About from "@/components/about";
// import Contact from "@/components/contact";
// import Education from "@/components/education";
// import Intro from "@/components/intro";
// import Projects from "@/components/projects";
// import SectionDivider from "@/components/section-divider";
// import Skills from "@/components/skills";

// export default function () {
//   return (
//     <main className="flex flex-col items-center px-4">
//       <Intro />
//       <SectionDivider />
//       <About />
//       <Skills />
//       <Projects />
//       <Education />
//       <Contact />
//     </main>
//   );

// }

import About from "@/components/about";
import Contact from "@/components/contact";
import Education from "@/components/education";
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
      <Education />
      <Contact />
    </main>
  );
};

export default HomePage;
