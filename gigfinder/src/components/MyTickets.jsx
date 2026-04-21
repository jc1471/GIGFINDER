export default function MyTickets({ myTickets, myTicketsViewActive, setMyTicketsViewActive, setEventModalVisible }) {
    return (
        <>
            {myTicketsViewActive && (
                <div className="my-tickets">
                    <h1 className="my-tickets-title">My Tickets</h1>
                    <div className="my-ticket-items-container">
                    {myTickets.map((t, i) => (
                        <h3
                            className="my-tickets-item"    
                            key={i}
                        >{t.event.artist} | {t.ticketType} x {t.quantity}</h3>
                    ))}
                    </div>
                </div> 
            )}
        </>
    )
}