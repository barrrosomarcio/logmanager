import React, { useState } from 'react';
import './filter.css';

const Filter = (props) => {
  const {
    filters,
    filterData,
    setFilterData } = props;
  const [tipo, setTipo] = useState(filterData.filter);
  const [valor, setValor] = useState(filterData.value);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name === 'tipo') {
      return setTipo(value);
    }
    return setValor(value);
  }
  const submitFilter = () => {
    const filter = {
      filter: tipo,
      value: valor
    };

    if (tipo === '' || valor ==='') {
      return alert('Informações de filtro inválidas!');
    }
    return setFilterData(filter);
  }
  const cleanFilters = () => {
    const filter = {
      filter: '',
      value: ''
    };
    return setFilterData(filter);
  }

  return (
    <div className="filter">
      <h3>Filtros</h3>
      <div className="filter-container">
        <label>
          Tipo :
          <select
            className="select"
            name="tipo"
            value={ tipo }
            onChange={ handleChange }
            placeholder="Selecione Opção"
          >
            {filters.map((element) => {
              return <option value={ element }>{element}</option>
            })}
          </select>
        </label>
        <input
          onChange={ handleChange }
          name="valor"
          value={ valor }
          className="select"
          placeholder="  Valor"
        />
        <button
          className="search"
          onClick={ submitFilter }
        >
          Buscar
        </button>
        <button
          className="clean"
          onClick={ cleanFilters }
        >
          Limpar
        </button>
      </div>
    </div>
  );
}

export default Filter;