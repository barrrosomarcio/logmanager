import React, { useState } from 'react';
import Header from '../../components/header';
import { createLogAPI } from '../../api';
import './create.css';
import { useHistory } from 'react-router';

const defaultValues = {
  date: '',
  description: '',
  event: '',
  quantity: '',
  level: 'error',
  origin: 'system',
}
const Create = () => {
  const history = useHistory();
  const [formCreateLog, setFormCreateLog] = useState(defaultValues);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormCreateLog({ ...formCreateLog, [name]: value });
  }

  const handleRequestCreateLogApi = async () => {
    const response = await createLogAPI(formCreateLog);
    if (response.status !== 201 || !response) return alert('Existe campos não preenchidos!');
    alert('Log criado com sucesso!');
    history.push('./create');
  }
  
  return(
    <div className="create">
      <Header title="JavaBugs" nav={true}/>
      <form className="form">

        <label>
          Data :
          <input
            type='date'
            name="date"
            value={ formCreateLog.date }
            onChange={ (e) => handleChange(e) }
          />
        </label>

        <label>
          Descrição :
          <input
            name="description"
            value={ formCreateLog.description }
            onChange={ (e) => handleChange(e) }
          />
        </label>

        <label>
          Evento :
          <input
            name="event"
            value={ formCreateLog.event }
            onChange={ (e) => handleChange(e) }
          />
        </label>

        <label>
          Quantidade :
          <input
            name="quantity"
            value={ formCreateLog.quantity }
            onChange={ (e) => handleChange(e) }
          />
        </label>

        <select
          className="select"
          name="level"
          value={ formCreateLog.level }
          onChange={ (e) => handleChange(e) }
        >
          <option value="error">Error</option>
          <option value="warning">Warning</option>
          <option value="info">Info</option>
        </select>

        <select
          className="select"
          name="origin"
          value={ formCreateLog.origin }
          onChange={ (e) => handleChange(e) }
        >
          <option value="system">System</option>
          <option value="service">Service</option>
        </select>

        <button
          type='button'
          className="loginbtn"
          onClick={ handleRequestCreateLogApi }
        >
          Cadastrar Erro
        </button>
      </form>
    </div>
  );
}

export default Create;
