import { useState } from "react";

export default function AddToCart({ setMyTickets, basketTotal, setBasketTotal, basketQuantity, setBasketQuantity, event  }) {

    const [itemQuantity, setItemQuantity] = useState(0);

    let handleAddItem = () => {
        setItemQuantity(itemQuantity + 1)
    }

    let handleSubtractItem = () => {
        setItemQuantity(
            itemQuantity > 0 ?
                itemQuantity - 1 :
                itemQuantity = 0
        );
    }

    return (
        <div className="add-to-basket">
            <div className="ticket-options">
                {event.capacity <= 1000 &&
                    <div className="ticket-option">General: €{event.price}</div>
                }
                {event.capacity > 1000 &&
                    <div className="ticket-option">General Standing: €{event.price}</div>
                }
                <div className="ticket-option">VIP: €{event.price * 1.5}</div>
                
            <div className="adjust-basket-quantity">
                <h3 onClick={handleSubtractItem}>-</h3>
                <h3>{itemQuantity}</h3>
                <h3 onClick={handleAddItem}>+</h3>
            </div>
            <button>Add to Basket</button>
            </div>
        </div>
    )
}