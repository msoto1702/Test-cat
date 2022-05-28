import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/logo.jpg";
import { postAuth } from "../helpers/auth";
import { useEffect } from "react";

const LoginSreen = () => {
  const isMounted = useRef(true);

  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    correo: "",
    password: "",
  });
  const [btnDisable, setBtnDisable] = useState(false);

  const [login, setLogin] = useState({});

  useEffect(() => {
    if (login.token) {
      localStorage.setItem("auth", JSON.stringify(login));
      setTimeout(() => {
        navigate("/noticias");
      }, 1000);
    }
  }, [login, navigate]);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleChange = ({ target }) => {
    setFormValue({
      ...formValue,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { correo, password } = formValue;

    if (correo && password) {
      setBtnDisable(true);
      if (isMounted.current) {
        postAuth(formValue).then((respuesta) => {
          setLogin(respuesta);

          setBtnDisable(false);

          setFormValue({
            correo: "",
            password: "",
          });
        });
      }
    }
  };
  return (
    <div className="container">
      <div className="row card-login justify-content-center">
        <div className="col-12 col-md-5">
          <div className="card">
            <div className="d-flex justify-content-center py-3 bg-light">
              <img src={logo} alt="logo" className="card-img-top" />
            </div>
            <div className="card-body align-items-center flex-column ">
              <h5 className="card-title text-center">Inicio de Sesion</h5>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3 ">
                  <label>
                    <b>Correo electronico</b>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="correo"
                    value={formValue.correo}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <label>
                    <b>Contraseña</b>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={formValue.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-flex justify-content-center ">
                  <div className="d-grid gap-1">
                    <button className="btn btn-primary" disabled={btnDisable}>
                      <i className="fa fa-sign-in" aria-hidden="true"></i>
                      Ingresar
                    </button>
                  </div>
                  <Link className="btn btn-primary" to="/password">
                    ¿Olvidaste tu contraseña?
                  </Link>
                  <Link className="btn btn-primary" to="/reg">
                    Registrate
                  </Link>
                </div>
                {login?.msg && (
                  <div
                    className="alert alert-danger alert-dismissible fade show mt-3"
                    role="alert"
                  >
                    {login.msg}
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                      onClick={() => setLogin({})}
                    ></button>
                  </div>
                )}
              </form>
            </div>
            <div className="text-center bg-light py-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSreen;
