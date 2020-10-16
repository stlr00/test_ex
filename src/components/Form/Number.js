import React from "react";
import NumberFormat from 'react-number-format';

function Number({number, setNumber, numberClass, setNumberClass}) {
    const numberChanges = ({formattedValue}) => {
        setNumber(formattedValue)
        if (formattedValue[17] === 'x') {
            setNumberClass('form-control is-invalid')
        } else {
            setNumberClass('form-control')
        }
    }

    return (
        <div className="col">
            <div className="form-group">
                <label htmlFor="tel">Телефон</label>
                <NumberFormat
                    className={numberClass}
                    id="tel"
                    type="tel"
                    value={number}
                    onValueChange={numberChanges}
                    format="+7 (###) ###-##-##"
                    mask="x"
                    allowEmptyFormatting
                />
                <div className="invalid-feedback">
                    Номер обязателен
                </div>
            </div>
        </div>
    )
}

export default Number
