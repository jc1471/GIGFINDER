export default function SearchResultsHeader({ quantityCurrentSearchItems }){
    return (
        <div className="search-results-header">
            {quantityCurrentSearchItems == 1 ?
                (<h2 className="gigs-found"><span className="search-items-number">{quantityCurrentSearchItems}</span> gig found</h2>)
                :
                (<h2 className="gigs-found"><span className="search-items-number">{quantityCurrentSearchItems}</span> gigs found</h2>)
            }
            {/*<h3 className="results-shown"></h3>*/}
        </div>
)}