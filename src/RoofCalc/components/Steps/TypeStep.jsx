import React, {useState} from 'react';
import typeStepStyle from '../../assets/styles/typeStepStyle.module.css'

const TypeStep = ({changePreview}) => {
    const items = []

    const titles = [
        {
            main: 'valma',
            display: 'Вальмовая'
        },
        {
            main: 'gable',
            display: 'Двускатная'
        },
        {
            main: 'mansard',
            display: 'Мансардная'
        },
        {
            main: 'with-window',
            display: 'С окном'
        },
        {
            main: 'marquee',
            display: 'Шатровая'
        }
    ]

    const [activeItem, setActiveItem] = useState()

    titles.forEach(title => {
        const image = require('../../assets/images/icons/select/' + title.main + '.svg')
        items.push({name: title.main, displayName: title.display, image: image})
    })

    return (
        <div className={typeStepStyle.selector}>
            {items.map((item, key) =>
                <button
                    key={key}
                    className={typeStepStyle.item + ' ' + (activeItem === key ? typeStepStyle.active : '')}
                    onClick={
                        () => {
                            setActiveItem(key)
                            changePreview(item.name)
                        }
                    }
                >
                    <img className={typeStepStyle.itemImage} src={item.image}  alt={item.name}/>
                    <p className={typeStepStyle.itemTitle}>
                        {item.displayName}
                    </p>
                </button>
            )}
        </div>
    );
};

export default TypeStep;
