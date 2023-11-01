import Image from 'next/image'
import React from 'react'

export default function Infrastructure() {
    return (
        <div className='mt-[20px] lg:mt-[80px]'>
            <div className='mt-[20px] lg:mt-[81px] font-[poppins] font-[600] text-[30px] md:text-[40px] lg:text-[44px] lg:leading-[55px] block xl:flex xl:justify-center text-center'>
                <span className=''>Self serve infrastructure platform for</span>
                &nbsp;
                <span className='text-[#0C5BC6]'>scaling teams</span>
            </div>
            <div className="mt-[20px] lg:mt-[96px] grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto lg:px-16 place-items-center">
                <Card path="/assets/infrastructure/infrastructure.png" alt="infrastructure" title="Infrastructure" description="Automated Cloud Infrastructure Workflow" />
                <Card path="/assets/infrastructure/cyber-security.png" alt="cyber-security" title="Security" description="Modern Secure Infrastructure Approach" />
                <Card path="/assets/infrastructure/neural-network.png" alt="neural-network" title="Networking" description="Flexible Secure Application Connectivity" />
                <Card path="/assets/infrastructure/development.png" alt="development" title="Applications" description="Automate Application Deployment for Agility" />
            </div>
        </div>
    )
}
interface CardInterface {
    path: string
    alt: string
    title: string
    description: string
}

function Card({ path, alt, title, description }: CardInterface) {
    return (
        <div className='w-[300px] h-[68px] lg:w-[485px] lg:h-[105px] lg:p-5 flex flex-row items-center'>
            <div className='p-[6px] lg:p-[16px] w-[50px] h-[50px] lg:w-[72px] lg:h-[72px] border border-gray-300 rounded-[10px] shadow-xl flex justify-center'>
                <Image src={path} alt={alt} height={40} width={40} />
            </div>
            <div className='ml-2 flex flex-col'>
                <div className='font-[poppins] font-[600] text-[20px] lg:text-[24px] leading-6 lg:leading-[38.4px] text-[#332C5C]'>
                    {title}
                </div>
                <div className='font-[nunito] font-[400] text-[11px] lg:text-[16px] leading-3 lg:leading-[28.8px] text-[#5E587A]'>
                    {description}
                </div>
            </div>
        </div>
    )
}
