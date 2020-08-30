import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { PATH_CHARACTER, PATH_EPISODE, PATH_LOCATION } from '../../constRotePath'

function Header() {
  const [menu, setMenu] = useState(false)

  return (
    <header className='header'>
      <div className='header__row'>
        <nav className='header__menu menu'>
          <div
            className={menu ? 'menu__icon icon-menu active' : 'menu__icon icon-menu'}
            onClick={() => setMenu(prev => !prev)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={menu ? 'menu__body active' : 'menu__body'}>
            <ul className='menu__list'>
              <li><NavLink exact to={PATH_CHARACTER} className='menu__link'>Characters</NavLink></li>
              <li><NavLink to={PATH_EPISODE} className='menu__link'>Episodes</NavLink></li>
              <li><NavLink to={PATH_LOCATION} className='menu__link'>Locations</NavLink></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header