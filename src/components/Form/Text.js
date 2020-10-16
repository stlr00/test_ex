import React from "react";

function Text({text, setText}) {
    const textChange = (event) => {
        const val = event.target.value
        if (val.length <= 300) {
            setText(val)
        }
    }

    return (
        <div className="col">
            <div className="form-group">
                <label htmlFor="text">
                    Текст обращения
                </label>
                <textarea
                    className="form-control"
                    id="text"
                    rows="5"
                    onChange={textChange}
                    value={text}
                />
                <div className="invalid-feedback">
                    Текст должен содержать меньше 300 символов
                </div>
            </div>
        </div>
    )
}

export default Text
