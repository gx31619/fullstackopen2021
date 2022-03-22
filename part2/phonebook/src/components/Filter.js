const Filter = (props) => {

    const handleSearchFilter = (event) => {
        console.log(event.target.value)
        props.setSearchFilter(event.target.value)
    }

    return (
        <div>
            filter shown with<input value={props.searchFilter} onChange={handleSearchFilter} />
        </div>
    )
}

export default Filter;