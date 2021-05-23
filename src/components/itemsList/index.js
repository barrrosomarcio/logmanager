import React from 'react';
import './itemslist.css';
import ListItem from '../listItem';

const ItemsList = props => {
  const { data } = props;

  if (!data.length)
    return (
      <div className='items-list'>
        <h1>Não há nada a ser exibido</h1>
      </div>
    );

  return (
    <div className='items-list'>
      {data.map(element => (
        <ListItem key={element.id} data={element} />
      ))}
    </div>
  );
};

export default ItemsList;
