const SearchCountries = (props) => {

    const handleSearchCountries = (event) => {
        console.log(event.target.value)
        props.setSearchCountries(event.target.value)
    }

    return (
        <form>
            find countries<input value={props.searchCountries} onChange={handleSearchCountries} />
        </form>
    )
}

export default SearchCountries;