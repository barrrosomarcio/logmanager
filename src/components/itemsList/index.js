import React from 'react';
import './itemslist.css';
import ListItem from '../listItem';

const ItemsList = (props) => {
  const { data, filterData } = props;

  // const filter = (data) => {
  //   const { filter, value } = filterData;
  //   if (filter === '' || value === '') {
  //     return data;
  //   }
    
  //   const filteredData = data.filter((element) => element[filter] == value );
  //   return filteredData
  // }
  // const dataModel = {
  //   id: 'ID',
  //   level: 'LEVEL',
  //   description: 'DESCRIÇÃO',
  //   origin:'ORIGEM',
  //   date: 'DATA',
  //   quantity: 'QUANTIDADE',
  // };
  // const showElements = filter(data);
  return(
    <div className="items-list">
      {/* <ListItem data={ dataModel }/> */}
      {data.map((element) => <ListItem key={element.id} data={ element }/> )}
      <div className="pages">

      </div>
    </div>
  );
}

export default ItemsList;