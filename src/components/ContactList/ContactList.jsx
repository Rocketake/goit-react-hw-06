import React from 'react'
import Contact from '../Contact/Contact'
import s from "./ContactList.module.css"

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      <ul className={s.list}>{contacts.map((contact) => {
        return <li key={contact.id}>
          <Contact data={contact} onDelete={onDelete}></Contact>
        </li>
      })}</ul>
  </div>
  )
}

export default ContactList