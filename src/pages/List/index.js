import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/header';
import Filter from '../../components/filter';
import ItemsList from '../../components/itemsList';
import PageSelector from '../../components/pageSelector';
import { getAllLogApi, getFiltered, getLogByIdApi } from '../../api';
import './list.css';

const defaultValuesFilter = {
  filterField: 'id',
  filterValue: '',
  page: '0',
  size: '20',
  sortField:'id',
  sort: 'asc',
};

const FilterPage = () => {
  const ZERO = 0;
  const history = useHistory();
  const [data, setData] = useState([]);
  const [filterValues, setFilterValues] = useState(defaultValuesFilter);

  const handleRequestGetAllLogsApi = async () => {
    const response = await getAllLogApi();

    if (response.status !== 200 || !response) return history.push('/login');
    return setData(response.data.content);
  };

  const getFilteredData = async () => {
    if (filterValues.filterField === 'id' && filterValues.filterValue.length) {
      const response = await getLogByIdApi(filterValues.filterValue);
      if (response.status !== 200 || !response) return false;
      return setData([response.data]);
    }
    const response = await getFiltered(filterValues);
    if (response.status !== 200 || !response) return false;
    return setData(response.data.content);
  };

  useEffect(() => {
    handleRequestGetAllLogsApi();
  }, []);

  useEffect(() => {
    getFilteredData();
  }, [filterValues]);

  let filterOptions = [];
  if (data && data.length > ZERO) {
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
        sortOptions={ filterOptions }
        filterData={filterValues}
        page={filterValues.page}
        setPage={setFilterValues}
        sortField={ filterValues.sortField}
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
