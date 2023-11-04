import Image from 'next/image'
import React from 'react'
import ImageComp from './ClientImageComponent'

export default function Clients() {
    return (
        <div
            data-testid="clients-component"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 mx-auto my-4 px-16 ">
            <ImageComp path="/assets/clients/client1.png" alt="client1" height={50} width={205} />
            <ImageComp path="/assets/clients/client2.png" alt="client2" height={40} width={154} />
            <ImageComp path="/assets/clients/client3.png" alt="client3" height={57} width={154} />
            <ImageComp path="/assets/clients/client4.png" alt="client4" height={53} width={102} />
            <ImageComp path="/assets/clients/client1.png" alt="client1" height={50} width={205} />
            <ImageComp path="/assets/clients/client2.png" alt="client2" height={40} width={154} />
            <ImageComp path="/assets/clients/client3.png" alt="client3" height={57} width={154} />
            <ImageComp path="/assets/clients/client4.png" alt="client4" height={53} width={102} />
        </div>
    )
}

