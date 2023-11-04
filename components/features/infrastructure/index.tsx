import React from 'react'
import Card from './cards'

export default function Infrastructure() {
    return (
        <div
            data-testid="infrastructure"
            className='mt-[20px] lg:mt-[80px]'>
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
