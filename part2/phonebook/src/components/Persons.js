import Person from './Person';

const Persons = ({ persons, searchFilter, handleDelete }) => {
    const displayFilteredPeople = persons.filter(person => person.name.toLowerCase().includes(searchFilter.toLowerCase()));

    return (
        <div>
            {displayFilteredPeople.map((person) => <Person key={person.id} person={person} handleDelete={handleDelete} />)}
        </div>)
}

export default Persons;