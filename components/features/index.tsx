import React from 'react'
import FeatureIntro from './intro'
import Comaprison from './comparison'
import Infrastructure from './infrastructure'

export default function Features() {
    return (
        <div className='flex flex-col items-center'>
            <button className="bg-blue-200 hover:bg-blue-700 text-blue-800 hover:text-white text-sm font-semibold py-[25px] px-[46px] rounded-[39px] mt-[25px] lg:mt-[120px] w-[165px]">
                Features
            </button>
            <FeatureIntro />
            <Comaprison />
            <Infrastructure />
        </div>
    )
}
