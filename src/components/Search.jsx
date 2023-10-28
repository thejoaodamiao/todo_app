
// eslint-disable-next-line react/prop-types
const Search = ({search, setSearch}) => {
  return (
    <div className="search">
        <h2>Pesquisar:</h2>
        <input 
            value={search} 
            onChange={(e)=> setSearch(e.target.value)} 
            type="text" 
            placeholder="Digite aqui para pesquisar" />
    </div>
  )
}

export default Search