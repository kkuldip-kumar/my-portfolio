import React from 'react'
import { AboutSection } from './AboutSection'

export const AboutMe = () => {
    return (
        <div className="flex flex-col md:flex-row items-center container   py-6 md:py-12 space-y-6 md:space-y-0 md:space-x-8">
            <div className="w-full md:w-1/2 text-center md:text-left space-y-4">

                <h6 className="sub-title font-semibold text-xl">About Me</h6>

                <h1 className="text-4xl font-bold text-gray-900">Passionate Software Developer Crafting Digital Solutions</h1>
                <p className="text-gray-600">I am a passionate software developer with a knack for turning complex problems into efficient solutions. With expertise in modern technologies and a focus on clean, scalable code, I thrive on building innovative applications that make a difference. Let&apos;s create something amazing together!</p>
            </div>
            <div className="w-full md:w-1/2 ">
                <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                            <div className="w-3 h-3 rounded-full "></div>
                        </div>
                        <div>
                            <h3 className=" text-xl font-semibold">Engineering - Information Technology</h3>
                            <p className="">Dr. A. P. J. Abdul Kalam Technical University, Lucknow</p>
                            <p className=" bg-custom-gradient text-white px-2 py-1 inline-block rounded mt-2">2012 - 2016</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
