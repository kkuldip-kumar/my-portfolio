
import React from 'react'
import { Typing } from './Typeing'
import Image from 'next/image'
import Link from 'next/link'

export const IntroSection = () => {
    return (
        <section className="relative overflow-hidden md:flex md:h-screen py-36 items-center bg-gray-50 dark:bg-slate-800 intro_section">
            <div className="container relative">
                <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-6">
                    <div className="text-sm md:text-base">
                        <Typing />
                        <h5 className="md:text-5xl md:leading-normal text-3xl leading-normal font-bold mt-3">Innovative Solutions  <br /> by Kuldeep</h5>

                        <p className="text-slate-400 dark:text-white/60 text-[17px] max-w-xl mt-4">Passionate Full-Stack Developer with expertise in creating dynamic web applications and delivering innovative digital solutions. Let&apos;s build together!</p>

                        <div className="flex items-center gap-4 mt-6">
                            <div className="">
                                <Link href="/resume/Resume_Kuldip_Kumar.pdf" target="_blank" download="Kuldip_Kumar_Resume" className="py-2 px-2 whitespace-nowrap md:px-5 inline-flex items-center font-medium tracking-wide border align-middle duration-500 text-[10px] md:text-base text-center bg-custom-gradient hover:[#5138ee] border-[#5138ee] hover:border-[#5138ee] text-white rounded-xl">Download CV <i className="mdi mdi-arrow-right ms-2"></i></Link>
                            </div>
                            <div className="flex items-center gap-4">
                                <Link href="mailto:kkuldip836@gmail.com" target='_blank' className=" w-10 h-10 cursor-pointer bg-white  rounded-full relative inline-block text-center">
                                    <Image src="/icons/gmail.svg" alt='' width={32} height={32} className='text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                                </Link>
                                <Link href="https://www.linkedin.com/in/kuldip-kumar-27b4a5a3/" target='_blank' className=" w-10 h-10 cursor-pointer bg-white  rounded-full relative inline-block text-center">
                                    <Image src="/icons/linkedin.svg" alt='' width={32} height={32} className='text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                                </Link>
                                <Link href="https://github.com/kkuldip-kumar" target='_blank' className=" w-10 h-10 cursor-pointer bg-white  rounded-full relative inline-block text-center">
                                    <Image src="/icons/github.svg" alt='' width={32} height={32} className='text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                                </Link>
                                <Link href="skype:live:kkuldip836_1?chat" target='_blank' className=" w-10 h-10 cursor-pointer bg-white  rounded-full relative inline-block text-center">
                                    <Image src="/icons/skype.svg" alt='' width={32} height={32} className='text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="relative lg:ms-6 ">
                        <div className="relative z-1">
                            <Image src="/images/model-pm.png" alt=""
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }}
                                className='' />

                            <div className="absolute lg:bottom-20 -bottom-5 md:-start-10 -start-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center">
                                <span className="text-3xl font-medium mb-0"><span className="counter-value font-bold" data-target="125">15</span>+</span>
                                <h6 className="text-sm text-slate-400 mt-1">Project Completed</h6>
                            </div>

                            <div className="absolute md:top-20 top-32 md:-end-10 -end-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center">
                                <h6 className="font-semibold">Software Developer</h6>
                                <h6 className="text-sm text-slate-400 mt-1">5+ Years Experience</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
