import React from 'react'

 const Search = ({ search, onSearchChange}) => {
    // function handleSearch(e){
    //     setWord(e.target.value)
    // }value={word} onChange={handleSearch}
    function handleSearchChange(e){
        onSearchChange(e.target.value)
    }
  return (
    <div>Search
        <input value={search} onChange={handleSearchChange} type="text" placeholder="Search Recipe" ></input>
    </div>
  )
}
export default Search;