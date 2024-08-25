import React from 'react'
import { Database, MonitorCog, PencilRuler, Rocket } from 'lucide-react';
import Image from 'next/image';
export const Services = () => {
    return (

        <>
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row md:space-x-10">
                    <div className="flex-1 text-center md:text-left mb-10 md:mb-0">
                        <h4 className=" font-semibold text-xl sub-title">My Services</h4>
                        <h1 className=" text-base md:text-4xl font-bold text-gray-800 max-w-md mt-2 mb-4">Tailored Software Solutions for Your Needs</h1>
                        <div className="p-2 md:p-5 bg-blue-50 border border-black rounded-md max-w-md z-10 relative">

                            <p className="text-gray-600 mt-4 md:text-lg">
                                I offer a range of services designed to bring your ideas to life. From full-stack web development and API integration to performance optimization and custom software solutions, my expertise ensures that your project is not only functional but also future-proof. Let&apos;s collaborate to build robust, scalable applications that exceed your expectations.
                            </p>
                        </div>
                    </div>


                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">

                        <div className="text-center md:text-left">
                            <div className="flex justify-center md:justify-start">
                                <div className="rounded-full bg-custom-gradient p-6">
                                    <PencilRuler size={28} className='text-white' />
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mt-4">UI Design</h3>
                            <p className="text-gray-600 mt-2">
                                Creating  visually appealing user interfaces that enhance user experience and engagement. I focus on responsive design, ensuring your application looks great on all devices.</p>
                        </div>
                        <div className="text-center md:text-left">
                            <div className="flex justify-center md:justify-start">
                                <div className="rounded-full bg-custom-gradient p-6">
                                    <MonitorCog size={28} className='text-white' />
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mt-4">API Integration</h3>
                            <p className="text-gray-600 mt-2">
                                Seamlessly connecting your application with external services through robust API integration, enabling smooth data exchange and enhancing functionality across various platforms.  </p>
                        </div>


                        <div className="text-center md:text-left">
                            <div className="flex justify-center md:justify-start">
                                <div className="rounded-full bg-custom-gradient p-6">
                                    <Database size={28} className='text-white' />
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mt-4">Backend Development</h3>
                            <p className="text-gray-600 mt-2">
                                Building secure, scalable, and efficient backend systems. I specialize in server-side logic, database management, and performance optimization. </p>
                        </div>


                        <div className="text-center md:text-left">
                            <div className="flex justify-center md:justify-start">
                                <div className="rounded-full bg-custom-gradient p-6">
                                    <Rocket size={28} className='text-white' />
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mt-4">Application Deployment</h3>
                            <p className="text-gray-600 mt-2">
                                Ensuring your application is deployed smoothly and reliably, with a focus on scalability, security, and continuous delivery.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="feature-style-one-area default-padding">
                <div className="shape">
                    {/* <Image decoding="async" width={300} height={250} src="https://wordpress.validthemes.net/metize/wp-content/uploads/2024/04/1.png" alt="Image Not Found" /> */}
                    <Image decoding="async" width={500} height={250} src="/images/element.png" alt="Image Not Found" />
                </div>
            </div>
        </>

    )
}
