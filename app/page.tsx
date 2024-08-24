import { AboutMe } from "@/components/AboutMe";
import { ContactUs } from "@/components/Contact-us";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { IntroSection } from "@/components/IntroSection";
import { MySkills } from "@/components/MySkills";
import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ProjectsSlide } from "@/components/ProjectsSlide";
import { Services } from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <main className="">
        {/* <Navbar /> */}
        <IntroSection />
        {/* <AboutSection /> */}
        <section className="flex items-center justify-center bg-white about_me">
          <AboutMe />
        </section>
        <div className="team-area relative">
          <div className="fixed-shape element-1"></div>
          <section className="space-y-6 md:space-y-0 md:space-x-8 bg-blue-50">
            <Experience />
          </section>
        </div>
        <section className="mb-10  py-6 md:py-12">
          <Services />
        </section>
        <section className=" py-6 md:py-12 pb-20 space-y-6 md:space-y-0 md:space-x-8 bg-blue-50 ">
          <MySkills />
        </section>
        <div className="overview-area bg-blue-50">
          <div className="max-w-xl mx-auto text-center">
            <div className="text-center flex flex-col justify-center w-full max-w-lg">
              <h6 className='text-lg font-medium sub-title ancent'>Recent Project</h6>
              <h2 className='text-4xl font-extrabold '>Custom Solutions for Unique Challenges </h2>
            </div>
          </div>
          <section className="flex justify-center items-center py-6 pb-20    ">
            <ProjectsSlide />
          </section>
        </div>
      </main>
    </div>
  );
}
