import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faTicketSimple } from '@fortawesome/free-solid-svg-icons';

export default function Header({ 
    myTicketsViewActive,
    setMyTicketsViewActive,
    basketTotal,
    basketViewActive,
    setBasketViewActive
}) {
    
    const handleMyTicketsVisible = () => {
        myTicketsViewActive ? setMyTicketsViewActive(false) : setMyTicketsViewActive(true)
    };

    const handleBasketVisible = () => {
        basketViewActive ? setbasketViewActive(false) : setbasketViewActive(true)
    };

    return (
        <header>
            <h1 className="site-title">GIG<span className="site-title-period">.</span>FINDER</h1>
            <nav className="header-nav">
                <div className="cart-icon-wrapper">
                    <FontAwesomeIcon className="cart-icon" icon={faCartShopping} />
                    <span
                        className="cart-icon-number"
                    >
                        {basketTotal}
                    </span>
                </div> 
                
                <FontAwesomeIcon className="ticket-icon" icon={faTicketSimple} />
            </nav>
        </header>
    )
}