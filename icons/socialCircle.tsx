interface SocialCircleProps {
    color?: string
    opacity?: number
}

export default function SocialCircle({ color = "#", opacity = 1 }: SocialCircleProps) {

    const Sclass: string = ""
    return (
        <div className={`w-[41px] h-[41px] rounded-full bg-[${color}]`} ></ div>
    )
}
