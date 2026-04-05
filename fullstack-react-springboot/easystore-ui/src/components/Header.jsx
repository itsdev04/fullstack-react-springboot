import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faTags } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <a href="/" className="link">
          <FontAwesomeIcon icon={faTags} className="fa-icon"></FontAwesomeIcon>
          <span className="brand-title">Easy Stickers</span>
        </a>
        <nav className="easynav">
          <ul>
            <li>
              <a href="/" className="navLink">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="navLink">
                About
              </a>
            </li>
            <li>
              <a href="/" className="navLink">
                Contact
              </a>
            </li>
            <li>
              <a href="/" className="navLink">
                Login
              </a>
            </li>
            <li>
              <a href="/" className="navLink">
                <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
