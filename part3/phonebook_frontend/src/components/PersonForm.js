const PersonForm = (props) => {

    const handleNameChange = (event) => {
        console.log(event.target.value);
        props.setNewName(event.target.value);
    }

    const handleNumberChange = (event) => {
        console.log(event.target.value);
        props.setNewNumber(event.target.value);
    }

    return (
        <div>
            <form onSubmit={props.addPerson}>
                <div>
                    name: <input
                        value={props.newName}
                        onChange={handleNameChange} />
                </div>
                <div>
                    number: <input
                        value={props.newNumber}
                        onChange={handleNumberChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>

    )

}

export default PersonForm;