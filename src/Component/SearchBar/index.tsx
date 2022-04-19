import React from 'react'
import './style.scss'
import { FiSearch } from 'react-icons/fi'

type propsType = {
  value?: string
  setValue?: (value: string) => void
  handleSearch?: (value) => void
}

const SearchBar = ({ value, setValue, handleSearch }: propsType) => {

  const handleTextCHange = (e:any) => {
    if (e.key === "Enter" && value) {
      handleSearch(value)
    }
  }
  return (
    <div className='search center'>
      <div className='search__bar'>
        <input
          type='text'
          placeholder='Search'
          className='search__bar__input-field'
          value={value}
          onChange={(e) => setValue(e?.target?.value)}
          onKeyPress={(e) => handleTextCHange(e)}
        />
        <div
          className='search__bar__icon center'
          onClick={() => { value && handleSearch(value) }}
        >
          <FiSearch />
        </div>
      </div>
    </div>
  )
}

export default SearchBar
