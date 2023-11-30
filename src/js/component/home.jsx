import React, { useState } from "react";
import Navbar from "./Navbar";
//create your first component

const products = [
  {
    title: "Producto 1",
    content: "Muy bueno",
    price: 10,
    imagen: "https://picsum.photos/200/300",
  },
  {
    title: "Producto 2",
    content: "Muy bueno",
    price: 20,
    imagen: "https://picsum.photos/201/300",
  },
  {
    title: "Producto 3",
    content: "Muy bueno",
    price: 30,
    imagen: "https://picsum.photos/203/300",
  },
  {
    title: "Producto 4",
    content: "Muy bueno",
    price: 40,
    imagen: "https://picsum.photos/204/300",
  },
];

// estados y mutacion de datos
// hooks: Son herramientas de react para el renderizado y manejo de data
// useState: Hook que nos permite usar variables mutables dentro de react

const Home = () => {
  const links = ["Home", "About", "Login"];

  // Estados de react
  // const [valor, funcionQueModifica] = useState(valorInicial)
  const [nombreUsuario, setNombreUsuario] = useState();

  // No de react
  // let nombreUsuario = "Juan";
  const alumnos = [
    "Byron",
    "Moises",
    "Lina",
    "Alexa",
    "Sr. Maruan",
    "Jessica",
    "Juan",
    "Hector",
    "Kevin",
    "Jorge",
    "Miguel",
    "Sonia",
    "Rogelio",
    "Jose",
    "Octavio",
    "Jose M",
  ];
  function ruletaAlumno() {
    const randomIndex = Math.floor(Math.random() * alumnos.length);
    setNombreUsuario(alumnos[randomIndex]);
  }
  return (
    <>
      <Navbar title="Ruleta de Clases" links={links} />
      <main>
        <div className="container">
          <div className="card p-5">
            <h2>El siguiente a la pizarra es:...</h2>
            <h3>{nombreUsuario}</h3>
            <button className="btn btn-success" onClick={() => ruletaAlumno()}>
              Seleccione un alumno para que pase a la pizarra
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
