import React from 'react'

const Filter = ({onCategoryChange}) => {
  return (
    <div>
        <select name="filter" id="name"onChange={onCategoryChange}>
            <option value="All">All</option>
            <option value="beer"></option>
            <option value="vodka"></option>
            <option value="whiskey"></option>
            <option value="water"></option>
        </select>
    </div>
  )
}
export default Filter;