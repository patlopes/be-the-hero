import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'
import api from '../../services/api';


import herosImage from '../../assets/heroes.png'
import logoImage from '../../assets/logo.svg'

import './styles.css';

export default function Logon() {

  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { id });
      localStorage.setItem('OngId', id);
      localStorage.setItem('OngName', response.data.name);

      history.push('/profile')
    }catch (err) {
      alert('Falha no login, tente novamente');
    }

  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImage} alt="Be The Hero" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input
            placeholder="Seu ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button type="submit" className="button">Entrar</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={herosImage} alt="Heros" />
    </div>
  );
}
