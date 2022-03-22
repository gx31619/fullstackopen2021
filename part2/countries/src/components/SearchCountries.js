const SearchCountries = (props) => {

    const handleSearchCountries = (event) => {
        console.log(event.target.value)
        props.setSearchCountries(event.target.value)
    }

    return (
        <div>
            find countries<input value={props.searchCountries} onChange={handleSearchCountries} />
        </div>
    )
}

export default SearchCountries;