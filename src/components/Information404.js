import React from 'react';

const Information404 = (props) => {
    
    const { weatherInformation } = props;

    return (
        <div className='container__info'>
            <h1>{weatherInformation.cod}</h1>
            <p>{weatherInformation.message}</p>
        </div>
    );

};
export default Information404;
