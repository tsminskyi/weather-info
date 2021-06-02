const eventEditeFavorite = async (value, favoriteIndex, favoriteСities) => {

    let newList = null;
    if (favoriteСities != null && favoriteСities.length > 0) {

        if (favoriteIndex >= 0) {

            newList = await favoriteСities.filter((el) => el.name !== value);
            localStorage.setItem('weather-info', JSON.stringify(newList));

        } else {

            newList = favoriteСities.slice();
            await newList.push({ name: value });
            localStorage.setItem('weather-info', JSON.stringify(newList));

        }

    } else {

        newList = await new Array({ name: value });
        localStorage.setItem('weather-info', JSON.stringify(newList));

    }
    return newList;

};
export default eventEditeFavorite;
