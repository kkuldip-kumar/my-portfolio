import { ProjectsSection } from "@/components/ProjectsSection";

const Projects = () => {
    return (
        <div className=" bg-blue-50">

            <div className="_banner_container">
                <div className="banner_title">
                    <h1>Projects</h1>
                </div>
            </div>
            <div className="max-w-xl mx-auto text-center">
                <div className="text-center flex flex-col justify-center mt-32 w-full max-w-lg">
                    <h6 className='text-lg font-medium sub-title ancent'>My Projects</h6>
                    <h2 className='text-4xl font-extrabold '>Showcasing My Work: Personalized Solutions for Real-World Problems  </h2>
                </div>
            </div>
            <section className="flex justify-center items-center min-h-screen  ">
                <ProjectsSection />
            </section>
        </div>
    );
}

export default Projects;