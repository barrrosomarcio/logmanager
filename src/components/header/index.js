import React from 'react';
import Logo from '../../img/CI&T.png'
import './logo.css';

const Header = (props) => {
  const { title, nav } = props;
  return (
    <div className="header">
    <img title="CI&T" src={ Logo } alt="CI&T"/>
      <h1>{ title }</h1>
      <div
        className="nav"
        hidden={ !nav }
      >
        <button>
          Cadastrar
        </button>
        <button>
          Relatórios
        </button>
        <button>
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