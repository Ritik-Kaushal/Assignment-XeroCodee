import Image from "next/image";

interface ImageCompProps {
    path: string;
    alt: string;
    height: number;
    width: number;
}

export default function ImageComp({ path, alt, height, width }: ImageCompProps) {
    return (
        <div
            data-testid="client-image-component"
            className="text-center flex justify-center items-center">
            <Image src={path} alt={alt} height={height} width={width} />
        </div>
    );
}
