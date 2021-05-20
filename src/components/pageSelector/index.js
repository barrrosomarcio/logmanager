import React from 'react';
import { ReactComponent as Left } from '../../img/arrow-left-square.svg';
import { ReactComponent as Right } from '../../img/arrow-right-square.svg';
import './pageSelector.css';

const PageSelection = (props) => {
  const {page, setPage} = props;
  return (
    <div className="page-selector">
      <button
        onClick={ () => {
          if (page > 1) {
            setPage(page - 1);
          }
        } }
      >
        <Left className="icon" />
      </button>
      <p>{page}</p>
      <button
        onClick={ () => {
          setPage(page + 1);
        } }
      >
        <Right className="icon" />
      </button>
    </div>
  );
}

export default PageSelection;