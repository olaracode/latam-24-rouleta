import React from "react";
import PropTypes from "prop-types"; // Tipos de datos

const Card = ({ title, imagen, content, price }) => {
  return (
    <div className="card">
      <img src={imagen} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title fs-1">{title}</h5>
        <p className="card-text">{content}</p>
        <a href="#" className="btn btn-primary">
          Comprar {price}$
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  imagen: PropTypes.string,
  content: PropTypes.string,
  price: PropTypes.number,
};

export default Card;
