export default function useFilter(events, query, fields) {
    if (!query) return events;

    const normalisedQuery = query.toLowerCase();

    const filteredList = events.filter(event => {
        return fields.some(field => {
            const value = event[field];

            if (!value) return false;

            return value.toString().toLowerCase().includes(normalisedQuery);
        });
    });

    return filteredList;

}