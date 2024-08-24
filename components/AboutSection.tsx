import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const AboutSection = () => {
    return (
        <div>
            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList>
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                </TabsList>
                <TabsContent value="experience">
                    <div className="space-y-4">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <div className="w-3 h-3 rounded-full "></div>
                            </div>
                            <div>
                                <h3 className=" text-xl font-semibold">AS - Science & Information</h3>
                                <p className="">SUPERKING COLLEGE</p>
                                <p className=" bg-custom-gradient text-white px-2 py-1 inline-block rounded mt-2">2001 - 2005</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <div className="w-3 h-3 rounded-full "></div>
                            </div>
                            <div>
                                <h3 className=" text-xl font-semibold">Web Developer & Trainer</h3>
                                <p className="">APPLE DEVELOPER TEAM</p>
                                <p className=" bg-custom-gradient text-white px-2 py-1 inline-block rounded mt-2">2012 - 2016</p>
                            </div>
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="education">
                    <div className="space-y-8">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <div className="w-3 h-3 rounded-full "></div>
                            </div>
                            <div>
                                <h3 className=" text-xl font-semibold">AS - Science & Information</h3>
                                <p className="">SUPERKING COLLEGE</p>
                                <p className=" bg-custom-gradient text-white px-2 py-1 inline-block rounded mt-2">2001 - 2005</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <div className="w-3 h-3 rounded-full "></div>
                            </div>
                            <div>
                                <h3 className=" text-xl font-semibold">Web Developer & Trainer</h3>
                                <p className="">APPLE DEVELOPER TEAM</p>
                                <p className=" bg-custom-gradient text-white px-2 py-1 inline-block rounded mt-2">2012 - 2016</p>
                            </div>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>

        </div>
    )
}
