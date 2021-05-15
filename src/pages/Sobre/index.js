import React from 'react';
import Header from '../../components/header';
import Pessoa from '../../img/pessoa.jpeg';
import './about.css';

const About = () => {
  return (
    <div className="about">
      <Header nav={ true } title="JavaBugs"/>
      <section className="container">
        <h1 className="title" >Integrantes:</h1>
        <div className="card">
          <img src={ Pessoa } alt="pessoa"/>
          <h3>André Horman</h3>
          <a>
            linkedin
          </a>
          <button>github</button>
        </div>
        <div className="card">
          <img src={ Pessoa } alt="pessoa"/>
          <h3>Brune Miguel Paes Freire</h3>
          <button>linkedin</button>
          <button>github</button>
        </div>
        <div className="card">
          <img src={ Pessoa } alt="pessoa"/>
          <h3>Jéssica Landislau</h3>
          <button>linkedin</button>
          <button>github</button>
        </div>
        <div className="card">
          <img src={ Pessoa } alt="pessoa"/>
          <h3>Márcio Barroso</h3>
          <button>linkedin</button>
          <button>github</button>
        </div>
        <div className="card">
          <img src={ Pessoa } alt="pessoa"/>
          <h3>Rafael Machado Guimarães</h3>
          <button>linkedin</button>
          <button>github</button>
        </div>
      </section>
    </div>
  );
}

export default About;