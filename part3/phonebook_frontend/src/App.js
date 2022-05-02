import { useState, useEffect } from 'react';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Persons from './components/Persons';
import personService from './services/personService';

const Notification = ({ message }) => {
  if (message) {
    return (
      <div className='message'>{message}</div>
    )
  } else {
    return null;
  }


}

const App = () => {

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchFilter, setSearchFilter] = useState('');
  const [message, setMessage] = useState('');
  console.log('render', persons.length, 'persons')

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response)
      })
  }, [])

  const showMessage = (message) => {
    setMessage(message);
    setTimeout(() => {
      setMessage('')
    }, 5000)
  }



  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1

    }
    const existingPerson = persons.filter(person => person.name === personObject.name)[0]
    console.log(existingPerson)
    if (existingPerson) {
      if (!window.confirm(`${personObject.name} exists. Update?`)) { return }
      personService
        .update(existingPerson.id, personObject)
        .then(response => {
          setPersons(persons.map((person) => person.id !== existingPerson.id ? person : response))
          showMessage(`${existingPerson.name} is changed`);
        })
        .catch(error => {
          showMessage(`Change failed`)
        })

    } else {
      personService
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(response))
          showMessage(`${personObject.name} has been added`)
        })
    }


    setNewName('')
    setNewNumber('')

  }
  const handleDelete = (id, name) => {
    personService
      .remove(id)
      .then(() => {
        setPersons(persons.filter((person) => person.id !== id))
        showMessage(`${name} has been deleted`)

      })
      .catch(error => {

      })

  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter searchFilter={searchFilter} setSearchFilter={setSearchFilter} />
      <h2>Add new</h2>
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
