import Image from 'next/image'
import React from 'react'

export default function Intro() {
    return (
        <div>
            <div className='flex flex-col items-center'>
                <div className='text-6xl font-bold mt-12 w-3/4 text-center'>
                    Build your audience and grow your brand
                </div>
                <div className='text-gray-500 font-nunito-sans mt-8 w-1/2 text-center'>
                    no more, no less. Deploy from our single pane of glass, manage them with ease and scale up as fast as your workload grows.
                </div>
                <div className='mt-8 mb-1'>
                    <button className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Get Started Now
                    </button>
                </div>

            </div>
            <div className='flex justify-center'>
                <Image src="/assets/intro.png" alt="Intro" width="1462" height="591" />
            </div>
        </div>
    )
}
