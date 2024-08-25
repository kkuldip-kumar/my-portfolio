import { Linkedin, Mail, MapPin, Github, Phone, Instagram } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const ContactUs = () => {
    return (
        <div className="md:flex md:justify-center  container contact_me ">

            <div className="ml-8 mb-4">
                <div className="">
                    <h3 className="text-xl font-bold text-gray-800 mt-4">Contact Information</h3>
                    <p className="text-gray-600 mt-2">
                        Reach out for inquiries, collaborations, or support. We&apos;re here to assist you and ensure your needs are met efficiently                    </p>
                </div>
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="text-center md:text-left">

                        <h3 className="text-lg font-semibold text-gray-800 mt-4">Location</h3>
                        {/* <p className="text-gray-600 mt-2">
                            Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius.
                        </p> */}
                        <div className="flex items-center gap-2">
                            <Link href="#" className=" w-10 h-10 cursor-pointer bg-custom-gradient rounded-lg relative inline-block text-center">
                                <MapPin className='text-white absolute p-1 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' size={32} />
                            </Link>
                            <p className="text-gray-600 "> Lucknow, Uttar Pradesh, India </p>
                        </div>
                    </div>


                    <div className="text-center md:text-left">

                        <h3 className="text-lg font-semibold text-gray-800 mt-4">Email</h3>
                        {/* <p className="text-gray-600 mt-2">
                            Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius.
                        </p> */}
                        <div className="flex items-center gap-2">
                            <Link href="mailto:kkuldip836@gmail.com" className=" w-10 h-10 cursor-pointer bg-custom-gradient rounded-lg relative inline-block text-center">
                                <Mail className='text-white absolute p-1 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' size={32} />
                            </Link>
                            <p className="text-gray-600 mt-2"> kkuldip836@gmail.com</p>
                        </div>
                    </div>


                    <div className="text-center md:text-left">

                        <h3 className="text-lg font-semibold text-gray-800 mt-4">Follow Us</h3>
                        {/* <p className="text-gray-600 mt-2">
                            Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius.
                        </p> */}
                        <div className="flex items-center gap-4">
                            <Link href="https://www.linkedin.com/in/kuldip-kumar-27b4a5a3/" target="_blank" className=" w-10 h-10 cursor-pointer bg-custom-gradient rounded-lg relative inline-block text-center">
                                <Linkedin className='text-white absolute p-1 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' size={32} />
                            </Link>
                            <Link href="https://github.com/kkuldip-kumar" target="_blank" className=" w-10 h-10 cursor-pointer bg-custom-gradient rounded-lg relative inline-block text-center">
                                <Github className='text-white absolute p-1 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' size={32} />
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
            <div className=" p-8 rounded-lg shadow-md max-w-xl bg-white border w-full">
                <h2 className="text-2xl font-semibold text-center mb-6">Get In Touch !</h2>
                {/* <p className="text-center mb-8 text-gray-600">
                    Obviously I&apos;m a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.
                </p> */}
                <div className="flex flex-wrap -mx-3">
                    <div className="w-full md:w-1/2 px-3 mb-5">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >Name :</label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name" type="text" placeholder="Enter your name" />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-5">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >Email :</label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="w-full px-3 mb-5">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >Subject :</label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="subject" type="text" placeholder="Enter your subject" />
                    </div>
                    <div className="w-full px-3 mb-5">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >Message :</label>
                        <textarea
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20 resize-none"
                            id="message" placeholder="Type your message"></textarea>
                    </div>
                    <div className="w-full px-3">
                        <button
                            className="w-full bg-custom-gradient text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button">
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
