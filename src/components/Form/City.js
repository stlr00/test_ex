import React from "react";

function City({city, setCity}) {
    return (
        <div className="col">
            <div className="form-group">
                <label htmlFor="city">Город</label>
                <select
                    className="form-control"
                    id="city"
                    value={city}
                    onChange={e=> setCity(e.target.value)}
                >
                    <option value="">Выберете город (необязательно)</option>
                    <option value="Москва">Москва</option>
                    <option value="Санкт-Петербург">Санкт-Петербург</option>
                    <option value="Казань">Казань</option>
                    <option value="Нижний Новгород">Нижний Новгород</option>
                </select>
            </div>
        </div>
    )
}

export default City
