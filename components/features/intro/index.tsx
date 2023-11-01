import Image from 'next/image'
import React from 'react'

export default function FeatureIntro() {
    return (
        <div className='mt-[25px] lg:mt-[75px]'>
            <div className='text-[#242331] font-[Poppins] text-[30px] md:text-[40px] lg:text-[44px] lg:leading-[55px] font-[600] block lg:flex lg:justify-center text-center'>
                <span className='text-[#0C5BC6]'>Save 1000s</span>
                &nbsp;
                <span className=''>of expensive coder hours</span>
            </div>
            <div className='text-[#494369] font-nunito-sans text-[20px] leading-[36px] font-[400] flex justify-center text-center mt-[20px]'>
                With cloud native technologies, we assist in modernising infrastructure and applications for resilience and scalability.
            </div>
            <div className='mt-[25px] lg:mt-[50px] flex justify-center text-center'>
                <Image src="/assets/features/intronav.png" alt="introNav" width={1000} height={37} />
            </div>
            <div className='mt-[25px] lg:mt-[56px]'>
                <Image src="/assets/features/dashboard.png" alt="introNav" width={1298} height={667} />
            </div>
        </div>
    )
}
