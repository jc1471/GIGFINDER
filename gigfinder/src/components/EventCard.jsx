import { Link } from "react-router-dom";

export default function EventCard({ artist, city, venue, date, time, day, country, price, genre, ticketsAvailable, id }) {
    return (
        <>
        {/*<Link to={`/events/${id}`}>*/}
            <div className="event-card">
                <div className="card-artist-header">
                        <div className="card-artist-header-text">
                            <h1 className="card-artist-header-name">{artist}</h1>
                            <h3 className="genre">{genre}</h3>
                        </div>
                </div>
                <div className="event-card-grid-container">
                    <div className="event-card-left">
                        <div className="event-info-section">

                            <div className="location-section">
                                <i
                                    className="flag"
                                    src={country}
                                />
                                <h2 className="venue">{venue},</h2>
                                <h2 className="city">
                                    <i className="fa-solid fa-pin"></i>
                                    {city}</h2>

                            </div>

                            <div className="date-section">
                                <h3 className="date">{date}</h3>
                                <h3 className="day">{day},</h3>
                                <h3 className="time">{time}</h3>
                            </div>
                        </div>
                        <div className="availability-section">
                            {ticketsAvailable >= 100 ? (
                                <h2 className="tickets-available available">tickets available</h2>
                                ) : ticketsAvailable >= 10 ? (
                                <h2 className="tickets-available selling-fast">tickets selling fast</h2>
                                ) : ticketsAvailable >= 1 ? (
                                <h2 className="tickets-available few-remaining">few tickets remaining</h2>
                                ) : ticketsAvailable == 0 ? (                  
                                <h2 className="tickets-available 0-tickets"></h2>
                                ) : null
                            }
                        </div>
                    </div>
                    <div className="event-card-right">
                        <div className="price-section">
                            <h2 className="price">€{price}</h2>
                        </div>

                        {ticketsAvailable !== 0 ? (
                            <h2 className="cta get-tickets">GET TICKETS</h2>
                        ) : (<h2 className="cta sold-out">sold out</h2>)}
                    </div>
                </div>
            </div>
            {/*</Link >*/}
        </>
        )
}