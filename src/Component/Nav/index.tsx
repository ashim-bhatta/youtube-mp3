import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineHome, AiOutlineBulb } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { FiSearch } from 'react-icons/fi'
import './style.scss'

const Nav = () => {
  const location = useLocation()

  const navItems = [
    {
      name: 'Home',
      path: '/',
      icon: <AiOutlineHome />,
    },
    {
      name: 'Search',
      path: '/search',
      icon: <FiSearch />,
    },
    {
      name: 'Discover',
      path: '/discover',
      icon: <AiOutlineBulb />,
    },
    {
      name: 'Profile',
      path: '/profile',
      icon: <CgProfile />,
    },
  ]
  return (
    <div className='nav'>
      <div className='nav__items center'>
        {navItems.map((item) => {
          return (
            <Link
              key={item?.name}
              to={item.path}
              className={
                location?.pathname === item?.path
                  ? 'nav__item nav__item__active center'
                  : 'nav__item center'
              }
            >
              <div className='nav__item__icon'>{item.icon}</div>
              <div className='nav__item__name'>{item.name}</div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Nav
