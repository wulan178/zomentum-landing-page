import React from 'react'
import Image from 'next/image'

export default function ListItem(
    { icon, desc }
) {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 list-col">
            <Image src={icon} width={100} height={100} />
            <p className="list-desc">{desc}</p>
        </div>
    )
}
