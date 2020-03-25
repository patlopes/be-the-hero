import React from 'react';
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import './styles.css'

import logoImage from '../../assets/logo.svg'

export default function Register() {
    return (
        <div className="register-conteiner">
            <div className="content">
                <section>
                    <img src={logoImage} alt="Be The Hero" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG</p>

                    <Link className="back-link" to="/" >
                        <FiArrowLeft size={16} color="#e02041" />
                        Voltar
                    </Link>
                </section>
                <form>
                    <input placeholder="Nome da ONG" />
                    <input type="email" placeholder="E-mail" />
                    <input placeholder="WhatsAPP" />

                    <div className="input-group">
                        <input placeholder="Cidade" />
                        <input placeholder="UF" style={{width: 80}} />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}