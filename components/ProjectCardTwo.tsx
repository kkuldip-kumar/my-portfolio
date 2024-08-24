
import React from 'react'

import { MotionDiv } from './animate/MotionDiv'
import { gridSquareVariants } from './animate/animations'
import { Project } from '@/lib/projects/types'
import Image from 'next/image'
import Link from 'next/link'

type projectProp = {
    project: Project
}
export const ProjectCardTwo: React.FC<projectProp> = ({ project }) => {
    return (
        <MotionDiv
            className="space-y-2 shadow-md rounded-md bg-white group overflow-hidden"
            variants={gridSquareVariants}
        >
            <Link href="" className="">
                <Image src={project.imgags} alt='' width={400} height={300} className='w-full group-hover:scale-105  group-hover:ease-in-out group-hover:duration-200  rounded-tl-md rounded-tr-md' />
            </Link>
            <div className="p-3 space-y-2">
                <h4 className='font-medium text-xl'>{project.name}:{project.tag}</h4>
                <p className='text-sm text-zinc-600'>{project.description}</p>
                <div className=''>
                    <Link href={project.url ? project.url : '#'} target='_black' className="inline-block text-center  font-semibold text-lg flex-1 flex-grow text-[#5a57fb]  transition">
                        Learn More
                    </Link>
                    {/* <Link href="#" className="inline-block  text-center bg-blue-600 flex-1 flex-grow text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition">
                        visit now
                    </Link> */}
                </div>
            </div>
        </MotionDiv>
    )
}
