import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <header>
            <h1 className="site-title">GIGFINDER</h1>
            <nav className="header-nav">
                <FontAwesomeIcon className="menu-bars" icon={faBars} />
                <a className="menu-text" id="my-tickets-link">my tickets</a>
                <a className="menu-text" id="basket-link">basket</a>
            </nav>
        </header>
    )
}