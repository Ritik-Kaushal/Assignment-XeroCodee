import Image from 'next/image'
import React from 'react'

export default function Comaprison() {
    return (
        <div className='mt-[50px] lg:mt-[120px] flex gap-[20px] lg:gap-[238px]'>
            <div className='p-2 w-1/2 flex flex-col'>
                <div className='font-[nunito] font-[700] text-[20px] md:text-[28px] leading-[30.8px] text-center'>
                    Without Xerocodee
                </div>
                <div className='mt-[20px] lg:mt-[50px]'>
                    <Image src="/assets/features/withoutXeroCodee.png" alt="Without Xerocodee" height={388} width={372} />
                </div>
            </div>
            <div className='p-2 w-1/2 flex flex-col'>
                <div className='font-[nunito] font-[700] text-[20px] md:text-[28px] leading-[30.8px] text-center'>
                    With Xerocodee
                </div>
                <div className='mt-[20px] lg:mt-[50px]'>
                    <Image src="/assets/features/withXeroCodee.png" alt="With Xerocodee" height={450} width={495} />
                </div>
            </div>
        </div>
    )
}
