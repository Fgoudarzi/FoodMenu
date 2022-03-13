import React from 'react';
const Categories = ({ clickHandler, catList }) => {

  return (
    <div className='btn-container'>
      {catList.map(cat => {
        return (
          <button className='filter-btn' onClick={() => clickHandler(cat)}>{cat}</button>
        )
      })}
    </div>
  );
};

export default Categories;
