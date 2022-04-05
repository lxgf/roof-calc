import React from 'react';
import stepsStyle from '../assets/styles/steps.module.css'

const Step = ({index, isShowed, children, setStep}) => {
    const title = 'Выберите тип кровли'

    return (
        <div className={stepsStyle.step + ' ' + (isShowed ? stepsStyle.showed : '')}>
            <button
                className={stepsStyle.header}
                onClick={() => {
                    if (isShowed)
                        setStep(null)
                    else
                        setStep(index)
                }}
            >
                <p className={stepsStyle.headerText}>
                    {index+1}. {title}
                </p>
                <div className={stepsStyle.headerBtn} />
            </button>
            {isShowed && children}
        </div>
    );
};

export default Step;
