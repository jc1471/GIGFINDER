import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function SearchBar({ setQuery }) {
    
    const handleKeywordSearch = (e) => {
        setQuery(e.target.value)
    };
    
    return (
            <>
                <form role="search" className="search-bar">
                    <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
                <input
                    className="search-bar-input"
                    type="search"
                    onChange={handleKeywordSearch}
                    placeholder="Search by keyword.." /> 
                </form>
            </>
    )
}