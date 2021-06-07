import React from 'react';

const SearchBlock = (props) => {

    const { setCurrentCity } = props;

    const search = (e) => {

        let value = e.target.parentElement.firstChild.value;
        if (value.length > 0) {

            setCurrentCity(value);
            value = '';

        }

    };

    return (
        <div className='container__search'>
            <input type='search' id='search' placeholder='Enter city ' />
            <button type='button' onClick={(e) => search(e)}>Search
            </button>
        </div>
    );

};
export default SearchBlock;
