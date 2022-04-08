import React, {useEffect, useState} from 'react';
import sizeStepStyle from '../../assets/styles/sizeStep.module.css'
import lengthIcon from '../../assets/images/icons/select/l-size.svg'
import widthIcon from '../../assets/images/icons/select/w-size.svg'

const SizeStep = ({changePreview, returnData}) => {
    const [sideStatues, setSideStatuses] = useState([false, false])
    const [data, setData] = useState({width: '', length: ''})
    
    useEffect(() => {
        if (data.length > 0 && data.width > 0)
        returnData(data)
    }, [data, returnData])

    return (
        <div className={sizeStepStyle.main}>
            <div className={sizeStepStyle.leftPart}>
                <div className={sizeStepStyle.fields}>
                    <label className={sizeStepStyle.field + ' ' + (sideStatues[0] ? sizeStepStyle.active : '')}>
                        <div className={sizeStepStyle.fieldIcon + ' ' + sizeStepStyle.fieldIcon_a + ' ' + (sideStatues[0] ? sizeStepStyle.active : '')} />
                        <p className={sizeStepStyle.fieldRight}>
                            <span className={sizeStepStyle.fieldText}>
                                Ширина ската, м
                            </span>
                            <input className={sizeStepStyle.fieldInput + ' ' + (data.width.length > 0 ? sizeStepStyle.filled : '')} type="number"
                                value={data.width}
                                onChange={
                                   e => setData(prevState => ({
                                       ...prevState,
                                       width: e.target.value
                                   }))
                                }
                                onFocus={
                                    () => {
                                        setSideStatuses(prevState => [true, prevState[1]])
                                        changePreview('width')
                                    }
                                }
                               onBlur={
                                   () => {
                                       setSideStatuses(prevState => [false, prevState[1]])
                                   }
                               }
                            />
                        </p>
                    </label>

                    <label className={sizeStepStyle.field + ' ' + (sideStatues[1] ? sizeStepStyle.active : '')}>
                        <div className={sizeStepStyle.fieldIcon + ' ' + sizeStepStyle.fieldIcon_b + ' ' + (sideStatues[1] ? sizeStepStyle.active : '')} />
                        <p className={sizeStepStyle.fieldRight}>
                            <span className={sizeStepStyle.fieldText}>
                                Длина ската, м
                            </span>
                            <input className={sizeStepStyle.fieldInput + ' ' + (data.length.length > 0 ? sizeStepStyle.filled : '')} type="number"
                                   value={data.length}
                                   onChange={
                                       e => setData(prevState => ({
                                            ...prevState,
                                            length: e.target.value
                                       }))
                                   }
                                   onFocus={
                                       () => {
                                           setSideStatuses(prevState => [prevState[0], true])
                                           changePreview('length')
                                       }
                                   }
                                   onBlur={
                                       () => {
                                           setSideStatuses(prevState => [prevState[0], false])
                                       }
                                   }
                            />
                        </p>
                    </label>
                </div>

                <button className={sizeStepStyle.info}
                onClick={
                    () => {
                        alert(
                            'Произведите замер и внесите данные. Если конструкция кровли сложная, ' +
                            'то ее разбивают на отдельные плоскости и замеряют все расстояния для раскроя материала и геометрического построения. ' +
                            'При расчете особое внимание следует уделить не площади крыши, а размеру каждого ската.')
                    }
                }
                >
                    Как правильно делать замеры
                </button>
            </div>
            <div className={sizeStepStyle.rightPart}>
                <img src={sideStatues[1] ? lengthIcon : widthIcon} alt='preview' className={sizeStepStyle.icon}/>
            </div>
        </div>
    );
};

export default SizeStep;