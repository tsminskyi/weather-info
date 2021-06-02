import React from 'react';

const FavoriteСities = (props) => {

    const { favoriteСities, setCurrentCity } = props;

    if (favoriteСities != null) {

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

    }
    return (
        <div className='container__right'>
            <div>Favorite Сities</div>
            <h6>have not added favorite cities yet</h6>
        </div>
    );

};
export default FavoriteСities;
