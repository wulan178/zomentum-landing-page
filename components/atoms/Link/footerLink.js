import React from 'react'

export default function FooterLink(
    { className, href, text }
) {
    return (
        <div>
            <li className={className}><a href={href}>{text}</a></li>
        </div>
    )
}
