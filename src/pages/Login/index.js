import React, { useState } from 'react';
import { useHistory } from 'react-router';
import javabugs from '../../img/javabugs.png';
import { loginAPI } from '../../api';
import './login.css';

const defaultValues = {
  email: '',
  password:'',
  error: '',
};

const Login = () => {
  const history = useHistory();
  const [data, setData] = useState(defaultValues);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    return setData({ ...data, [name]: value })
  }

  const logMeIn = async () => {
    const logged = await loginAPI(data.email, data.password); 
    if(logged) {
      return history.push('/list');
    }
    return setData({ ...data, error: 'Email ou senha nao sao válidos' });
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
              value={ data.email }
              onChange={ handleChange }
            />
          </label>
          <label
            htmlFor="password"        
          >
            Password :
            <input
              name="password"
              value={ data.password }
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