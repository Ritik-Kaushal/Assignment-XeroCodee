interface SocialCircleProps {
    color?: string
    opacity?: number
}

export default function SocialCircle({ color = "#C6DEFF", opacity = 0 }: SocialCircleProps) {
    return (
        <div className={`w-[41px] h-[41px] rounded-full bg-[${color}] opacity-[${opacity * 100}%]`}></div>
    )
}
