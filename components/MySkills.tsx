import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tags } from './Tags'
import { frontend, backend, frontendTools, backendTools } from "@/lib/projects/technology"
import { BackendSkills } from './BackendSkills'
import { FrontendSkills } from './Frontend-Skills'
export const MySkills = () => {
    return (
        <>
            <div className="max-w-xl mx-auto text-center">
                <div className="text-center flex flex-col justify-center mb-10 w-full max-w-lg">
                    <h6 className='text-lg font-medium sub-title ancent'>My Skills</h6>
                    <h2 className='text-4xl font-extrabold '>I Can Transform Your Idea&apos;s into Reality with my Skills </h2>
                </div>
            </div>
            <Tabs defaultValue="frontend">
                <TabsList className='max-w-4xl mx-auto text-center flex  justify-center  bg-transparent mb-8 '>
                    <TabsTrigger className=' text-black font-semibold text-base' value="frontend">Frontend Development</TabsTrigger>
                    <TabsTrigger className=' text-black font-semibold text-base' value="backend">Backend Development</TabsTrigger>
                </TabsList>
                <TabsContent value="frontend">
                    <div className="flex flex-col md:flex-row items-center container   ">
                        <div className="w-full md:w-1/2 ">
                            <FrontendSkills />
                        </div>
                        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                            <h1 className="text-4xl font-bold text-gray-900">I Can Unlock Your Website Potential with my Skills</h1>
                            <p className="text-gray-600">Adable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.</p>
                            <Tags tags={frontendTools} key="frontend" />
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="backend">
                    <div className="flex flex-col md:flex-row items-center container ">
                        <div className="w-full md:w-1/2 ">
                            <BackendSkills />
                        </div>
                        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                            <h1 className="text-4xl font-bold text-gray-900">I Can Transform Your Idea&apos;s into Reality with my Skills</h1>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolores odio ullam voluptate, fugit placeat.</p>
                            <Tags tags={backendTools} key="backend" />
                        </div>
                    </div>
                </TabsContent>
            </Tabs>

        </>
    )
}
