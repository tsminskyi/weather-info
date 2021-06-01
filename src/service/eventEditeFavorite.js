const eventEditeFavorite = (value, favoriteIndex, setFavoriteСities, favoriteСities) => {

    if (favoriteСities != null && favoriteСities.length > 0) {

        if (favoriteIndex >= 0) {

            const newList = favoriteСities.filter((el) => el.name !== value);
            setFavoriteСities(newList);
            localStorage.setItem('weather-info', JSON.stringify(newList));

        } else {

            const newList = favoriteСities.slice();
            newList.push({ name: value });
            setFavoriteСities(newList);
            localStorage.setItem('weather-info', JSON.stringify(newList));

        }

    } else {

        const newList = new Array({ name: value });
        setFavoriteСities(newList);
        localStorage.setItem('weather-info', JSON.stringify(newList));

    }

};
export default eventEditeFavorite;
