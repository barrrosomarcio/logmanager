import React from 'react';
import { ReactComponent as Left } from '../../img/arrow-left-square.svg';
import { ReactComponent as Right } from '../../img/arrow-right-square.svg';
import './pageSelector.css';

const PageSelection = (props) => {
  const {
    filterData,
    page,
    setPage,
    size,
    setSize,
  } = props;
 
  return (
    <div className="page-selector">
      <label>Qtde :{' '}</label>
      <select
        className="selectpage"
        value={ size }
        onChange={ (e) => {
          setSize({ ...filterData, size: e.target.value})
        }}
      >
        <option value={ 5 }>5</option>
        <option value={ 10 }>10</option>
        <option value={ 20 }>20</option>
      </select>
      <button
        onClick={ () => {
          if (page > 1) {
            setPage({ ...filterData, page: page - 1});
          }
        } }
      >
        <Left className="icon" />
      </button>
      <p>{page}</p>
      <button
        onClick={ () => {
          setPage({ ...filterData, page: page + 1});
        } }
      >
        <Right className="icon" />
      </button>
      {/* <label>
        Ordenar por: {' '}
      </label>
      <select>
        <option>ASC</option>
        <option>DESC</option>
      </select> */}
    </div>
    
  );
}

export default PageSelection;