import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function SearchBar({ setQuery }) {
    return (
            <>
                <form role="search" className="search-bar">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input
                    className="search-bar-input"
                    type="search"
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for artist, city, venue and more..." /> 
                </form>
            </>
    )
}