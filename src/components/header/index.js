import React from 'react';
import { Redirect, useHistory } from 'react-router';
import Logo from '../../img/CI&T.png'
import './logo.css';

const Header = (props) => {
  const { title, nav } = props;
  const history = useHistory();
  return (
    <div className="header">
    <img title="CI&T" src={ Logo } alt="CI&T"/>
      <h1>{ title }</h1>
      <div
        className="nav"
        hidden={ !nav }
      >
        <button
          onClick={() => {
            history.push('/create');
          }}
        >
          Cadastrar
        </button>
        <button
          onClick={() => {
            history.push('/list');
          }}
        >
          Relatórios
        </button>
        <button
          onClick={() => {
            history.push('/aboutus');
          }}
        >
          Sobre
        </button>
      </div>
      <button
        className="logout"
        hidden={ !nav }
      >
        Logout
      </button>
    </div>
  );
}

export default Header;