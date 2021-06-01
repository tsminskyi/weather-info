import React from 'react';

const SearchBlock = (props) => {

    const { setCurrentCity } = props;

    return (
        <div className='container__search'>
            <input type='search' id='search' placeholder='Enter city ' />
            <button type='button' onClick={() => {

                const inputValue = document.querySelector('#search');
                if (inputValue.value.length > 0) {

                    setCurrentCity(inputValue.value);
                    inputValue.value = '';

                }

            }}>Search
            </button>
        </div>
    );

};
export default SearchBlock;
