import React, { useState, useEffect } from "react";

function PizzaForm({ pizza, api, updatePizza }) {
  const [formData, setFormData] = useState({})

  useEffect(() => {
    setFormData(pizza)
  }, [pizza])

  function handleSubmit(e) {
    e.preventDefault()
    fetch(`${api}/${formData.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(r => r.json())
      .then(data => updatePizza(data))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={formData.topping}
            onChange={e => setFormData({ ...formData, topping: e.target.value })}
          />
        </div>
        <div className="col">
          <select
            className="form-control"
            name="size"
            value={formData.size}
            onChange={e => setFormData({ ...formData, size: e.target.value })}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              onChange={e => setFormData({ ...formData, vegetarian: true })}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              onChange={e => setFormData({ ...formData, vegetarian: false })}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
