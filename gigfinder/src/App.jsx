import './App.css'
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventsPage from "./pages/EventsPage";
import EventPage from "./pages/EventPage";
import MyTickets from "./pages/MyTickets";

function App() {

  const [myTickets, setMyTickets] = useState([]);
  const [basketTotal, setBasketTotal] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EventsPage />} />
        <Route path="/events/:id" element={<EventPage />} />
        <Route path="/mytickets" element={<MyTickets />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
