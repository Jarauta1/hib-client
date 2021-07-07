import footer from "./footer.css"

function Footer() {
    return(<>
        <footer className="footer-footer">
            <div className="footer-container">
                <div className="grid-footer">
                    <div className="column-xs-12">
                        <ul className="social social-networks square spin-icon">
                            <li className="li-footer li-social">
                                <a className="icon-linkedin a-social" href="https://www.linkedin.com/in/diegojarauta" target="_blank" rel="noopener noreferrer"><span class="fab-footer fa-codepen"></span></a>
                            </li>
                            <li className="li-footer li-social">
                                <a className="icon-github a-social" href="https://www.github.com/Jarauta1" target="_blank" rel="noopener noreferrer"><span class="fab-footer fa-github"></span></a>
                            </li>
                        </ul>
                        <p className="copyright-footer">© {new Date().getFullYear()} hecho por DJarauta</p>
                    </div>
                </div>
            </div>
        </footer>
    </>)
}

export default Footer;