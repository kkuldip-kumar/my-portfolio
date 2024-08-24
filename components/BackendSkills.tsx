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
export const BackendSkills = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative">

        <div className="flex justify-center items-center w-40 h-40 bg-white rounded-full shadow-lg transition-transform transform hover:scale-110">
          <Image width={64} height={64} src="/images/nodejs-icon.svg" alt="NodeJs" className="h-16" />
        </div>
        {/* first circle */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 -translate-y-12">
          <div className="w-16 h-16 bg-white rounded-full shadow-lg transition-transform transform hover:scale-110 flex justify-center items-center">
            <Image width={32} height={32} src="/images/mongodb.svg" alt="MongoDB" className="h-8" />
          </div>
        </div>
        <div className="absolute -top-[9px]  transform -translate-x-12 -translate-y-1/2">
          <div className="w-16 h-16 bg-white rounded-full shadow-lg transition-transform transform hover:scale-110 flex justify-center items-center">
            <Image width={32} height={32} src="/images/mysql-logo.svg" alt="MySql" className="h-8" />
          </div>
        </div>
        <div className="absolute -top-[6px] -right-2 transform translate-x-12 -translate-y-1/2">
          <div className="w-16 h-16 bg-white rounded-full shadow-lg transition-transform transform hover:scale-110 flex justify-center items-center">
            <Image width={32} height={32} src="/images/NestJS.png" alt="NestJs" className="h-8" />
          </div>
        </div>
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 translate-y-12">
          <div className="w-16 h-16 bg-white rounded-full shadow-lg transition-transform transform hover:scale-110 flex justify-center items-center">
            <Image width={32} height={32} src="/images/express.png" alt="Express" className="h-8" />
          </div>
        </div>
        <div className="absolute -bottom-[10px] -left-2 transform -translate-x-12 translate-y-1/2">
          <div className="w-16 h-16 bg-white rounded-full shadow-lg transition-transform transform hover:scale-110 flex justify-center items-center">
            <Image width={32} height={32} src="/images/socket.io.svg" alt="Socket.io" className="h-8" />
          </div>
        </div>
        <div className="absolute -bottom-[10px] -right-2 transform translate-x-12 translate-y-1/2">
          <div className="w-16 h-16 bg-white rounded-full shadow-lg transition-transform transform hover:scale-110 flex justify-center items-center">
            <Image width={32} height={32} src="/images/aws.svg" alt="AWS" className="h-8" />
          </div>
        </div>
        <div className="absolute top-1/2 -left-6 transform -translate-x-12 -translate-y-1/2">
          <div className="w-16 h-16 bg-white rounded-full shadow-lg transition-transform transform hover:scale-110 flex justify-center items-center">
            <Image width={32} height={32} src="/images/docker.svg" alt="Docker" className="h-8" />
          </div>
        </div>
        <div className="absolute top-1/2 -right-6 transform translate-x-12 -translate-y-1/2">
          <div className="w-16 h-16 bg-white rounded-full shadow-lg transition-transform transform hover:scale-110 flex justify-center items-center">
            <Image width={32} height={32} src="/images/handlebars_logo.png" alt="handlebars_logo" className="h-8" />
          </div>
        </div>
      </div>
    </div>
  )
}
