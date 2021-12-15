import FooterLink from "../atoms/Link/footerLink"

export default function Footer() {
    return (
        <div className="container-fluid footer">
            <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-2 col-md-5 col-sm-10">
                    <ul>
                        <li className="footer-link title" href="">Product</li>
                        <FooterLink href="" text="Features" />
                        <FooterLink href="" text="Pricing" />
                        <FooterLink href="" text="Integrations" />
                        <FooterLink href="" text="Product" />
                    </ul>
                </div>
                <div className="col-lg-2 col-md-5 col-sm-10">
                    <ul className="footer-links">
                        <li className="footer-link title" href="">Company</li>      
                        <FooterLink href="" text="About us" />
                        <FooterLink href="" text="Contact us" />
                        <FooterLink href="" text="Submit a ticket" />
                        <FooterLink href="" text="Product" />
                        <FooterLink href="" text="Privacy policy" />
                        <FooterLink href="" text="Terms & conditions" />
                    </ul>
                </div>
                <div className="col-lg-2 col-md-5 col-sm-10">
                    <ul>
                        <li className="footer-link title" href="">Users</li>
                        <FooterLink href="" text="Login" />
                        <FooterLink href="" text="Get a demo" />
                        <FooterLink href="" text="Talk to us" />
                        <FooterLink href="" text="Terms & conditions" />
                    </ul>
                </div>
                <div className="col-lg-2 col-md-5 col-sm-10">
                    <ul>
                        <li className="footer-link title" href="">Guides</li>
                        <FooterLink href="" text="MSP" />
                        <FooterLink href="" text="MSP Sales" />
                    </ul>
                </div>
                <div className="col-lg-2 col-md-5 col-sm-10">
                    <ul>
                        <li className="footer-link title" href="">Contact us</li>
                        <FooterLink href="" text="Address" />
                    </ul>
                </div>
                <div className="col-lg-1"></div>
            </div>
            <div className="row copyright">
                <FooterLink unlist href="" text="© 2020 Pactora Inc. All rights reserved." />
                <FooterLink unlist href="" text="Follow us on social" />
            </div>
        </div>
    )
}
