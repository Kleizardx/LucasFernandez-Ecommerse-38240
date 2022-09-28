import React from "react";
import { useContext, useState } from "react";
import { firestoreDb } from "../services/firebase/index";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import CartContext from "../Context/CartContext";


function FormBuyer() {
  const { cart, getTotal } = useContext(CartContext);
  const [detail, setDetail] = useState({
    fname: "",
    lname: "",
    email: "",
    tel: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetail((prev) => {
      return {...prev, [name]: value}
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(detail)
  };
  
  function addDocToCollection() {
    const collectionRef = collection(firestoreDb, 'user');

    const userBuy = {
      items: cart,
      fname: detail.fname,
      lname: detail.lname,
      email: detail.email,
      tel: detail.tel,
      total: getTotal(),
      date: Timestamp.fromDate(new Date()),
    };

    addDoc(collectionRef, userBuy).then(response => {
      alert("Compra realizada con exito ID: " + response.id);
    });

  }


  return (
    <>
      <div className="mb-3">
        <form id="contactForm" onSubmit={handleSubmit} >
          <div className="mb-3">
            <label form="fname" className="form-label">Nombre</label>
            <input type="text" name="fname" className="form-control" onChange={handleChange} placeholder="Nombre" />
          </div>
          <div className="mb-3">
            <label form="lname" className="form-label">Apellido</label>
            <input type="text" name="lname" className="form-control" onChange={handleChange} placeholder="Apellido" />
          </div>
          <div className="mb-3">
            <label form="email" className="form-label">Email</label>
            <input type="email" name="email" className="form-control" onChange={handleChange} aria-describedby="emailHelp" placeholder="Email@" />
          </div>
          <div className="mb-3">
            <label form="tel" className="form-label">Telefono</label>
            <input type="number" name="tel" className="form-control" onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary" onClick={() => addDocToCollection([])}>Generar Orden</button>
        </form>
      </div>
    </>
  )
}

export default FormBuyer;
