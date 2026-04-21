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
                <div className="filter-objects">
                    <Filter
                        filters={filters}
                        setFilters={setFilters}
                        field="artist"
                        allText="artists"
                    >
                    </Filter>
                    <Filter
                        filters={filters}
                        setFilters={setFilters}
                        field="city"
                        allText="cities"
                    >
                    </Filter>
                    <Filter
                        filters={filters}
                        setFilters={setFilters}
                        field="genre"
                        allText="genres"
                    >
                    </Filter>
                </div>
                {/*
                <button
                    className="reset-filters-button"
                    onClick={resetFilters}
                >
                    Reset filters
                </button> 
                */}
            </div>
            


        </div>
    )
}