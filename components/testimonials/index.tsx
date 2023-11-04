import CheveronLeft from '@/icons/cheveronLeft'
import CheveronRight from '@/icons/cheveronRight'
import Image from 'next/image'

export default function Testimonails() {
    return (
        <div>
            <div className='font-[poppins] font-[600] text-[30px] md:text-[40px] lg:text-[44px] leading-[61.6px] text-center text-[#332C5C] lg:mt-[120px]'>
                See Our Success Stories
            </div>

            <div className='flex flex-row items-center justify-between mt-8'>
                <div className='w-[30px] h-[30px] md:w-[46px] md:h-[46px] rounded-full bg-[#293FCC] flex items-center justify-center'>
                    <CheveronLeft height={20} width={20} color='white' />
                </div>

                <div className='w-[260px] sm:w-[400px] md:w-[500px] lg:w-[800px] min-h-[230px] xl:w-[1000px] custom-inner custom-outer mx-[8px] sm:mx-[20px] md:mx-[53px] flex flex-col lg:flex-row'>
                    <div className='w-[230px] min-h-full rounded-tl-[50px] rounded-bl-[50px] bg-[#0C5BC6] hidden lg:flex items-center justify-center'>
                        <div className='font-[nunito] font-[800] text-[176px] leading-[193px] relative top-[30px] text-white'>
                            “
                        </div>
                    </div>

                    <div className='w-full h-[15px] rounded-tl-[50px] rounded-tr-[50px] bg-[#0C5BC6] flex lg:hidden items-center justify-center'>
                    </div>
                    <div className='flex flex-col-reverse md:flex-row justify-between '>
                        <div className='p-2 lg:ml-[34px] lg:w-[500px] xl:w-[644px] flex flex-col justify-around'>
                            <div className='font-[nunito] font-[400] text-[16px] lg:text-[18px] leading-[26px] text-[#242331]'>
                                There are many variations of passages of Lorem Ipsum available
                                but the majority have sufferg alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage.
                            </div>
                            <div className='font-[nunito] font-[600] text-[18px] lg:text-[20px] lg:leading-[31px] text-right'>
                                <div>- Abcdefgh Ijklmnop</div>
                                <div>Frontend Engineer</div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='w-[80px] h-[80px] lg:w-[120px] lg:h-[120px] rounded-full border-8 border-blue-600 mx-[30px] mt-[10px] md:mt-0 flex items-center justify-center'>
                                <Image src="/assets/testimonials/profile1.png" alt="profile1" width={120} height={120} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[30px] h-[30px] md:w-[46px] md:h-[46px] rounded-full bg-[#293FCC] flex items-center justify-center'>
                    <CheveronRight width={20} height={20} color='white' />
                </div>
            </div>
            <div className='flex flex-row p-2 mt-4 space-x-1 justify-center'>
                <div className='w-[10px] h-[10px] rounded-full bg-[#00000040]'></div>
                <div className='w-[10px] h-[10px] rounded-full bg-[#00000040]'></div>
                <div className='w-[10px] h-[10px] rounded-full bg-[#00000040]'></div>
            </div>
        </div>
    )
}
