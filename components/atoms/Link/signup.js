import React from 'react'
import Image from 'next/image'

export default function SignUp() {
    return (
        <>
            <a href="" className="signup">
                <p className="signup-text mt-3">Signup now</p>
                <Image src="/icons/arrow.svg" width={24} height={24} />
            </a>
        </>
    )
}
