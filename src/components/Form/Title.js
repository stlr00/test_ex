import React from "react";

function Title({title, setTitle, classes, setClasses}) {
    const titleChange = (event) => {
        const val = event.target.value
        if(val.length <=140) {
            setTitle(val)
            setClasses('form-control')
        }
        if (val.trim().length === 0) {
            setClasses('form-control is-invalid')
        }
    }

    return (
        <div className="col">
            <div className="form-group">
                <label htmlFor="title">Заголовок</label>
                <input
                    className={classes}
                    type="text"
                    id="title"
                    value={title}
                    onChange={titleChange}
                />
                <div className="invalid-feedback">
                    Заголовок обязателен
                </div>
            </div>
        </div>

    )
}

export default Title
