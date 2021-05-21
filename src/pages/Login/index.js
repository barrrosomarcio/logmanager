import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import javabugs from '../../img/javabugs.png';
import { loginAPI } from '../../api';
import './login.css';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name === 'email') {
      return setEmail(value);
    }
    return setPassword(value);
  }

  const logMeIn = () => {
    loginAPI(email, password);
  }

  // Criar funcao para fazer o request do login e autenticar o usuario e redirecionar para "/list"
  
  return (
    <div className="login">
      <form className="form">
        <img className="javabugs" title="JavaBugs" src={ javabugs } alt="JavaBugs" />
        <label
          htmlFor="email"        
        >
          Email :
          <input 
            name="email"
            value={ email }
            onChange={ handleChange }
          />
        </label>
        <label
          htmlFor="password"        
        >
          Password :
          <input
            name="password"
            value={ password }
            onChange={ handleChange }
          />
        </label>
        
      </form>
      <button
          className="loginbtn"
          onClick={ () =>{
            logMeIn();
          }}
        >
          Entrar
        </button>
    </div>
  );
}

export default Login;