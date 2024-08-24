
import React from 'react'

import { MotionDiv } from './animate/MotionDiv'
import { gridSquareVariants } from './animate/animations'
import { Project } from '@/lib/projects/types'
import Image from 'next/image'
import Link from 'next/link'

type projectProp = {
    project: Project
}
export const ProjectCard: React.FC<projectProp> = ({ project }) => {
    return (
        <MotionDiv
            className="space-y-2 shadow-md rounded-md bg-white group overflow-hidden"
            variants={gridSquareVariants}
        >
            <Link href="" className="cursor-pointer group-hover:overflow-hidden">
                <Image src={project.imgags} alt='' width={400} height={300} className='w-full group-hover:scale-105  group-hover:ease-in-out group-hover:duration-200  rounded-tl-md rounded-tr-md' />
            </Link>
            <div className="p-3 space-y-2">
                <h4 className='font-medium text-xl min-h-14'>{project.name}:{project.tag}</h4>
                <p className='text-sm text-zinc-600'>{project.description}</p>
            </div>
        </MotionDiv>
    )
}
