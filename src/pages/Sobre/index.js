import React from 'react';
import { SocialIcon } from 'react-social-icons';
import Andre from '../../img/andre.png';
import Brune from '../../img/brune.jpeg';
import Marcio from '../../img/marcio.jpeg';
import Rafa from '../../img/rafa.JPG';
import Header from '../../components/header';
import Jesssica from '../../img/jessica.png';
import './about.css';

const About = () => {
  return (
    <div className="about">
      <Header nav={ true } title="JavaBugs"/>
      <section className="container">
        <h1 className="title" >Integrantes:</h1>
        <div className="card">
          <img src={ Andre } alt="pessoa"/>
          <h3>André Horman</h3>
          <p>andrehormandev@gmail.com</p>
          <div>
            <SocialIcon url="https://www.linkedin.com/in/andrehorman/" network="linkedin"/>
            <SocialIcon url="https://github.com/ANDREHORMAN1994" network="github" />
          </div>
        </div>
        <div className="card">
          <img src={ Brune } alt="pessoa"/>
          <h3>Brune Miguel Paes Freire</h3>
          <p>bstfreire@gmail.com</p>
          <div>
            <SocialIcon url="https://www.linkedin.com/in/brunefreire/" network="linkedin"/>
            <SocialIcon url="https://github.com/Brune-Freire" network="github" />
          </div>
        </div>
        <div className="card">
          <img src={ Jesssica } alt="pessoa"/>
          <h3>Jéssica Landislau</h3>
          <p>paula.jfe@gmail.com</p>
          <div>
            <SocialIcon url="https://www.linkedin.com/in/jessica-ladislau/" network="linkedin"/>
            <SocialIcon url="https://github.com/paula-jfe" network="github" />
          </div>
        </div>
        <div className="card">
          <img src={ Marcio } alt="pessoa"/>
          <h3>Márcio Barroso</h3>
          <p>barrrosomarcio@gmail.com</p>
          <div>
            <SocialIcon url="https://www.linkedin.com/in/márcio-barroso-569234181" network="linkedin"/>
            <SocialIcon url="https://github.com/barrrosomarcio" network="github" />
          </div>
        </div>
        <div className="card">
          <img src={ Rafa } alt="pessoa"/>
          <h3>Rafael Machado Guimarães</h3>
          <p>rafaelmguimaraes@gmail.com</p>
          <div>
            <SocialIcon url="https://www.linkedin.com/in/rafaelmguimaraes" network="linkedin"/>
            <SocialIcon url="https://github.com/rafaelmguimaraes" network="github" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;