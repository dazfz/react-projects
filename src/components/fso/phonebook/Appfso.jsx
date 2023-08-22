import { useState } from "react";

const Filter = ({ searchName, setSearchName }) => {
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    setSearchName(searchTerm);
  };

  return (
    <div>
      <input value={searchName} onChange={handleSearchChange} />
    </div>
  );
};

const PersonForm = ({ addPerson }) => {
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value);
  };

  return (
    <form onSubmit={(event) => addPerson(event, newName, newPhone)}>
      <div>
        name:{" "}
        <input value={newName} onChange={(e) => setNewName(e.target.value)} />
      </div>
      <div>
        number: <input value={newPhone} onChange={handlePhoneChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

const Persons = ({ filteredPersons }) => {
  return (
    <>
      {filteredPersons.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [searchName, setSearchName] = useState("");

  const addPerson = (event, newName, newPhone) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} already exists in the phonebook.`);
      return;
    }
    const personObject = {
      name: newName,
      number: newPhone,
    };
    setPersons(persons.concat(personObject));
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter searchName={searchName} setSearchName={setSearchName} />

      <h3>Add a new</h3>

      <PersonForm addPerson={addPerson} />

      <h3>Numbers</h3>

      <Persons filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;
