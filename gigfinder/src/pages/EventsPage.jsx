import { useState } from 'react'
import Header from "../components/Header";
import FilterSection from "../components/FilterSection";
import EventCard from "../components/EventCard";
import events from "../data/eventData";
import useFilter from "../hooks/useFilterList";

export default function EventsPage() {

    const [basketQuantity, setBasketQuantity] = useState(0);
    const [basketTotal, setBasketTotal] = useState(0);

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

    const displayEvents = filteredEvents.map(event =>
    <EventCard
        key={event.id}
        event={event}
        basketQuantity={basketQuantity}
            setBasketQuantity={steBasketQuantity}
            basketTotal={basketTotal}
            setBasketTotal={setBasketTotal}
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