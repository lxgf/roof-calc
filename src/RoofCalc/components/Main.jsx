import React, {useState} from 'react';
import mainStyle from '../assets/styles/main.module.css'
import requirePreviews from "../assets/scripts/requirePreviews";
import Step from "./Step";
import TypeStep from "./Steps/TypeStep";
import SizeStep from "./Steps/SizeStep";

const Main = () => {
    const previews = requirePreviews()
    const [activePreview, setActivePreview] = useState('none')

    const getPreviewPath = title => {
        return previews.find(preview => preview.title === title).path
    }

    const [step, setStep] = useState(0)

    let index = 0

    const [allData, setAllData] = useState({})

    const addData = data => {
        let newData = {...allData}
        for (const [key, value] of Object.entries(data)) {
            newData[key] = value
        }
        setAllData(newData)
    }

    return (
        <div className={mainStyle.container}>
            <main className={mainStyle.main}>
                <div className={mainStyle.firstPart}>
                    <div className={mainStyle.title}>
                        Калькулятор кровли
                    </div>
                    <div className={mainStyle.steps}>
                        <Step index={index++} title={'Выберите тип кровли'} setStep={setStep} isShowed={step === index-1}>
                            <TypeStep changePreview={setActivePreview} returnData={addData} />
                        </Step>

                        <Step index={index++} title={'Введите размеры для рассёта'} setStep={setStep} isShowed={step === index-1}>
                            <SizeStep changePreview={setActivePreview} returnData={addData} />
                        </Step>
                    </div>
                    {
                        typeof step === 'number' &&
                            <button
                                className={mainStyle.stepBtn}
                                onClick={
                                    () => {
                                        if (step+1 === index)
                                            alert('final')
                                        else
                                            setStep(prevState => (prevState+1))
                                    }
                                }
                            >
                                {
                                    step+1 === index ?
                                        <>Показать расчёт</>
                                    :
                                        <>Следующий шаг: {step+1} из {index}</>
                                }
                            </button>
                    }
                </div>
                <div className={mainStyle.secondPart}>
                    <img className={mainStyle.preview} src={getPreviewPath(activePreview)} alt="preview"/>
                </div>
            </main>
        </div>
    );
};

export default Main;
