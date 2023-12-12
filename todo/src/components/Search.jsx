const Search = ({search, setSearch}) => {


    return <div className="search"> 
        <h3>Digite para pesquisar</h3>
        <input type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Pesquisar"
        />
    </div>
  
}
 
export default Search