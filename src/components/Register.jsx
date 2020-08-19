import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Register.scss';

const Register = () => (
    <section className="register">
        <div className="register__container">
            <h2>Regístrate</h2>
            <form className="register__container--form">
                <input className="input" type="text" placeholder="Nombre" />
                <input className="input" type="text" placeholder="Correo" />
                <input className="input" type="password" placeholder="Contraseña" />
                <button className="button">Registrarme</button>
            </form>
            <Link to="/sign-in">Iniciar sesión</Link>
        </div>
    </section>
);

export default Register;