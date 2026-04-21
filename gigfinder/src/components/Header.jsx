import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faTicketSimple } from '@fortawesome/free-solid-svg-icons';

export default function Header({ 
    myTicketsViewActive,
    setMyTicketsViewActive,
    basket,
    basketViewActive,
    setBasketViewActive,
    myTickets
}) {
    
    const handleMyTicketsIconOnClick = () => {
        console.log("basket: ", basket);
        console.log("myTickets: ", myTickets);
        myTicketsViewActive ? setMyTicketsViewActive(false) : setMyTicketsViewActive(true)
    };

    const handleBasketIconOnClick = () => {
        console.log("basket view active: ", basketViewActive);
        basketViewActive ? setBasketViewActive(false) : setBasketViewActive(true)
    };

    return (
        <header>
            <h1 className="site-title">GIG<span className="site-title-period">.</span>FINDER</h1>
            <nav className="header-nav">
                <div
                    className="cart-icon-wrapper"
                    onClick={handleBasketIconOnClick}  
                >
                    <FontAwesomeIcon className="cart-icon" icon={faCartShopping} >
                        
                    </FontAwesomeIcon>
                    {basket.length > 0 && (
                        <span
                            className="cart-icon-number"
                        >
                            {basket.length}
                        </span>
                    )}
                </div> 
                
                <FontAwesomeIcon
                    className="ticket-icon"
                    icon={faTicketSimple}
                    onClick={handleMyTicketsIconOnClick}
                />
            </nav>
        </header>
    )
}