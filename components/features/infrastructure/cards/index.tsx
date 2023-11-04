import Image from "next/image"

export interface CardInterface {
    path: string
    alt: string
    title: string
    description: string
}

export default function Card({ path, alt, title, description }: CardInterface) {
    return (
        <div
            data-testid={`card-${alt}`}
            className='w-[300px] h-[68px] lg:w-[485px] lg:h-[105px] lg:p-5 flex flex-row items-center'>
            <div className='p-[6px] lg:p-[16px] w-[50px] h-[50px] lg:w-[72px] lg:h-[72px] border border-gray-300 rounded-[10px] shadow-xl flex justify-center'>
                <Image src={path} alt={alt} height={40} width={40} />
            </div>
            <div className='ml-2 flex flex-col'>
                <div
                    data-testid="card-title"
                    className='font-[poppins] font-[600] text-[20px] lg:text-[24px] leading-6 lg:leading-[38.4px] text-[#332C5C]'>
                    {title}
                </div>
                <div
                    data-testid="card-description"
                    className='font-[nunito] font-[400] text-[11px] lg:text-[16px] leading-3 lg:leading-[28.8px] text-[#5E587A]'>
                    {description}
                </div>
            </div>
        </div>
    )
}