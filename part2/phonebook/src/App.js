import { useState, useEffect } from 'react';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Persons from './components/Persons';
import personService from './services/personService';

const App = () => {

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchFilter, setSearchFilter] = useState('');

  console.log('render', persons.length, 'persons')

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    if (persons.some(element => element.name === personObject.name)) {
      alert(`${personObject.name} and ${personObject.number} is already added to phonebook`);
    } else {
      setPersons(persons.concat(personObject));
    }

    personService
      .create(personObject)
      .then(response => {
        setPersons(persons.concat(response))
      })

    setNewName('')
    setNewNumber('')

  }
  const handleDelete = (id, name) => {
    if (window.confirm(`Delete ${name}`)) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id))
        })
    }
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchFilter={searchFilter} setSearchFilter={setSearchFilter} />
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <div>
        <Persons persons={persons} searchFilter={searchFilter} handleDelete={handleDelete} />
      </div>
    </div>
  )
}

export default App;
