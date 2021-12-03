import FooterLink from "../atoms/Link/footerLink"

export default function Footer() {
    return (
        <div className="container-fluid footer">
            <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-2 col-md-5 col-sm-10">
                    <ul>
                        <FooterLink className="footer-link title" href="" text="Product" />
                        <FooterLink className="footer-link" href="" text="Features" />
                        <FooterLink className="footer-link" href="" text="Pricing" />
                        <FooterLink className="footer-link" href="" text="Integrations" />
                        <FooterLink className="footer-link" href="" text="Product" />
                    </ul>
                </div>
                <div className="col-lg-2 col-md-5 col-sm-10">
                    <ul className="footer-links">
                        <FooterLink className="footer-link title" href="" text="Company" />
                        <FooterLink className="footer-link" href="" text="About us" />
                        <FooterLink className="footer-link" href="" text="Contact us" />
                        <FooterLink className="footer-link" href="" text="Submit a ticket" />
                        <FooterLink className="footer-link" href="" text="Product" />
                        <FooterLink className="footer-link" href="" text="Privacy policy" />
                        <FooterLink className="footer-link" href="" text="Terms & conditions" />
                    </ul>
                </div>
                <div className="col-lg-2 col-md-5 col-sm-10">
                    <ul>
                        <li className="footer-link title"><a href="">Users</a></li>
                        <li className="footer-link"><a href="">Login</a></li>
                        <li className="footer-link"><a href="">Get a demo</a></li>
                        <li className="footer-link"><a href="">Talk to us</a></li>
                        <li className="footer-link"><a href="">Terms & conditions</a></li>
                    </ul>
                </div>
                <div className="col-lg-2 col-md-5 col-sm-10">
                    <ul>
                        <li className="footer-link title"><a href="">Guides</a></li>
                        <li className="footer-link"><a href="">MSP</a></li>
                        <li className="footer-link"><a href="">MSP Sales</a></li>
                    </ul>
                </div>
                <div className="col-lg-2 col-md-5 col-sm-10">
                    <ul>
                        <li className="footer-link title"><a href="">Contact Us</a></li>
                        <li className="footer-link"><a href="">Address</a></li>
                    </ul>
                </div>
                <div className="col-lg-1"></div>
            </div>
            <div className="row copyright">
                <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                    <a href="">© 2020 Pactora Inc. All rights reserved.</a>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                    <a href="">Follow us on social</a>
                </div>
            </div>
        </div>

    )
}
