import { tag } from '@/lib/projects/types'
import React from 'react'
type tagProp = {
    tags: tag[]
}
export const Tags = ({ tags }: tagProp) => {
    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-wrap space-x-3 space-y-3 items-end justify-start transform ">
                {tags.map((item) => (

                    <div key={item.id} className="bg-blue-500 text-white px-4 py-2 rounded-full">{item.name}</div>
                ))}
                <div className="bg-pink-500 text-white px-4 py-2 rounded-full transform ">Testing</div>
                <div className="bg-pink-500 text-white px-4 py-2 rounded-full">Docker</div>
                <div className="bg-teal-500 text-white px-4 py-2 rounded-full">Maintenance</div>
                <div className="bg-yellow-400 text-black px-4 py-2 rounded-full">Git</div>
                <div className="bg-yellow-400 text-black px-4 py-2 rounded-full flex items-center justify-center">
                    Customize solutions
                </div>
                <div className="bg-blue-500 text-white px-4 py-2 rounded-full">Deployment</div>
            </div>
        </div>
    )
}
