import React, { useState } from 'react';
// import javabugs from '../img/javabugs.png';
// import ciandt from '../img/CI&T.png';
// import trybe from '../img/trybe.svg';
// import codenation from '../img/codenation.svg';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name === 'email') {
      return setEmail(value);
    }
    return setPassword(value);
  }

  return (
    <div className="login">
      {/* <div className="banner">
        <img className="trybe" title="Trybe" src={trybe} alt="Trybe" />
        <img className="codenation "title="Codenation" src={codenation} alt="Codenation" />
        <img className="ciandt" title="CI&T" src={ciandt} alt="CI%T" />
      </div> */}
      {/* <img className="trybe" title="Trybe" src={trybe} alt="Trybe" /> */}
      <form className="form">
        {/* <img className="javabugs" title="JavaBugs" src={ javabugs } alt="JavaBugs" /> */}
        <label
          htmlFor="email"        
        >
          Email:
          <input 
            name="email"
            value={ email }
            onChange={ handleChange }
          />
        </label>
        <label
          htmlFor="password"        
        >
          Password:
          <input
            name="password"
            value={ password }
            onChange={ handleChange }
          />
        </label>
        <button className="loginbtn">
          Entrar
        </button>
      </form>
      {/* <img className="ciandt" title="CI&T" src={ciandt} alt="CI%T" /> */}
    </div>
  );
}

export default Login;