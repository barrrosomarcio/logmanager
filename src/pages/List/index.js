import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import Filter from '../../components/filter';
import ItemsList from '../../components/itemsList';
import erros from './data';

const FilterPage = () => {
  const ZERO = 0;
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState([]);
  const [filterData, setFilterData] = useState({
    filter:'',
    value:''
  });


  useEffect(() => {
    // criar requisicao para buscar erros sem filtros e setar "data" com o retorno.
    console.log('filterpage', erros)
    setData(erros);
  }, []);

  useEffect(() => {
    // criar requisicao com filtros do "filterdata"
  }, [filterData]);

  if( data.length === ZERO) {
    return(
      <h1>Carregando...</h1>
    );
  }
  return (
    <div>
      <Header title="JavaBugs" nav={ true }/>
      <Filter
        filters={ Object.keys(data[0]) } //array com os tipos de filtro
        filterData={ filterData } // obj com tipo e valor de filtro selecionado
        setFilterData={ setFilterData }
      />
      <ItemsList 
        data={data}
      />
    </div>
  );
}

export default FilterPage;