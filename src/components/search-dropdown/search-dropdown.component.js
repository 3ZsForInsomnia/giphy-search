import React from "react";
import "./search-dropdown.styles.css";

const SearchDropdown = ({previousSearchTerms, searchAgain}) => {
    return <div className="search-dropdown">
        {
            (previousSearchTerms.length > 0)
            ? <ul className="search-dropdown__list">
                {
                    previousSearchTerms.map((search, index) => {
                        return <li key={index}
                            className="search-dropdown__search"
                            onClick={() => searchAgain(search)}
                        >
                            <span>{search}</span>
                        </li>
                    })
                }
            </ul>
            : ""
        }
    </div>
}

export default SearchDropdown;
