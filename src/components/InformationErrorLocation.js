import React from 'react';

const InformationErrorLocation = () => {

    return (
        <div className='container__info'>
            <h1>We don`t know where you are.Please enter the city name in the search bar.</h1>
            <h4>Possible reasons:</h4>
            <h5>You have chosen not to provide your location data</h5>
            <h5>There is a network problem or the location service cannot
                be contacted for any other reason.
            </h5>
            <h5>Failed to determine the location within the specified time.</h5>
        </div>
    );

};
export default InformationErrorLocation;
