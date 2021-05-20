import React, { useState } from 'react';
import { Switch } from 'react-router';
import Header from '../../components/header';
import './create.css';

const Create = () => {
  const [description, setDescription] = useState('');
  const [event, setEvent] = useState('');
  const [quantity, setQuantity] = useState('');
  const [level, setLevel] = useState('');
  const [origin, setOrigin] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch(name) {
      case "description": return setDescription(value);
      case "event": return setEvent(value);
      case "quantity": return setQuantity(value);
      case "level": return setLevel(value);
      case "origin": return setOrigin(value);
      default: break;
    }
  }
  
  
  return(
    <div className="create">
      <Header title="JavaBugs" nav={true}/>
      <form className="form">
      <label>
        Descrição :
        <input
          name="description"
          value={description}
          onChange={handleChange}
        />
      </label>
      <label>
        Evento :
        <input
          name="event"
          value={event}
          onChange={handleChange}
        />
      </label>
      <label>
        Quantidade :
        <input
          name="quantity"
          value={quantity}
          onChange={handleChange}
        />
      </label>
      <select
        className="select"
        name="level"
        value="level"
        onChange={handleChange}
      >
        <option value="error">Error</option>
        <option value="warnin">Warning</option>
        <option value="info">Info</option>
      </select>
      <label>
        Origem :
        <input
          name="origin"
          value={origin}
          onChange={handleChange}
        />
      </label>
      <button
        className="loginbtn"
      >
        Cadastrar Erro
      </button>
      </form>
    </div>
  );
}

export default Create;