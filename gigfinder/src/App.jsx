import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventsPage from "./pages/EventsPage";
import EventPage from "./pages/EventPage";
import MyTickets from "./pages/MyTickets";

function App() {
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
