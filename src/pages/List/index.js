import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/header';
import Filter from '../../components/filter';
import ItemsList from '../../components/itemsList';
import PageSelector from '../../components/pageSelector';
import erros from './data';
import { getAllLogApi } from '../../api';
import './list.css';

const FilterPage = () => {
  const ZERO = 0;
  const history = useHistory();
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState([]);
  const [page, setPage] = useState(1);
  const [filterData, setFilterData] = useState({
    filter:'',
    value:''
  });

  const handleRequestGetAllLogsApi = async () => {
    const response = await getAllLogApi();
    if (response.status !== 200 || !response) return history.push('/login');
    setData(response.data.content);
  }

  useEffect(() => {
    // criar requisicao para buscar erros sem filtros e setar "data" com o retorno.
    // console.log('filterpage', erros)
    handleRequestGetAllLogsApi();
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
    <div className="list-page">
      <Header title="JavaBugs" nav={ true }/>
      <Filter
        filters={ Object.keys(data[0]) } //array com os tipos de filtro
        filterData={ filterData } // obj com tipo e valor de filtro selecionado
        setFilterData={ setFilterData }
      />
      <PageSelector 
        page={ page }
        setPage={ setPage }
      />
      <ItemsList 
        data={data}
        page={ page }
        setPage={ setData }
      />
    </div>
  );
}

export default FilterPage;
