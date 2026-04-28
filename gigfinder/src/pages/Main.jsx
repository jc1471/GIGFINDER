import { useState, useEffect } from 'react'
import Header from "../components/Header";
import Hero from "../components/Hero";
import FilterSection from "../components/FilterSection";
import SearchResultsHeader from "../components/SearchResultsHeader";
import EventCard from "../components/EventCard";
import events from "../data/eventData";
import useFilter from "../hooks/useFilterListByString";
import EventModal from "../components/EventModal";
import EventsList from "../components/EventsList";


export default function Main({ basket, setBasket, eventModalVisible, setEventModalVisible }) {

    // States

    const [addToBasketQuantity, setAddToBasketQuantity] = useState(2);
    const [query, setQuery] = useState("");
    const [filters, setFilters] = useState({
        artist: "",
        city: "",
        genre: "",
    });
    const [quantityCurrentSearchItems, setQuantityCurrentSearchItems] = useState(0);
    const [selectedEvent, setSelectedEvent] = useState(events[0]);
    const [artistData, setArtistData] = useState(null);
    const [myTickets, setMyTickets] = useState([]);
    const [loading, setLoading] = useState(true);


    {/*
    // Artist photo LASTFM API call
    const [artistsMainPhoto, setArtistsMainPhoto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const uniqueArtists = [...new Set(events.map(event => event.artist))];
        const fetchAllArtistsPhoto = async () => {
            setLoading(true);
            try {
                const results = await Promise.all(
                    uniqueArtists.map(artist =>
                        fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=${import.meta.env.VITE_LASTFM_API_KEY}&format=json`)
                            .then(res => res.json())
                    )
                );
                
                console.log("results 0: ", results[0]);

                const photosMap = {};
                results.forEach((result, index) => {
                    const name = uniqueArtists[index];
                    console.log("name ", index, name);
                    const image = result.artist.image[0]["#text"];
                    console.log("image ", index, image);
                    photosMap[name] = image;
                });
                setArtistsMainPhoto(photosMap);

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchAllArtistsPhoto();
        console.log("artist photos: ", artistsMainPhoto);
    }, []);
    */}

    // console log
    useEffect(() => {
        console.log("eventModalVisble: ", eventModalVisible);
        console.log("selectedEvent: ", selectedEvent);
        console.log("artist data: ", artistData);
    }, [eventModalVisible]);
    
    // Functions

    const handleOpenEventModal = (event) => {
        setArtistData(null);
        setLoading(true);
        setSelectedEvent(event);
        setEventModalVisible(true);
    }

    const filteredEvents = events.filter(event => {
        /* Search */
        const matchesQuery =
            !query ||
            ["artist", "city", "genre"].some(field => {
                const value = event[field];
                if (!value) return false;

                return value.toLowerCase().includes(query.toLowerCase());
           });    
    
        const matchesFilters = Object.entries(filters).every(([field, value]) => {
            if (!value || value === "all") return true;

            return event[field] === value;
        });
        return matchesQuery && matchesFilters;
    });


    return (
        <div className="main">
            <Hero />
            <FilterSection
                setQuery={setQuery}
                filters={filters}
                setFilters={setFilters}
            />
            <SearchResultsHeader
                quantityCurrentSearchItems={filteredEvents.length}
            />
            <div className="events-list">
                <EventsList   
                    filteredEvents={filteredEvents}
                    addToBasketQuantity={addToBasketQuantity}
                    setAddToBasketQuantity={setAddToBasketQuantity}
                    basket={basket}
                    setBasket={setBasket}
                    selectedEvent={selectedEvent}
                    handleOpenEventModal={handleOpenEventModal}
                />
            </div>
            <EventModal
                event={selectedEvent}
                addToBasketQuantity={addToBasketQuantity}
                setAddToBasketQuantity={setAddToBasketQuantity}
                basket={basket}
                setBasket={setBasket}
                eventModalVisible={eventModalVisible}
                setEventModalVisible={setEventModalVisible}
                artistData={artistData}
                setArtistData={setArtistData}
                loading={loading}
                setLoading={setLoading}
            />
        </div>
    )
}