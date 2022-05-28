import React, { useState } from "react";
import { postUsuario } from "../helpers/usuarios";
import perfil from "../img/perfil.jpg";
import Swal from "sweetalert2";

const RegScreen = () => {
  const [formValue, setFormValue] = useState({
    nombre: "",
    email: "",
    password: "",
    rol: "",
  });
  const limpiarCampos = () => {
    setFormValue({
      nombre: "",
      email: "",
      password: "",
      rol: "",
    });
  };

  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    postUsuario(formValue).then((respuesta) => {
      if (respuesta.errors) {
        return Swal.fire({
          icon: "error",
          title: "Error",
          text: respuesta.errors[0].msg,
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "OK",
          text: `El usuario ${formValue.nombre} fue creado`,
        });
      }
      limpiarCampos();
    });
  };

  
  return (
    <div className="container d-flex flex-column align-items-center">
      <div className="row d-flex align-items-center">
        <div className="col-6 mt-5">
          <form className="d-flex flex-column" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">
                Nombre de Usuario
              </label>
              <input
                type="text"
                name="nombre"
                className="form-control"
                placeholder=""
                required
                value={formValue.nombre}
                onChange={handleChange}
              />
              <label className="form-label">
                Correo electronico
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                value={formValue.mial}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label  className="form-label">
                Password
              </label>
              <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={formValue.password}
                    onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary" onClick={()=>postUsuario({})}>
              Registrar
            </button>
          </form>
        </div>
        <div className="col">
          <img src={perfil} className="card-img-top" alt="imagen de noticia" />
        </div>
      </div>
    </div>
  );
};

export default RegScreen;
