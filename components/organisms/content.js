import React from 'react'
import Image from 'next/image'
import SignUp from '../atoms/Link/signup'

export default function Content(
    { type, title, desc, img }
) {
    if (type == 'left') {
        return (
            <div className="container">
                <div className="row content-row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5 text-start">
                        <Image src={img} width={380} height={255} />
                    </div>
                    <div className="col-lg-5 content2-col">
                        <h4 className="content-heading">{title}</h4>
                        <p className="content-desc">{desc}</p>
                        <SignUp />
                    </div>
                    <div className="col-lg-1"></div>
                </div>
            </div>
        )

    } else if (type == 'right') {
        return (
            <div className="container">
                <div className="row content-row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5 content3-col">
                        <h4 className="content-heading">{title}</h4>
                        <p className="content-desc">{desc}</p>
                        <SignUp />
                    </div>
                    <div className="col-lg-5 text-start">
                        <Image src={img} width={256} height={259} />
                    </div>
                    <div className="col-lg-1"></div>
                </div>
            </div>
        )

        // Without signup link
    } else if (type == 'no-link') {
        return (
            <div className="container">
                <div className="row content-row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5 content1-col">
                        <h4 className="content-heading">Your channel program on steroids</h4>
                        <p className="content-desc">Tired of finding MSPs that can help you boost your channel sales?  You’re in luck, because they’re all here.</p>
                    </div>
                    <div className="col-lg-5 text-center">
                        <Image src="/images/steroids.svg" width={421} height={310} />
                    </div>
                    <div className="col-lg-1"></div>
                </div>
            </div>
        )
    }
}
