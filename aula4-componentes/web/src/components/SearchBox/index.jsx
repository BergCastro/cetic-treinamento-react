import React from 'react'

const SearchBox = () => {
    return(
        <div>
            <h5>Pesquisar</h5>
            <div>
            <div>
                <input type="text" placeholder="Search for..." />
                <span>
                <button type="button">Ir!</button>
                </span>
            </div>
            </div>
        </div>
    )
}
export default SearchBox