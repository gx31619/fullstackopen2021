import Person from './Person';

const Persons = ({ persons, searchFilter, handleDelete }) => {
    console.log('before', persons)

    const displayFilteredPeople = Object.values(persons).filter(person => person.name.toLowerCase().includes(searchFilter.toLowerCase()))


    return (
        <div>
            {displayFilteredPeople.map((person) => <Person key={person.id} person={person} handleDelete={handleDelete} />)}
        </div>)
}

export default Persons;