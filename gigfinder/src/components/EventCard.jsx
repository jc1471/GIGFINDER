import { Link } from "react-router-dom";
import AddToCart from "./AddToBasket";
import EventCardInfo from "./EventCardInfo";
import useConvertDate from "../hooks/useConvertDate";

export default function EventCard({ event, addToBasketQuantity, setAddToBasketQuantity, basket, setBasket, handleOpenEventModal }) {

    const extrapolatedDate = useConvertDate(event.date);
    const convertedDate = `${extrapolatedDate[0]}.${extrapolatedDate[1]}.${extrapolatedDate[2]}`; 

    return (
        <>
            <div
                className="event-card"
                onClick={() => handleOpenEventModal(event)}>
                    <div className="event-card-content">
                        <div className="event-card-header">
                            <div className="event-card-header-left">
                                <h3 className="event-card-genre">{event.genre}</h3>
                                <h1 className="event-card-artist-name">{event.artist}</h1>
                                <h2 className="event-card-tour">european tour</h2>
                            </div>
                            <div className="event-card-header-right">
                                <h3 className="event-card-day">{event.dayOfWeek}</h3>
                                <h3 className="event-card-date">{convertedDate}</h3>
                            </div>
                        </div>
                        <div className="event-card-info-grid-container">
                            <EventCardInfo title="venue" info={event.venue} />
                            <EventCardInfo title="city" info={event.city} flag={event.country} />
                            <EventCardInfo title="doors" info={event.time} />
                            <EventCardInfo title="availability" info={event.ticketsAvailable}/>
                        </div>
                    <div className="event-card-footer">
                        <div className="event-card-price">
                            <h1>from</h1>
                            <h2>€{event.price}</h2>
                        </div>
                        <div className="event-card-view-button">View</div>
                    </div>       
                    </div>
                </div>
        </>
        )
}