import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArtistById } from "../api/artists";
import ArtistSection from "../components/ArtistSection";
import events from "../data/eventData";

export default function EventPage() {

    const { id } = useParams();

    const event = events.find(e => e.id === Number(id));
    
    if (!event) return <div className="event-not-found">Event not found</div>

    const [artist, setArtist] = useState(null);

    useEffect(() => {
        async function loadArtist() {
            const data = await getArtistById(event.artistId)
            setArtist(data);
        }

        loadArtist();
    }, [event]);

    if (artist === null) return <div>Loading artist...</div>;
    if (!artist) return <div>Artist not found.</div>;

    console.log("EVENT:", event);
    console.log("ARTIST ID:", event?.artist.id);

    return (
        <div className="event-page">
            <ArtistSection artist={artist} />
            <div className="location-section">
                <i
                    className="flag"
                    src={event.country}
                />
                <h2 className="city">
                    <i className="fa-solid fa-pin"></i>
                    {event.city}</h2>
                <h2 className="venue">{event.venue}</h2>
            </div>
            <div className="date-section">
                <h3 className="date">{event.date}</h3>
            <h3 className="time">{event.time}</h3>
                <h3 className="day">{event.day}</h3>
            </div>
        </div>
    )
}