import Image from 'next/image'
import React from 'react'
import image1 from "@/public/images/14.png"
export const Experience = () => {
    return (
        <div className=" flex items-center justify-center  ">
            <div className="flex flex-col md:flex-row items-center container   py-6 md:py-12 space-y-6 md:space-y-0 md:space-x-8">
                <div className="w-full md:w-1/2 text-center md:text-left space-y-4">

                    <h6 className="sub-title font-semibold text-xl">My Experience</h6>

                    <h1 className="text-base md:text-4xl font-bold text-gray-900">A Journey of Continuous Learning and Innovation</h1>

                    <p className="text-gray-600">Over the years, I&apos;ve honed my skills in software development, working on diverse projects that span web applications, backend systems, and cloud solutions. My experience includes leading teams, optimizing performance, and delivering robust, scalable software. Each challenge has sharpened my ability to turn ideas into impactful, high-quality digital products.</p>
                    <div className="space-y-4">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <div className="w-3 h-3 rounded-full "></div>
                            </div>
                            <div>
                                <h3 className=" text-base md:text-xl font-semibold">Software Developer</h3>
                                <p className="">E-tech Services Pvt. Ltd.</p>
                                <p className=" bg-custom-gradient text-white px-2 py-1 inline-block rounded mt-2">May,2024 - Present</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <div className="w-3 h-3 rounded-full"></div>
                            </div>
                            <div>
                                <h3 className=" text-base md:text-xl font-semibold">MERN Stack Developer</h3>
                                <p className="">Zonvoir Technology Pvt Ltd</p>
                                <p className=" bg-custom-gradient text-white px-2 py-1 inline-block rounded mt-2">Dec, 2020 - May, 2024</p>
                            </div>
                        </div>
                        <div className="flex items-start md:space-x-4">
                            <div className="flex-shrink-0">
                                <div className="w-3 h-3 rounded-full "></div>
                            </div>
                            <div>
                                <h3 className=" text-base md:text-xl font-semibold">Frontend Developer</h3>
                                <p className="">Codable Technology Pvt. Ltd.</p>
                                <p className=" bg-custom-gradient text-white px-2 py-1 inline-block rounded mt-2">Dec, 2019 - Dec, 2020</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="w-full md:w-1/2 ">
                    <div className="relative  p-2">
                        <Image src={image1} alt="Profile Image" className=" object-cover" />
                    </div>
                </div>
            </div>
        </div>
    )
}
