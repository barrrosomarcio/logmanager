import React from 'react';
import './listItem.css';

const ListItem = (props) => {
  const {
    id,
    level,
    description,
    origin,
    date,
    quantity
  } = props.data;
  return(
    <div className={`list-item ${level}`}>
      <p className="id">{id}</p>
      <p className="level" >{level}</p>
      <p className="description">{description}</p>
      <p className="origin">{origin}</p>
      <p className="date">{date}</p>
      <p className="quantity">{quantity}</p>
    </div>
  );
}

export default ListItem;