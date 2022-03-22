import Person from './Person';

const Persons = (props) => {
    const displayFilteredPeople = props.persons.filter(person => person.name.toLowerCase().includes(props.searchFilter.toLowerCase()));
    return (
        <div>
            {displayFilteredPeople.map((person) => <Person key={person.id} name={person.name} number={person.number} />)}
        </div>)
}

export default Persons;