import React from 'react';
import Item from './Item';
function CardList({ list }) {
  const renderList = list.map(ele => (
    <div className="col-6 my-3">
      <Item item={ ele }></Item> </div>));
  console.log(renderList);
  return (<React.Fragment >
    { renderList }
  </React.Fragment>
  );
}

export default CardList;
