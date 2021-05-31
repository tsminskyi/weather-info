import React from 'react';

const FavoriteСities = (props) => {

    const { favoriteСities, setCurrentCity } = props;

    return (
        <div className='container__right'>
            {
                favoriteСities.map((item) => (

                    <button type='button' onClick={() => setCurrentCity(item.name)}>{item.name}</button>

                ))
            }
        </div>
    );

};
export default FavoriteСities;
