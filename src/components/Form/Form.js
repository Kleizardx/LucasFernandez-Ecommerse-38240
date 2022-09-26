import React from "react";
import { useContext, useState } from "react";
import { firestoreDb } from "../services/firebase/index";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import CartContext from "../Context/CartContext";


const FormBuyer = () => {
  const { cart, getTotal } = useContext(CartContext);
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };


  function addDocToCollection() {
    const collectionRef = collection(firestoreDb, 'user');

    const obUser = {
      items: cart,
      fname: value,
      lname: value,
      phone: value,
      email: 'lucas.fernandez32zs@gmail.com',
      total: getTotal(),
      date: Timestamp.fromDate(new Date()),
    };

    addDoc(collectionRef, obUser).then(response => {
      alert("Compra realizada con exito ID: " + response.id);
    });



  }

  return (
    <>
      <div className="mb-3">
        <form id="contactForm" onSubmit={handleSubmit} >
          <div className="mb-3">
            <label form="fname" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="fname" value={value} onChange={handleChange} placeholder="Nombre" />
          </div>
          <div className="mb-3">
            <label form="lname" className="form-label">Apellido</label>
            <input type="text" className="form-control" id="lname" value={value} onChange={handleChange} placeholder="Apellido" />
          </div>
          <div className="mb-3">
            <label form="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="emailBuyer" aria-describedby="emailHelp" placeholder="Email@" />
            <div id="emailHelp" className="form-text">Indicar el Email del comprador</div>
          </div>
          <div className="mb-3">
            <label form="tel" className="form-label">Telefono</label>
            <input type="number" className="form-control" id="tel" />
          </div>
          <button type="submit" className="btn btn-primary" id="submit" onClick={() => addDocToCollection([])}>Generar Orden</button>
        </form>
      </div>
    </>
  )

}

export default FormBuyer;
