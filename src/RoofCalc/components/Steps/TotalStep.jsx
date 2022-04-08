import React from 'react';
import totalStepStyle from '../../assets/styles/totalStep.module.css'
import prices from '../../assets/data/prices.json'

const TotalStep = ({data}) => {
    const getPrice = goodName => {
        const good = prices.find(good => good.name === goodName)
        if (good)
            return good.price
    }

    return (
        <div className={totalStepStyle.main}>
            {Object.keys(data).map((fieldName, key) =>
                <div key={key} className={totalStepStyle.row}>
                    <p>{fieldName}</p>
                    <p>{getPrice(data[fieldName])}</p>
                    <p>{data[fieldName]}</p>
                </div>
            )}
        </div>
    );
};

export default TotalStep;
