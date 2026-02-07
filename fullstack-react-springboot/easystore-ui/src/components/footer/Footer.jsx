import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Footer () {
    return (
        <footer> Built with 
        <FontAwesomeIcon icon={faHeart} aria-label="hidden" className="footer-icon"></FontAwesomeIcon>
        by
        <a href="https://easybytes.com" target="_blank" rel="noreferrer"> eazybytes</a>
        </footer>
    );
}