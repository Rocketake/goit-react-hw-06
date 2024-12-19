import { BsFillTelephoneFill } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";
import s from "./Contact.module.css"

import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

const Contact = ({ data }) => {
	const dispatch = useDispatch()
  return (
	  <div className={s.wrapper}>
		  <div className={s.info}>
			 <div className={s.row}> <IoPersonSharp />
			  <span>{data.name}</span></div>
			  <div className={s.row}><BsFillTelephoneFill />
			  <span>{data.number}</span></div>
		  </div>
		<button onClick={() => dispatch(deleteContact(data.id))}>Delete</button>
	</div>
  )
}

export default Contact