import React from 'react'
import Image from 'next/image'

export default function Decore(
    { className, img, width, height }
) {
    return (
        <div className={className}>
            <Image src={img} width={width} height={height} />
        </div>
    )
}
