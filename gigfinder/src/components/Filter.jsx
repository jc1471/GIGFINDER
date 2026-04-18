import events from "../data/eventData";

export default function Filter({ filters, setFilters, field }) {

    const options = [...new Set(events.map(event => event[field]))];
    const optionsSorted = options.sort((a, b) =>
        a.localeCompare(b)
    );

    const updateFilter = (e) => setFilters(prev => ({
                    ...prev,
                    [field]: e.target.value
                }))

    return (
        <div className="filter"> 
            <h1 className="filter-title">
            {field}
            </h1>
            <select
                value={filters[field] || field}
                onChange={updateFilter}
            >

                <option value="all">All</option>
            
                {optionsSorted.map((option) => {
                    return (
                        <option
                            key={option}
                            value={option}>
                            {option}
                        </option>
                )})}
            </select> 
        </div>
    )
}