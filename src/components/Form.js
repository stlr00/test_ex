import React, {useState} from "react";
import {connect} from 'react-redux'
import Title from "./Form/Title";
import Number from "./Form/Number";
import City from "./Form/City";
import Text from "./Form/Text";
import {createAd} from "../redux/actions";

function Form({createAd}) {
    const initialClass = 'form-control'
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [number, setNumber] = useState('+7 (xxx) xxx-xx-xx')
    const [city, setCity] = useState('')
    const [titleClass, setTitleClass] = useState(initialClass)
    const [numberClass, setNumberClass] = useState(initialClass)


    const reset = async (e) => {
        e.preventDefault()
        await setNumber('+7 (xxx) xxx-xx-xx')
        setTitle('')
        setText('')
        setCity('')
        setTitleClass(initialClass)
        setNumberClass(initialClass)
    }

    const submit = async (e) => {
        e.preventDefault()
        if (title === '') {
            setTitleClass(initialClass + ' is-invalid')
        } else if (number[17] === 'x') {
            setNumberClass(initialClass + ' is-invalid')
        } else {
            createAd({
                id: Date.now(),
                title,
                text,
                number,
                city
            })
            await setNumber('+7 (xxx) xxx-xx-xx')
            setTitle('')
            setText('')
            setCity('')
            setTitleClass(initialClass)
            setNumberClass(initialClass)
        }
    }

    return (
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            Добавление нового объявления
                        </h4>
                        <h6 className="text-muted card-subtitle mb-2">
                            Здесь вы можете добавить новое объявление:
                        </h6>
                        <form noValidate>
                            <div className="form-row">
                                <Title title={title} setTitle={setTitle} classes={titleClass} setClasses={setTitleClass}/>
                                <Number number={number} setNumber={setNumber} numberClass={numberClass} setNumberClass={setNumberClass}/>
                                <City city={city} setCity={setCity}/>
                            </div>
                            <div className="form-row">
                                <Text text={text} setText={setText}/>
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    <button className="btn btn-success btn-lg mr-3" onClick={submit}>Отправить</button>
                                    <button className="btn btn-danger btn-lg" onClick={reset}>Сбросить</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    createAd
}

export default connect(null, mapDispatchToProps) (Form)
