import React from 'react'

export const Footer = () => {
    return (
        <div className='bg-blue-950'>
            <div className="md:max-w-4xl mx-auto text-center">
                <div className="px-4 py-4 md:py-8 flex items-center  justify-between">
                    <h2 className='text-base md:text-6xl font-bold text-white'>Have a Project Or Job</h2>
                    <div>
                        <a href="#" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition">
                            Lets Talk
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}
