import { useParams } from "react-router-dom";
import events from "../data/eventData";

export default function EventPage() {

    const { id } = useParams();

    const event = events.find(e => e.id === Number(id));

    if (!event) return <div className="event-not-found">Event not found</div>

    return (
        <div className="event-page">
            <div className="event-artist-hero">
                <h1 className="event-artist-hero-title">{event.artist}</h1>
            </div>
        </div>
    )
}