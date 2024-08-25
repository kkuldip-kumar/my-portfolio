import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { gridContainerVariants } from './animate/animations'
import { MotionSection } from './animate/MotionDiv'
import { projects } from "@/lib/projects/projects"
import { Project } from '@/lib/projects/types'
import { ProjectCardTwo } from './ProjectCardTwo'


export const ProjectsSection = () => {
    return (
        <div className="container py-6 md:py-12 space-y-6 md:space-y-0 md:space-x-8">
            <Tabs defaultValue="all">
                <TabsList className='md:max-w-4xl mx-auto text-center flex  justify-center  bg-transparent mb-8 '>
                    <TabsTrigger className='md:flex-grow px-2 text-[11px] text-black font-semibold md:text-base' value="all">All</TabsTrigger>
                    <TabsTrigger className='md:flex-grow px-2 text-[11px] text-black font-semibold md:text-base' value="react">React Js</TabsTrigger>
                    <TabsTrigger className='md:flex-grow px-2 text-[11px] text-black font-semibold md:text-base' value="nodejs">Node Js</TabsTrigger>
                    <TabsTrigger className='md:flex-grow px-2 text-[11px] text-black font-semibold md:text-base' value="mongodb">MongoDB</TabsTrigger>
                    <TabsTrigger className='md:flex-grow px-2 text-[11px] text-black font-semibold md:text-base' value="mysql">MySql</TabsTrigger>
                    <TabsTrigger className='md:flex-grow px-2 text-[11px] text-black font-semibold md:text-base' value="nestjs">NestJs</TabsTrigger>
                    <TabsTrigger className='md:flex-grow px-2 text-[11px] text-black font-semibold md:text-base' value="angular">Angular</TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                    <MotionSection
                        variants={gridContainerVariants}
                        initial="hidden"
                        animate="show"
                        className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'
                    >
                        {projects.map((item: Project) => (
                            <ProjectCardTwo project={item} key={item.id} />
                        ))}
                    </MotionSection>
                </TabsContent>
                <TabsContent value="react">
                    <MotionSection
                        variants={gridContainerVariants}
                        initial="hidden"
                        animate="show"
                        className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'
                    >
                        {projects.map((item: Project) => (
                            <ProjectCardTwo project={item} key={item.id} />
                        ))}
                    </MotionSection>
                </TabsContent>
                <TabsContent value="nodejs">
                    <MotionSection
                        variants={gridContainerVariants}
                        initial="hidden"
                        animate="show"
                        className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'
                    >
                        {projects.map((item: Project) => (
                            <ProjectCardTwo project={item} key={item.id} />
                        ))}
                    </MotionSection>
                </TabsContent>
                <TabsContent value="mongodb">
                    <MotionSection
                        variants={gridContainerVariants}
                        initial="hidden"
                        animate="show"
                        className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'
                    >
                        {projects.map((item: Project) => (
                            <ProjectCardTwo project={item} key={item.id} />
                        ))}
                    </MotionSection>
                </TabsContent>
                <TabsContent value="mysql">
                    <MotionSection
                        variants={gridContainerVariants}
                        initial="hidden"
                        animate="show"
                        className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'
                    >
                        {projects.map((item: Project) => (
                            <ProjectCardTwo project={item} key={item.id} />
                        ))}
                    </MotionSection>
                </TabsContent>
                <TabsContent value="nestjs">
                    <MotionSection
                        variants={gridContainerVariants}
                        initial="hidden"
                        animate="show"
                        className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'
                    >
                        {projects.map((item: Project) => (
                            <ProjectCardTwo project={item} key={item.id} />
                        ))}
                    </MotionSection>
                </TabsContent>
                <TabsContent value="angular">
                    <MotionSection
                        variants={gridContainerVariants}
                        initial="hidden"
                        animate="show"
                        className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'
                    >
                        {projects.map((item: Project) => (
                            <ProjectCardTwo project={item} key={item.id} />
                        ))}
                    </MotionSection>
                </TabsContent>
            </Tabs>

        </div>
    )
}
