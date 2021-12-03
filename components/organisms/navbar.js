import Image from 'next/image'

export default function Navbar() {
    return (
        <div className="container-fluid nav-container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <Image src="/icons/brand.svg" width={201.97} height={28.03} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Integrations</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Company</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn demo" href="#">Get a demo</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn px-0 login" href="#">
                                    <Image src="/icons/login.svg" width={18} height={18} />
                                    <span className="login-text">Login</span>
                                </a>                            
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}


