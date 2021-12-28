import React from 'react'
import './style.scss'
import { FiSearch } from 'react-icons/fi'

const SearchBar = () => {
  return (
    <div className='search center'>
      <div className='search__bar'>
        <input
          type='text'
          placeholder='Search'
          className='search__bar__input-field'
        />
        <div className='search__bar__icon center'>
          <FiSearch />
        </div>
      </div>
    </div>
  )
}

export default SearchBar
