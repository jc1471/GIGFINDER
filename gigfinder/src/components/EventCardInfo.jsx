export default function EventCardInfo({ title, info, flag }) {
    return (
        <div className="event-card-info-component">
            <h1 className="event-card-info-component-title">{title}</h1>
            {title === "city" && (
                <div className="event-card-info-city">
                    <h2 className="event-card-info-component-content">{info}</h2>
                    <i src={flag}></i>
                </div>
            )}
            {title === "availability" && (
                <div className="availability-section">
                    {info >= 100 ? (
                        <h2 className="event-card-info-component-content tickets-available available">available</h2>
                        ) : info >= 10 ? (
                        <h2 className="event-card-info-component-content tickets-available selling-fast">selling fast</h2>
                        ) : info >= 1 ? (
                        <h2 className="event-card-info-component-content tickets-available few-left">few left</h2>
                        ) : info == 0 ? (                  
                        <h2 className="event-card-info-component-content tickets-available sold-out">sold out</h2>
                        ) : null
                    }
                </div>
            )}
            {title !== "city" && title !== "availability" &&
                (<h2 className="event-card-info-component-content">{info}</h2>)
            }

        </div>
    )
}