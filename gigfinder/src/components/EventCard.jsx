export default function EventCard({ artist, city, venue, date, time, day, country, price, genre, ticketsAvailable }) {
    return (
        <div className="event-card">
            <div className="event-card-top">
                <div className="event-info-section">
                    <div className="artist-section">
                        <h1 className="artist-name">{artist}</h1>
                        <h3 className="genre">{genre}</h3>
                    </div>

                    <div className="location-section">
                        <i
                            className="flag"
                            src={country}
                        />
                        <h2 className="city">{city}</h2>
                        <h3 className="venue">{venue}</h3>
                    </div>

                    <div className="date-section">
                        <h3 className="date">{date}</h3>
                        <h3 className="time">{time}</h3>
                        <h3 className="day">{day}</h3>
                    </div>
                </div>

                <div className="price-section">

                    {ticketsAvailable >= 100 ? (
                        <h2 className="tickets-available available">available</h2>
                        ) : ticketsAvailable >= 10 ? (
                        <h2 className="tickets-available selling-fast">selling fast</h2>
                        ) : ticketsAvailable >= 1 ? (
                        <h2 className="tickets-available few-remaining">few remaining</h2>
                        ) : ticketsAvailable == 0 ? (                  
                        <h2 className="tickets-available 0-tickets"></h2>
                        ) : null
                    }

                    <h2 className="price">€{price}</h2>
                </div>
            </div>
            
            {ticketsAvailable !== 0 ? (
                <h2 className="cta get-tickets">get tickets</h2>
            ) : (<h2 className="cta sold-out">sold out</h2>)}
        </div>
        )
}