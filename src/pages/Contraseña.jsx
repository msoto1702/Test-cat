import React from "react";
import perfil from "../img/perfil.jpg";

const Contraseña = () => {
  return (
    <div className="container d-flex flex-column align-items-center">
      <div className="row d-flex align-items-center">
        <div className="col">
          <h1>¿Olvidaste tu contraseña?</h1>
          <br />
          <h3>Ingresa tu Correo para recuperarla</h3>
          <label for="exampleInputEmail1" className="form-label">
            Correo electronico asociado a tu cuenta
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <button type="submit" className="btn btn-primary mt-2">
            Submit
          </button>
        </div>
        <div className="col">
          <img src={perfil} className="card-img-top" alt="imagen de noticia" />
        </div>
      </div>
    </div>
  );
};

export default Contraseña;
