import React from 'react';
import { ReactComponent as Left } from '../../img/arrow-left-square.svg';
import { ReactComponent as Right } from '../../img/arrow-right-square.svg';
import './pageSelector.css';

const PageSelection = props => {
  const { filterData, page, setPage, size, setSize, sortOptions, sortField } = props;
  console.log('field', sortField )

  return (
    <div className='page-selector'>
      <label>Qtde : </label>
      <select
        className='selectpage'
        value={size}
        onChange={e => {
          setSize({ ...filterData, size: e.target.value });
        }}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
      </select>
      <button
        onClick={() => {
          if (page > 0) {
            setPage({ ...filterData, page: parseInt(page, 10) - 1 });
          }
        }}>
        <Left className='icon' />
      </button>
      <p>{parseInt(page, 10) + 1}</p>
      <button
        onClick={() => {
          setPage({ ...filterData, page: parseInt(page, 10) + 1 });
        }}>
        <Right className='icon' />
      </button>
      <label>
        Ordenar por: {' '}
      </label>
      <select
        className="selectorderfield"
        value={sortField}
        onChange={ (e) => {
          setPage({ ...filterData, sortField: e.target.value })
        }}
      >
        {sortOptions.map(option => {
          return <option key={option} value={option}>{option}</option>
        })}
      </select>
      <select
        className='selectorder'
      >
        <option>ASC</option>
        <option>DESC</option>
      </select>
    </div>
  );
};

export default PageSelection;
