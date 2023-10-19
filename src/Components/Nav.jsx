import { useState, useRef, useEffect }  from "react"
import { Link } from 'react-scroll'
import newLogo from '../assets/IW.png'
import resume from '../documents/Resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars as hamburger } from '@fortawesome/free-solid-svg-icons'

export default function Nav() {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenu = () => {
        setShowMenu(false);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu();
            }
        }
        if (showMenu) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showMenu]);

    return (
        <div className="nav-content" id='hero'>
            <header>
                <nav>
                    <img className="logo" src={newLogo} />
                    <FontAwesomeIcon icon={hamburger} onClick={toggleMenu}/>
                    {showMenu && (
                        <div className="nav-links" ref={menuRef}>
                            <Link to="hero" spy={true} smooth={true} offset={-100} duration={600} onClick={closeMenu}>Home</Link>
                            <Link to="about" spy={true} smooth={true} offset={-100} duration={600} onClick={closeMenu}>About</Link>
                            <Link to="projects" spy={true} smooth={true} offset={-100} duration={600} onClick={closeMenu}>Projects</Link>
                            <a href={resume} target="_blank" onClick={closeMenu}>Resume</a>
                            <Link to="contact" spy={true} smooth={true} offset={-100} duration={600} onClick={closeMenu}>Contact</Link>
                        </div>
                    )}
                </nav>
            </header>
        </div>
    )
}