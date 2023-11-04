import { ContentListItemsInterface } from "../../../utils/footer"

interface FooterSectionProps {
    heading: string,
    contentList: ContentListItemsInterface[]
}

export default function FooterSection({ heading, contentList }: FooterSectionProps) {
    return (
        <div data-testid="footer-section" >
            <div className='font-[poppins] font-[600] text-[24px] leading-[38.4px] text-[#332C5C]'>
                {heading}
            </div>
            <div className='mt-[39px] flex flex-col gap-[12px]'>
                {contentList.map((content, index) => (
                    <a key={index} href={content.link} className='font-nunito-sans font-[400] text-[16px] text-[#494369]'>{content.name}</a>
                ))}
            </div>
        </div>
    )
}