import React, { useEffect, useState } from 'react'
import ContactForm from './ContactForm/ContactForm'
import SearchBox from './SearchBox/SearchBox'
import ContactList from './ContactList/ContactList'

const App = () => {
const defaultContacts = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]

  const [contacts, SetContacts] = useState(() => {
    const savedContacts = JSON.parse(window.localStorage.getItem("contacts"))
    return savedContacts && savedContacts.length > 0 ? JSON.parse(window.localStorage.getItem("contacts")) : defaultContacts})

const [filter, setFilter] = useState('')


  const filteredContacts = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase()))

  
  const handleAddContact = (values) => {
    SetContacts((prev) =>  [...prev, values])
  
  }

  const handleDeleteContact = (id) => {
 
    SetContacts(prev => prev.filter((contact) => contact.id !== id))
  }

  useEffect(() => {
window.localStorage.setItem("contacts", JSON.stringify(contacts))
  }, [contacts])
  
  return (
    <div>
  <h1>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      <SearchBox filter={filter} onFilter={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />

</div>
  )
}

export default App