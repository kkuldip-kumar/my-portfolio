import Image from 'next/image'
import React from 'react'
type skill = {
  id: number,
  center: boolean,
  name: string,
  url: string
}
type skillProp = {
  skillArr: skill[]
}
export const FrontendSkills = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative">

        <div className="flex justify-center items-center w-40 h-40 bg-white rounded-full shadow-lg transition-transform transform hover:scale-110">
          <Image width={64} height={64} src="/images/react.svg" alt="WordPress" className="h-16" />
        </div>
        {/* first circle */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 -translate-y-12">
          <div className="w-16 h-16 bg-white rounded-full shadow-lg transition-transform transform hover:scale-110 flex justify-center items-center">
            <Image width={32} height={32} src="/images/webpack.svg" alt="Webpack" className="h-8" />
          </div>
        </div>
        <div className="absolute -top-[9px]  transform -translate-x-12 -translate-y-1/2">
          <div className="w-16 h-16 bg-white rounded-full shadow-lg transition-transform transform hover:scale-110 flex justify-center items-center">
            <Image width={32} height={32} src="/images/rdx.png" alt="Redux" className="h-8" />
          </div>
        </div>
        <div className="absolute -top-[6px] -right-2 transform translate-x-12 -translate-y-1/2">
          <div className="w-16 h-16 bg-white rounded-full shadow-lg transition-transform transform hover:scale-110 flex justify-center items-center">
            <Image width={32} height={32} src="/images/next-js-icon-logo.png" alt="NextJs" className="h-8" />
          </div>
        </div>
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 translate-y-12">
          <div className="w-16 h-16 bg-white rounded-full shadow-lg transition-transform transform hover:scale-110 flex justify-center items-center">
            <Image width={32} height={32} src="/images/vue.svg" alt="vue" className="h-8" />
          </div>
        </div>
        <div className="absolute -bottom-[10px] -left-2 transform -translate-x-12 translate-y-1/2">
          <div className="w-16 h-16 bg-white rounded-full shadow-lg transition-transform transform hover:scale-110 flex justify-center items-center">
            <Image width={32} height={32} src="/images/tailwind.png" alt="tailwind" className="h-8" />
          </div>
        </div>
        <div className="absolute -bottom-[10px] -right-2 transform translate-x-12 translate-y-1/2">
          <div className="w-16 h-16 bg-white rounded-full shadow-lg transition-transform transform hover:scale-110 flex justify-center items-center">
            <Image width={32} height={32} src="/images/typescript.png" alt="Typescript" className="h-8" />
          </div>
        </div>
        <div className="absolute top-1/2 -left-6 transform -translate-x-12 -translate-y-1/2">
          <div className="w-16 h-16 bg-white rounded-full shadow-lg transition-transform transform hover:scale-110 flex justify-center items-center">
            <Image width={32} height={32} src="/images/bootstrap.svg" alt="Bootstrap" className="h-8" />
          </div>
        </div>
        <div className="absolute top-1/2 -right-6 transform translate-x-12 -translate-y-1/2">
          <div className="w-16 h-16 bg-white rounded-full shadow-lg transition-transform transform hover:scale-110 flex justify-center items-center">
            <Image width={32} height={32} src="/images/Angular.svg" alt="Angular" className="h-8" />
          </div>
        </div>
      </div>
    </div>
  )
}
