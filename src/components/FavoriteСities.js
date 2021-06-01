import React from 'react';

const FavoriteСities = (props) => {

    const { favoriteСities, setCurrentCity } = props;

    return (
        <div className='container__right'>
            <div>Favorite Сities</div>
            {
                favoriteСities.map((item) => (

                    <button key={item.name} type='button'
                        onClick={() => setCurrentCity(item.name)}>{item.name}
                    </button>

                ))
            }
        </div>
    );

};
export default FavoriteСities;
