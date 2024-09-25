import ThemeSwitcher from "./ThemeSwitcher"
import Link from "next/link"
import Image from "next/image"
export default function Navbar(){
    return (
        <nav className="navbar fixed-top navbar-expand-lg p-3 border-bottom">
            <div className="container-fluid d-flex justify-content-center align-items-center">
                <Image
                        src={'/header_logo.png'}
                        width={25}
                        height={25}
                        alt={"Screenshot von "}  
                        className="img-fluid me-2"  
                />
                <Link href="/" className="navbar-brand">

                    thoenelt.dev
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        
                        <li className="nav-item">
                            <Link href="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#about" className="nav-link">Über mich</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#projects" className="nav-link">Projekte</Link>
                        </li>
                    </ul>
                    <ThemeSwitcher />
                </div>
            </div>
        </nav>
    )
}