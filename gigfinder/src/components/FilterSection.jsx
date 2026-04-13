import SearchBar from "./SearchBar";
import Filter from "./Filter";

export default function FilterSection({ setQuery, filters, setFilters }) {    

    const resetFilters = () => {
        setFilters({
            artist: "all",
            city: "all",
            genre: "all",
        });
    };

    return (
        <div className="filter-section">
            <SearchBar
                setQuery={setQuery}
                    />
            <div className="filter-by">
                <h1>Or filter by..</h1>
                <div className="filter-objects">
                    <Filter
                        filters={filters}
                        setFilters={setFilters}
                        field="artist"
                    >
                        Artist
                    </Filter>
                    <Filter
                        filters={filters}
                        setFilters={setFilters}
                        field="city"
                    >
                        City
                    </Filter>
                    <Filter
                        filters={filters}
                        setFilters={setFilters}
                        field="genre"
                    >
                        Genre
                    </Filter>
                </div>
                <button
                    className="reset-filters-button"
                    onClick={resetFilters}
                >
                    Reset filters
                </button>
            </div>
            


        </div>
    )
}