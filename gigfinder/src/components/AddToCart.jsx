import { useState } from "react";

export default function AddToCard({ setMyTickets, cartTotal, setCartTotal, cartQuantity, setCartQuantity, event  }) {

    return (
        <div className="add-to-cart">
            <div className="ticket-options">
                {event.capacity <= 1000 &&
                    <div className="ticket-option">General: €{event.price}</div>
                }
                {event.capacity > 1000 &&
                    <div className="ticket-option">General Standing: €{event.price}</div>
                }
                <div className="ticket-option">VIP: €{event.price * 1.5}</div>
                
            <div className="adjust-cart-quantity">
                <h3 onClick={setCartQuantity(-- 1)}>-</h3>
                <h3>{cartQuantity}</h3>
                <h3 onClick={setCartQuantity(++ 1)}>+</h3>
            </div>
            <button>Add to Cart</button>
            </div>
        </div>
    )
}