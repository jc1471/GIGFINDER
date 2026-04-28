import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import TicketOption from "./TicketOption";
import EventCardInfo from "./EventCardInfo";
import useConvertDate from "../hooks/useConvertDate";

export default function EventModal({ event, addToBasketQuantity, setAddToBasketQuantity, basket, setBasket, eventModalVisible, setEventModalVisible, artistData, setArtistData, loading, setLoading }) {
    
    const ticketOptions = [
        {
            title: "General Admission",
            id: "general",
            description: "Standing · Main floor access",
            price: (Number(event.price)).toFixed(2),
        },
        {
            title: "Priority",
            id: "priority",
            description: "Priority queue · Early access",
            price: (Number(event.price) * 1.2).toFixed(2),
        },
        {
            title: "VIP Balcony",
            id: "vip",
            description: "Reserved Seating · Private bar access",
            price: (Number(event.price) * 2.25).toFixed(2),
        },
    ];


    const [activeTicketType, setActiveTicketType] = useState(ticketOptions[0]);
    const addToBasketTotal = (activeTicketType.price * addToBasketQuantity).toFixed(2);

    const handleSetActiveTicketType = (e) => {
        setActiveTicketType(e)
    };

    const handleSetAddToBasketTotal = () => {
        setAddToBasketTotal((activeTicketType.price * addToBasketQuantity).toFixed(2));
    };

    const handleAddBasketQuantity = () => {
        setAddToBasketQuantity(prev => prev < 6 ? prev + 1 : 6)
    };

    const handleSubtractBasketQuantity = () => {
        setAddToBasketQuantity(prev => prev > 1 ? prev - 1 : 1)
    };

    const handleAddToBasket = () => {
        const ticket = {
            event: event,
            ticketType: activeTicketType.title,
            price: activeTicketType.price,
            quantity: addToBasketQuantity,
        }
        setBasket(prev => [...prev, ticket]);
        setEventModalVisible(false);
        setAddToBasketQuantity(2);
    }

    const extrapolatedDate = useConvertDate(event.date);
    const convertedDate = `${extrapolatedDate[0]}.${extrapolatedDate[1]}.${extrapolatedDate[2]}`; 

    
    const [error, setError] = useState(null);

    useEffect(() => {
        setActiveTicketType(ticketOptions[0])
        setAddToBasketQuantity(2);
        setArtistData(null);

        // Artist Data API call
        fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${event.artist}&api_key=${import.meta.env.VITE_LASTFM_API_KEY}&format=json`)
            .then(response => response.json())
            .then(json => {
                setArtistData(json);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
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
                            <EventCardInfo title="date" info={`${event.dayOfWeek}, ${convertedDate}`}/>
                        </div>
                    </div>
                    <div className="event-modal-about-artist">
                        <h2 className="event-modal-about-artist-title">ABOUT THE ARTIST</h2>
                        {loading ? (
                            <p>Loading...</p>
                        ) : artistData?.artist?.bio?.content ? (
                            <p className="event-modal-about-artist-info">{artistData.artist.bio.content}</p>
                        ) : (
                            <p className="event-modal-about-artist-info">Artist bio coming soon...</p>
                        )}
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
                                >{addToBasketQuantity}</div>
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