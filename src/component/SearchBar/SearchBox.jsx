function SearchBox(){


    return (
        <div className="searchBox">
<input
        tabIndex={0} 
        role="button"
        type="text"
        placeholder="Search"
        // value={searchText}
        className="input input-bordered w-24 md:w-auto"
        onChange={(e)=> {setSearchText(e.target.value)}}
      />

        </div>
    )
}
export default SearchBox