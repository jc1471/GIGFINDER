import EventCard from "./EventCard";

export default function EventsList({ filteredEvents, addToBasketQuantity, setAddToBasketQuantity, basket, setBasket, selectedEvent, handleOpenEventModal } ) {
    return (
        filteredEvents.map(event =>
            <EventCard
                key={event.id}
                event={event}
                addToBasketQuantity={addToBasketQuantity}
                setAddToBasketQuantity={setAddToBasketQuantity}
                basket={basket}
                setBasket={setBasket}
                selectedEvent={selectedEvent}
        
                handleOpenEventModal={handleOpenEventModal}

            />
            )
        )
}