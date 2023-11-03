import React from 'react'
import Point from './point'
import { points } from '@/utils/xerocodeeWay'

export default function XeroCodeeWay() {



    return (
        <div className='mt-[20px] md:mt-[40px]'>
            <div className='font-[poppins] font-[600] text-[30px] md:text-[40px] lg:text-[44px] leading-[55px] text-center mt-[25px] md:mt-[50px] lg:mt-[110px]'>
                The Xerocodee way
            </div>

            {points.map((point, index) => (
                <Point key={index} PointNo={index + 1} heading={point.heading} subheading={point.subheading} stepsList={point.steps} />
            ))}



        </div>
    )
}
