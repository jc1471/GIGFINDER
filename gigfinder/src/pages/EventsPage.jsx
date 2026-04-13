import { useState } from 'react'
import Header from "../components/Header";
import FilterSection from "../components/FilterSection";
import EventCard from "../components/EventCard";
import events from "../data/eventData";
import useFilter from "../hooks/useFilterList";

export default function EventsPage() {

    const [query, setQuery] = useState("");
    const [filters, setFilters] = useState({
        artist: "",
        city: "",
        genre: "",
    });
    
    const filteredEvents = events.filter(event => {
        /* Search */
        const matchesQuery =
            !query ||
            ["artist", "city", "genre"].some(field => {
                const value = event[field];
                if (!value) return false;

                return value.toLowerCase().includes(query.toLowerCase());
            });
        
        /* Filters */
        const matchesFilters = Object.entries(filters).every(([field, value]) => {
            if (!value || value === "all") return true;

            return event[field] === value;
        });
        return matchesQuery && matchesFilters;
    });

    const displayEvents = filteredEvents.map(e =>
    <EventCard
        key={e.id}
        artist={e.artist}
        city={e.city}
        country={e.country}
        venue={e.venue}
        date={e.date}
        day={e.dayOfWeek}
        time={e.time}
        price={e.price}
        ticketsAvailable={e.ticketsAvailable}
        genre={e.genre}
        id={e.id}
    />
  );

    return (
        <div className="events-page">
            <Header />
            <FilterSection
                setQuery={setQuery}
                filters={filters}
                setFilters={setFilters}
            />
            <div className="events-section">
                {displayEvents}
            </div>
        </div>
    )
}