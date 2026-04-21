import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCircleDot } from "@fortawesome/free-regular-svg-icons";

export default function TicketOption({ ticketOption, activeTicketType, onSelect }) {
    
    const isActive = ticketOption.id === activeTicketType?.id;
    
    return (

        <div
            className={`ticket-option ${isActive ? "option-active" : "option-inactive"}`}
            onClick={() => onSelect(ticketOption)}
        >  
            <div className="ticket-option-left">
                <FontAwesomeIcon
                className={isActive ? "selected-circle-icon" : "unselected-circle-icon"}
                 icon={isActive ? faCircleDot : faCircle}
                />
                <div className="ticket-option-text">
                    <h1 className="ticket-option-title">{ticketOption.title}</h1>
                    <h2 className="ticket-option-description">{ticketOption.description}</h2>
                </div>
            </div>
            <h1 className="ticket-option-price">€{ticketOption.price}</h1>
        </div>    
    )
}