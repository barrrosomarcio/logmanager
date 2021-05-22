import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/header';
import Filter from '../../components/filter';
import ItemsList from '../../components/itemsList';
import PageSelector from '../../components/pageSelector';
import erros from './data';
import { getAllLogApi, getFiltered } from '../../api';
import './list.css';

const FilterPage = () => {
  const ZERO = 0;
  const history = useHistory();
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState([]);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('');
  const [size, setSize] = useState(20);
  const [filterData, setFilterData] = useState({
    filter:'',
    value:''
  });

  const handleRequestGetAllLogsApi = async () => {
    const response = await getAllLogApi();
    
    if (response.status !== 200 || !response) return history.push('/login');
    return setData(response.data.content);
  };

  const getFilteredData = async () => {
    const { filter, value } = filterData
    const response = await getFiltered(filter, value, page, size, sort);
    console.log('response', response);
    if (response.status !== 200 || !response) return false;
    return setData(response.data.content);
  }
  

  useEffect(() => {
    handleRequestGetAllLogsApi();
  }, []);

  useEffect(() => {
    // criar requisicao com filtros do "filterdata"
    console.log('chamou');
    getFilteredData();
  }, [page, size, filterData]);


  let filterOptions = []
  if (data.length > ZERO) {
    filterOptions = Object.keys(data[0]);
  }
  return (
    <div className="list-page">
      <Header title="JavaBugs" nav={ true }/>
      <Filter
        filters={ filterOptions } //array com os tipos de filtro
        filterData={ filterData } // obj com tipo e valor de filtro selecionado
        setFilterData={ setFilterData }
      />
      <PageSelector
        page={ page }
        setPage={ setPage }
        sort={ sort }
        setSort={ setSort }
        size={ size }
        setSize={ setSize }
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
