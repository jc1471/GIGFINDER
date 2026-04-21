import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import TicketOption from "./TicketOption";
import EventCardInfo from "./EventCardInfo";

export default function EventModal({ event, basketQuantity, setBasketQuantity, basketTotal, setBasketTotal, eventModalVisible, setEventModalVisible }) {
    
    const ticketOptions = [
        {
            title: "General Admission",
            id: "general",
            description: "Standing · Main floor access",
            price: Number(event.price),
        },
        {
            title: "Priority",
            id: "priority",
            description: "Priority queue · Early access",
            price: Number(event.price) * 1.2,
        },
        {
            title: "VIP Balcony",
            id: "vip",
            description: "Reserved Seating · Private bar access",
            price: Number(event.price) * 2.25,
        },
    ];

    const [activeTicketType, setActiveTicketType] = useState(ticketOptions[0]);
    const addToBasketTotal = activeTicketType.price * basketQuantity;

    const handleSetActiveTicketType = (e) => {
        setActiveTicketType(e)
    };

    const handleSetAddToBasketTotal = () => {
        setAddToBasketTotal(activeTicketType.price * basketQuantity)
    };

    const handleAddBasketQuantity = () => {
        setBasketQuantity(prev => prev + 1)
    };

    const handleSubtractBasketQuantity = () => {
        setBasketQuantity(prev => prev > 1 ? prev - 1 : 1)
    };

    const handleAddToBasket = () => {
        setBasketTotal
    }

    useEffect(() => {
        setActiveTicketType(ticketOptions[0])
        setBasketQuantity(2);
            }, [event]);

    return (
        <>
            {eventModalVisible && (
                <div
                    className="event-modal">
                    <FontAwesomeIcon
                        className="event-modal-close-button"
                        icon={faCircleXmark}
                        onClick={() => setEventModalVisible(false)}
                    />
                    <div className="event-modal-header">
                        <h1 className="event-modal-artist-name">{event.artist}</h1>
                        <h2 className="event-modal-tour">european tour</h2>
                    </div>
                    <div className="event-modal-info">
                        <div className="event-modal-info-grid-container">
                            <EventCardInfo title="venue" info={event.venue} />
                            <EventCardInfo title="city" info={event.city} flag={event.country} />
                            <EventCardInfo title="doors" info={event.time} />
                            <EventCardInfo title="date" info={`${event.day}, ${event.date}`}/>
                        </div>
                    </div>
                    <div className="event-modal-about-artist">
                        <h2 className="event-modal-about-artist-title">ABOUT THE ARTIST</h2>
                        <p className="event-modal-about-artist-info">Some text about this artist... </p>
                    </div>
                    <div className="event-modal-artist-photos">

                    </div>
                    <h2 className="select-tickets">SELECT TICKETS</h2>
                        {ticketOptions.map((option) => (
                            <TicketOption
                                key={option.id}
                                ticketOption={option}
                                activeTicketType={activeTicketType}
                                onSelect={setActiveTicketType}
                            />
                        ))} 
                    <div className="event-modal-add-to-basket-section">  
                           
                        <div className="event-modal-basket-quantity-wrapper">
                            <h1 className="event-modal-quantity-text">QUANTITY</h1>
                            <div className="event-modal-basket-quantity-box">
                                <div
                                    className="event-modal-basket-change-quantity-subtract"
                                onClick={handleSubtractBasketQuantity}
                                >-</div>
                                <div
                                    className="event-modal-basket-show-quantity"
                                >{basketQuantity}</div>
                                <div
                                    className="event-modal-basket-change-quantity-add"
                                onClick={handleAddBasketQuantity}
                                >+</div>
                            </div>
                        </div>
                        <div
                            className="add-to-basket-button"
                            onClick={handleAddToBasket}    
                        >
                         Add to Basket - €{addToBasketTotal}   
                        </div>
                    </div>
                </div>
            )}
        </>        
    )
}