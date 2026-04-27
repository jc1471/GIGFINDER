export default function Basket({ basketViewActive, setBasketViewActive, basket, setBasket, setMyTickets, setEventModalVisible }) {

    const checkoutTotal = basket.reduce((total, ticket) => {    
        return total + (ticket.price * ticket.quantity);
    }, 0);
    const formattedCheckoutTotal = checkoutTotal.toFixed(2);

    const handleCompletePurchase = () => {
        setMyTickets(prev => [...prev, ...basket])
        setBasket([]);
    }

    return (
        <>
            {basketViewActive && (
                <div className="basket">
                    <h1 className="basket-title">Basket</h1>
                    <div className="checkout-items-container">
                    {basket.map((t, i) => (
                        <h3
                            className="checkout-item"
                            key={i}
                        >{t.event.artist} | {t.ticketType} | €{t.price} x {t.quantity}</h3>
                    ))}
                        </div>
                    <div
                        className="checkout-button"
                        onClick={handleCompletePurchase}    
                    >
                        <h3 className="complete-purchase">Complete Purchase</h3>
                        <h3 className="checkout-total">€{formattedCheckoutTotal}</h3>
                    </div>
                </div> 
            )}
            </>
    )
}