import React, { useState } from 'react';
import { useHistory } from 'react-router';
import javabugs from '../../img/javabugs.png';
import { loginAPI } from '../../api';
import './login.css';

const Login = () => {
  const history = useHistory();
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name === 'email') {
      return setEmail(value);
    }
    return setPassword(value);
  }

  const logMeIn = async () => {
    const logged = await loginAPI(email, password); 
    if(logged) {
      return history.push('/list');
    }
    return setError('Email ou senha nao sao válidos');
  }
  
  return (
    <div className="login">
      <div className="form" >
        <form className="forma">
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
          {(error !== '' && <p>{error}</p>)}
        </form>
        <button
            className="loginbtn"
            onClick={ logMeIn }
          >
            Entrar
        </button>
      </div>
    </div>
  );
}

export default Login;