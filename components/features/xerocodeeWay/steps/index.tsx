import Image from "next/image"

interface StepsComponentInterface {
    path: string,
    alt: string,
    heading: string,
    subheading: string,
    reverse: boolean,
    height: number,
    width: number
}
export default function Steps({ path, alt, heading, subheading, reverse = false, height, width }: StepsComponentInterface) {
    return (
        <div
            data-testid="steps"
            className={`flex flex-col lg:${reverse ? "flex-row-reverse" : "flex-row"} items-center p-4 lg:mt-[71px]`}>
            {/* Image */}
            <div className='xl:ml-[57px] lg:w-1/2 flex justify-center text-center'>
                <Image src={path} alt="Point21" width={width} height={height} />
            </div>
            {/* Content */}
            <div className='lg:ml-[98px] lg:w-1/2'>
                <div className='font-[poppins] font-[600] text-[16px] lg:text-[20px] leading-[32px] text-center lg:text-left text-[#332C5C]'>
                    {heading}
                </div>
                <div className='font-[nunito] font-[400] text-[12px] lg:text-[16px] lg:leading-[28.8px] text-center lg:text-left text-[#5E587A]'>
                    {subheading}
                </div>
            </div>
        </div>
    )
}
