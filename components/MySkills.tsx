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
                    <h2 className='text-base md:text-4xl font-extrabold '>I Can Transform Your Idea&apos;s into Reality with my Skills </h2>
                </div>
            </div>
            <Tabs defaultValue="frontend">
                <TabsList className='max-w-4xl mx-auto text-center flex  justify-center  bg-transparent mb-8 '>
                    <TabsTrigger className=' text-black font-semibold md:text-base' value="frontend">Frontend Development</TabsTrigger>
                    <TabsTrigger className=' text-black font-semibold md:text-base' value="backend">Backend Development</TabsTrigger>
                </TabsList>
                <TabsContent value="frontend">
                    <div className="flex flex-col md:flex-row items-center container  mt-10 ">
                        <div className="w-full md:w-1/2 my-20 ">
                            <FrontendSkills />
                        </div>
                        <div className="w-full md:w-1/2  text-center md:text-left space-y-4">
                            <h1 className="text-base md:text-4xl font-bold text-gray-900">Transform Your Website into a Digital Masterpiece</h1>
                            <p className="text-gray-600">Create visually stunning and highly interactive web pages that engage your audience. Elevate the user experience with smooth, responsive design, ensuring your site looks and functions flawlessly across all devices</p>
                            <Tags tags={frontendTools} key="frontend" />
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="backend">
                    <div className="flex flex-col md:flex-row items-center container ">
                        <div className="w-full md:w-1/2 my-20 ">
                            <BackendSkills />
                        </div>
                        <div className="w-full md:w-1/2  text-center md:text-left space-y-4">
                            <h1 className="text-base md:text-4xl  font-bold text-gray-900">Power Your Web Applications with Robust Backend Solutions</h1>
                            <p className="text-gray-600">Leverage the power of Node.js and other cutting-edge technologies to build scalable, efficient, and secure backend systems. Ensure seamless data handling, user authentication, and server-side logic to keep your applications running smoothly and reliably.</p>
                            <Tags tags={backendTools} key="backend" />
                        </div>
                    </div>
                </TabsContent>
            </Tabs>

        </>
    )
}
