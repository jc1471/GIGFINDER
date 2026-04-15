import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";

export default function EventCard({ event, cartQuantity, setCartQuantity, cartTotal, setCartTotal }) {
    return (
        <>
            {/*<Link to={`/events/${id}`}>*/}
            <a href={`/events/${event.id}`}>
                <div className="event-card">
                    <div className="card-artist-header">
                            <div className="card-artist-header-text">
                                <h1 className="card-artist-header-name">{event.artist}</h1>
                                <h3 className="genre">{event.genre}</h3>
                            </div>
                    </div>
                    <div className="event-card-grid-container">
                        <div className="event-card-left">
                            <div className="event-info-section">

                                <div className="location-section">
                                    <i
                                        className="flag"
                                        src={event-country}
                                    />
                                    <h2 className="venue">{event.venue},</h2>
                                    <h2 className="city">
                                        <i className="fa-solid fa-pin"></i>
                                        {event.city}</h2>

                                </div>

                                <div className="date-section">
                                    <h3 className="date">{event.date}</h3>
                                    <h3 className="day">{event.day},</h3>
                                    <h3 className="time">{event.time}</h3>
                                </div>
                            </div>
                            <div className="availability-section">
                                {event.ticketsAvailable >= 100 ? (
                                    <h2 className="tickets-available available">tickets available</h2>
                                    ) : event.ticketsAvailable >= 10 ? (
                                    <h2 className="tickets-available selling-fast">tickets selling fast</h2>
                                    ) : event.ticketsAvailable >= 1 ? (
                                    <h2 className="tickets-available few-remaining">few tickets remaining</h2>
                                    ) : event.ticketsAvailable == 0 ? (                  
                                    <h2 className="tickets-available 0-tickets"></h2>
                                    ) : null
                                }
                            </div>
                        </div>
                        <div className="event-card-right">
                            <div className="price-section">
                                <h2 className="price">From €{event.price}</h2>
                            </div>

                            {event.ticketsAvailable !== 0 ? (
                                <h2 className="cta get-tickets">GET TICKETS</h2>
                            ) : (<h2 className="cta sold-out">sold out</h2>)}
                        </div>
                    </div>
                    <AddToCart
                        event={event}
                        setMyTickets={setMyTickets}
                        cartTotal={cartTotal}
                        setCartTotal={setCartTotal}
                        cartQuantity={cartQuantity}
                        setCartQuantity={setCartQuantity}
                    />
                </div>
            </a>
            {/*</Link >*/}
        </>
        )
}