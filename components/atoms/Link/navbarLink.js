import React from 'react'

export default function NavbarLink(
    { active, href, text }
) {
    if (active == true) {
        return (
            <>
                <li className="nav-item">
                    <a className="nav-link fw-bold" aria-current="page" href={href}>{text}</a>
                </li>
            </>
        )
    } else {
        return (
            <>
                <li className="nav-item">
                    <a className="nav-link" href={href}>{text}</a>
                </li>
            </>
        )
    }
}
