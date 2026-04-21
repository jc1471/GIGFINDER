import './App.css'
import { useState } from "react";
import Header from "./components/Header";
import Main from "./pages/Main";
import EventPage from "./pages/EventPage";
import MyTickets from "./components/MyTickets";
import Basket from "./components/Basket";

function App() {

  const [myTickets, setMyTickets] = useState([]);
  const [myTicketsViewActive, setMyTicketsViewActive] = useState(false);
  const [basket, setBasket] = useState([]);
  const [basketViewActive, setBasketViewActive] = useState(false);
  const [eventModalVisible, setEventModalVisible] = useState(false);

  return (
    <>
      <Header
        myTicketsViewActive={myTicketsViewActive}
        setMyTicketsViewActive={setMyTicketsViewActive}
        basket={basket}
        basketViewActive={basketViewActive}
        setBasketViewActive={setBasketViewActive}
        myTickets={myTickets}
      />
      <Basket
        basketViewActive={basketViewActive}
        setBasketViewActive={setBasketViewActive}
        basket={basket}
        setBasket={setBasket}
        setMyTickets={setMyTickets}
        setEventModalVisible={setEventModalVisible}
      />
      <MyTickets
        myTickets={myTickets}
        myTicketsViewActive={myTicketsViewActive}
        setMyTicketsViewActive={setMyTicketsViewActive}
        setEventModalVisible={setEventModalVisible}
      />
      <Main
        basket={basket}
        setBasket={setBasket}
        eventModalVisible={eventModalVisible}
        setEventModalVisible={setEventModalVisible}
      />
    </>
  )
}

export default App
