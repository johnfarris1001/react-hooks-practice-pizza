import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([])
  const [editPizza, setEditPizza] = useState({})

  const API = 'http://localhost:3001/pizzas'

  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(data => setPizzas(data))
  }, [])

  function onEditPizza(pizza) {
    setEditPizza(pizza)
  }

  function handleUpdatePizza(pizza) {
    setPizzas(pizzas.map(item => {
      if (item.id === pizza.id) {
        return pizza
      } else {
        return item
      }
    }))
  }

  return (
    <>
      <Header />
      <PizzaForm pizza={editPizza} api={API} updatePizza={handleUpdatePizza} />
      <PizzaList pizzas={pizzas} handleEdit={onEditPizza} />
    </>
  );
}

export default App;
