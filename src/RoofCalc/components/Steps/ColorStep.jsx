import React, {useEffect, useState} from 'react';
import colorStepStyle from '../../assets/styles/colorStep.module.css'

const ColoStep = ({changePreview, returnData}) => {
    const colors = [
        {
            name: 'white',
            displayMame: 'Белый',
            hex: '#fff'
        },
        {
            name: 'light-blue',
            displayMame: 'Голубой',
            hex: '#9FCDFF'
        },
        {
            name: 'yellow',
            displayMame: 'Жёлтый',
            hex: '#FBFF78'
        },
        {
            name: 'green',
            displayMame: 'Зелёный',
            hex: '#C2FF78'
        },
        {
            name: 'red',
            displayMame: 'Красный',
            hex: '#FF4C4C'
        },
        {
            name: 'orange',
            displayMame: 'Оранжевый',
            hex: '#FFB64C'
        },
        {
            name: 'black',
            displayMame: 'Чёрный',
            hex: '#000'
        }
    ]

    const [activeColor, setActiveColor] = useState()

    useEffect(() => {
        activeColor && returnData({color: activeColor})
    }, [activeColor, colors, returnData])

    return (
        <div className={colorStepStyle.main}>
            {colors.map((color, key) =>
                <button
                    key={key}
                    className={colorStepStyle.color + ' ' + (activeColor === color.name ? colorStepStyle.active : '')}
                    onClick={() => {
                        setActiveColor(color.name)
                        changePreview(color.name)
                    }}
                >
                    <div className={colorStepStyle.colorIcon} style={{background: color.hex}}/>
                    <p className={colorStepStyle.colorName}>{color.displayMame}</p>
                    <p className={colorStepStyle.colorHex}>{color.hex}</p>
                </button>
            )}
        </div>
    );
};

export default ColoStep;
