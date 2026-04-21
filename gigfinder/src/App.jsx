import './App.css'
import { useState } from "react";
import Header from "./components/Header";
import Main from "./pages/Main";
import EventPage from "./pages/EventPage";
import MyTickets from "./pages/MyTickets";

function App() {

  const [myTickets, setMyTickets] = useState([]);
  const [myTicketsViewActive, setMyTicketsViewActive] = useState(false);
  const [basketTotal, setBasketTotal] = useState(0);
  const [basketViewActive, setBasketViewActive] = useState(false);

  return (
    <>
      <Header
        myTicketsViewActive={myTicketsViewActive}
        setMyTicketsViewActive={setMyTicketsViewActive}
        basketTotal={basketTotal}
        basketViewActive={basketViewActive}
        setBasketViewActive={setBasketViewActive}
      />
      <Main />
    </>
  )
}

export default App
