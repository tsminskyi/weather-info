import React from 'react';

const SearchBlock = (props) => {

    const { setCurrentCity } = props;

    return (
        <div className='container__search'>
            <input type='search' placeholder='Enter city ' />
            <button type='button' onClick={() => {

                setCurrentCity(document.querySelector('input').value);
                document.querySelector('input').value = '';

            }}>Search
            </button>
        </div>
    );

};
export default SearchBlock;
