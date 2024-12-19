import React from 'react'
import s from './SearchBox.module.css'

const SearchBox = ({ filter, onFilter }) => {
  return (
    <div className={s.wrapper}>
      <span>Find contacts by name</span>
      <input type="text" value={filter} onChange={(e) => {onFilter(e.target.value)}}/>
  </div>
  )
}

export default SearchBox