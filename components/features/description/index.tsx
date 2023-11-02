import Image from 'next/image'
import React from 'react'

export default function Description() {
    return (
        <div className='bg-[#0C5BC6] w-full rounded-[25px] lg:rounded-[35px] mt-[50px] lg:mt-[153px]'>
            <div className='font-[poppins] font-[600] text-[30px] xl:leading-[61.6px] pt-[40px] lg:pt-[90px] xl:pt-[110px] md:px-[100px] xl:px-[143px] text-center text-white'>
                Modernize apps, infrastructure with cloud native tech for resilience, scalability.
            </div>
            <div className='py-[40px] md:px-[100px] 2xl:px-[142px] flex flex-col justify-center items-center lg:flex-row lg:gap-[30px]'>
                <Image src="/assets/description/image1.png" alt="description 1" height={367} width={692} className='lg:w-[350px] xl:w-[450px]' />
                <div className='lg:w-auto lg:h-auto 2xl:w-[375px] 2xl:h-[356px] flex flex-col'>
                    <div className='font-[poppins] font-[600] text-[25px] lg:text-[30px] 2xl:text-[44px] 2xl:leading-[61.6px] text-white px-4'>
                        Real-Time Risk Monitoring
                    </div>
                    <div className='font-nunito-sans font-[400] text-[16px] lg:text-[18px] 2xl:text-[20px] 2xl:leading-[36px] text-white px-4 pt-2'>
                        Real-time risk monitoring across your infrastructure and application ecosystem will help you maintain ongoing compliance with more than 05+ different regulatory standards.
                    </div>
                </div>
            </div>
            <div className='py-[40px] md:px-[100px] 2xl:px-[142px] flex flex-col justify-center items-center lg:flex-row-reverse lg:gap-[30px]'>
                <Image src="/assets/description/image2.png" alt="description 2" height={518} width={565} className='px-8 lg:w-[350px] xl:w-[450px]' />
                <div className='pt-6 lg:w-[375px] lg:h-[356px] flex flex-col lg:justify-end'>
                    <div className='font-[poppins] font-[600] text-[25px] lg:text-[30px] 2xl:text-[44px] 2xl:leading-[61.6px] text-white px-4'>
                        Collaborative Workflows
                    </div>
                    <div className='font-nunito-sans font-[400] text-[16px] lg-text-[18px] 2xl:text-[20px] 2xl:leading-[36px] text-white px-4 pt-2'>
                        Share artefacts easily and collaborate with team members, auditors, and pen testers via automated procedures. To manage daily compliance with automatic notifications and reminders, create, assign, and track tasks.
                    </div>
                </div>
            </div>
        </div>
    )
}


