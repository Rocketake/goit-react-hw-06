import Contact from '../Contact/Contact'
import s from "./ContactList.module.css"
import { useSelector } from 'react-redux'
import { selectContacts } from '../../redux/contactsSlice'
import { selectNameFilter } from '../../redux/filtersSlice'

const ContactList = () => {
  const contacts = useSelector(selectContacts)
  const filter = useSelector(selectNameFilter)
  const filteredData = contacts.filter((contact) => (contact.name.toLowerCase().includes(filter.toLowerCase())))
  return (
    <div>
      <ul className={s.list}>{filteredData.map((contact) => {
        return <li key={contact.id}>
          <Contact data={contact}></Contact>
        </li>
      })}</ul>
  </div>
  )
}

export default ContactList