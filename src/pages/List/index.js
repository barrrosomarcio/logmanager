import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/header';
import Filter from '../../components/filter';
import ItemsList from '../../components/itemsList';
import PageSelector from '../../components/pageSelector';
import { getAllLogApi, getFiltered } from '../../api';
import './list.css';

const defaultValuesFilter = {
  filterField: '',
  filterValue: '',
  page: '0',
  size: '20',
  sort: 'asc',
};

const FilterPage = () => {
  const ZERO = 0;
  const history = useHistory();
  const [data, setData] = useState([]);
  const [filterValues, setFilterValues] = useState(defaultValuesFilter);
  // const [page, setPage] = useState(0);
  // const [sort, setSort] = useState('asc');
  // const [size, setSize] = useState(20);
  // const [filterData, setFilterData] = useState({
  //   filter: '',
  //   value: '',
  // });

  const handleRequestGetAllLogsApi = async () => {
    const response = await getAllLogApi();

    if (response.status !== 200 || !response) return history.push('/login');
    return setData(response.data.content);
  };

  const getFilteredData = async () => {
    const response = await getFiltered(filterValues);
    console.log('response', response);
    if (response.status !== 200 || !response) return false;
    console.log('chamou');
    return setData(response.data.content);
  };

  useEffect(() => {
    handleRequestGetAllLogsApi();
  }, []);

  useEffect(() => {
    // criar requisicao com filtros do "filterdata"
    getFilteredData();
  }, [filterValues]);

  let filterOptions = [];
  if (data.length > ZERO) {
    filterOptions = Object.keys(data[0]);
  }
  return (
    <div className='list-page'>
      <Header title='JavaBugs' nav={true} />
      <Filter
        filters={filterOptions} //array com os tipos de filtro
        filterData={filterValues} // obj com tipo e valor de filtro selecionado
        setFilterData={setFilterValues}
      />
      <PageSelector
        filterData={filterValues}
        page={filterValues.page}
        setPage={setFilterValues}
        sort={filterValues.sort}
        setSort={setFilterValues}
        size={filterValues.size}
        setSize={setFilterValues}
      />
      <ItemsList data={data} page={filterValues.page} setPage={setData} />
    </div>
  );
};

export default FilterPage;
