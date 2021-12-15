import React from 'react'

export default function FooterLink(
    { unlist, href, text }
) {
    if (unlist == true) {
        return (
            <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                <a href={href}>{text}</a>
            </div>
        )
    } else {
        return (
            <div>
                <li className="footer-link">
                    <a href={href}>{text}</a>
                </li>
            </div>
        )
    }
}
