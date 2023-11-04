import React from 'react'
import Underline from '../underline'
import { StepsInterface } from '@/utils/xerocodeeWay'
import Steps from '../steps'

interface PointComponentInterface {
    PointNo: number,
    heading: string,
    subheading: string,
    stepsList: StepsInterface[]

}
export default function Point({ PointNo, heading, subheading, stepsList }: PointComponentInterface) {
    return (
        <div
            data-testid="point"
            className='pt-[20px] lg:pt-[82px]'>
            <div className='flex flex-col items-center mb-[25px] lg:mb-[50px]'>
                <div className='font-[poppins] font-[600] text-[24px] md:text-[30] lg:text-[36px] lg:leading-[45px] text-center'>{PointNo < 10 ? "0" + PointNo : PointNo}</div>
                <Underline />
            </div>
            <div className='flex flex-col items-center'>
                <div className='font-[poppins] font-[600] text-[18px]  md:text-[20px] lg:text-[24px] lg:leading-[38.4px] text-center text-[#332C5C]'>
                    {heading}
                </div>
                <div className='font-[nunito] font-[400] text-[12px] md:text-[14px] lg:text-[16px] lg:leading-[28.8px] text-center text-[#5E587A] '>
                    {subheading}
                </div>
            </div>

            <div className='p-10 lg:p-0 lg:mt-[71px]'>
                {stepsList.map((step, index) => (
                    <Steps
                        key={index}
                        path={step.path}
                        alt={step.alt}
                        heading={step.heading}
                        subheading={step.subheading}
                        height={step.height}
                        width={step.width}
                        reverse={index % 2 == 0 ? false : true} />
                ))}
            </div>

        </div>
    )
}