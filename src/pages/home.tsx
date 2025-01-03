import { About } from "./about";
import { Projects } from "./projects";
import { SideBar } from "../components/sidebar";
import { Start } from "./start";
import { Contact } from "./contact";

function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center overflow-hidden scroll-smooth">
      <div className="flex h-full w-full flex-col">
        <SideBar />
        <section id="start">
          <Start />
        </section>
        <section id="about" className="h-[calc(100% - 1rem)] w-full">
          <About />
        </section>
        <section id="projects" className="w-full">
          <Projects />
        </section>
        <section id="contact" className="h-screen w-full">
          <Contact />
        </section>
      </div>
    </div>
  );
}
export default Home;
