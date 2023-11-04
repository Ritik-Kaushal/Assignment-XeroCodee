import Image from 'next/image'
import React from 'react'
import { footerContentList } from '../../utils/footer'
import SocialCircle from '@/icons/socialCircle'
import FooterSection from './footerSection'

export default function Footer() {
    return (
        <div className='w-screen h-auto bg-[#92a4bd1a] flex flex-col p-4 xl:px-[100px]'>
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-[75px]">
                    <div className="p-4">
                        <div className='p-4 flex flex-col justify-end'>
                            <div className='font-nunito-sans font-[400] text-[16px] text-[#494369]'>
                                You get just what you need to run your cloud workloads--no more, no less. Deploy from our single pane of glass, manage them with ease and scale up as fast as your workload grows
                            </div>
                            <div className='flex flex-row gap-5 mt-[50px]'>
                                <div className="w-[41px] h-[41px] rounded-full bg-[#C6DEFF]" ></ div>
                                <div className="w-[41px] h-[41px] rounded-full bg-[#C6DEFF] opacity-[20%]" ></ div>
                                <div className="w-[41px] h-[41px] rounded-full bg-[#C6DEFF] opacity-[20%]" ></ div>
                                <div className='flex items-center'>
                                    <Image src="/assets/footer/mail.png" alt="mail icon" width={22} height={22} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {footerContentList.map((content, index) => (
                        <div className="p-4" key={index}>
                            <FooterSection heading={content.heading} contentList={content.contentList} />
                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-[80px] flex flex-col md:flex-row justify-between'>
                <div className='font-nunito-sans font-[400] text-[14px] lg:text-[18px] text-[#5E587A]'>
                    <a href="#">Terms & Condition </a>
                    |
                    <a href="#"> Privacy Policy</a>
                </div>
                <div className='font-nunito-sans font-[400] text-[14px] lg:text-[18px] text-[#5E587A]'>
                    Copyright © 2023 EXOCODE TECHNOLOGIES | All rights reserved
                </div>
            </div>
        </div>
    )
}