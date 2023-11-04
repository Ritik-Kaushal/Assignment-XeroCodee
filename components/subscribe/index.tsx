import Image from 'next/image'
import React from 'react'

export default function Subscribe() {
    return (
        <div
            data-testid="subscribe"
            className='w-full h-fit rounded-[60px] bg-[#C6DEFF] pb-6 lg:pb-[80px] my-[50px] lg:my-[70px]'>

            <div className='hidden text-center lg:flex justify-center p-[60px]'>
                <Image src="/assets/subscribe/plane.png" alt="plane" height={112} width={150} />
            </div>
            <div className='text-center flex lg:hidden justify-center p-[40px]'>
                <Image src="/assets/subscribe/plane.png" alt="plane" height={100} width={80} />
            </div>

            <div className='p-2 pb-[30px] lg:pb-[60px]'>
                <div className='font-[poppins] font-[600] lg:mx-[120px] xl:mx-[180px] 2xl:mx-[300px] text-[30px] md:text-[40px] lg:text-[44px] lg:leading-[61.6px] text-center text-[#242331]'>
                    Subscribe To Our Newsletter & Get The Coupon code.
                </div>
                <div className='font-nunito-sans font-[400] text-[12px] md:text-[16px] lg:text-[20px] lg:leading-[36px] text-center text-[#242331]'>
                    All your information is completely confidential
                </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-center items-center'>
                <div className='m-2'>
                    <input className="shadow appearance-none border rounded py-2 px-3 lg:w-[491px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Type your email" />
                </div>
                <div className='m-2'>
                    <button className="bg-[#0C5BC6] hover:bg-blue-900 text-white text-[15px] font-nunito-sans font-[800] py-2 px-4 rounded">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    )
}
