import { useState } from 'react'
import Header from "../components/Header";
import Hero from "../components/Hero";
import FilterSection from "../components/FilterSection";
import SearchResultsHeader from "../components/SearchResultsHeader";
import EventCard from "../components/EventCard";
import events from "../data/eventData";
import useFilter from "../hooks/useFilterList";
import EventModal from "../components/EventModal";

export default function Main() {

    const [basketQuantity, setBasketQuantity] = useState(2);
    const [basketTotal, setBasketTotal] = useState(0);
    const [query, setQuery] = useState("");
    const [filters, setFilters] = useState({
        artist: "",
        city: "",
        genre: "",
    });
    const [selectedEvent, setSelectedEvent] = useState("");

    const [eventModalVisible, setEventModalVisible] = useState(false);

    const handleOpenEventModal = (event) => {
        setSelectedEvent(event);
        setEventModalVisible(true);
        console.log("eventModalVisble: ", eventModalVisible);
        console.log("selectedEvent: ", selectedEvent);
    }

    const [quantityCurrentSearchItems, setQuantityCurrentSearchItems] = useState(0);
    
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
        setBasketQuantity={setBasketQuantity}
        basketTotal={basketTotal}
        setBasketTotal={setBasketTotal}
        selectedEvent={selectedEvent}
        setSelectedEvent={setSelectedEvent}
        handleOpenEventModal={handleOpenEventModal}
            
    />
    );


    
    return (
        <div className="main">
            <Hero />
            <FilterSection
                setQuery={setQuery}
                filters={filters}
                setFilters={setFilters}
            />
            <SearchResultsHeader
                quantityCurrentSearchItems={displayEvents.length}
            />
            <div className="events-list">
                {displayEvents}
            </div>
            <EventModal
                event={selectedEvent}
                basketQuantity={basketQuantity}
                setBasketQuantity={setBasketQuantity}
                basketTotal={basketTotal}
                setBasketTotal={setBasketTotal}
                eventModalVisible={eventModalVisible}
                setEventModalVisible={setEventModalVisible}
            />
        </div>
    )
}