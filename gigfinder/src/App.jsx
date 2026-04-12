import { useState } from 'react'
import './App.css'
import Header from "./components/Header";
import EventCard from "./components/EventCard";
import events from "./data/eventData";

function App() {
 
  const allEvents = events.map(e =>
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
    />
  );

  return (
    <>
      <Header />
      <div className="events-container">{allEvents}</div>
    </>
  )
}

export default App
