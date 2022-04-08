import React from 'react';
import stepsStyle from '../assets/styles/steps.module.css'

const Step = ({index, isShowed, title, children, setStep}) => {
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
            <div className={stepsStyle.hidingArea + ' ' + (isShowed ? stepsStyle.showed : '')}>
                {children}
            </div>
        </div>
    );
};

export default Step;
