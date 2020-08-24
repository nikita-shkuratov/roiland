import React from 'react'
import { NavLink } from 'react-router-dom'

function Header (){
    return (
        <header className='header'>
          <div className='header__row'>
            <nav className='header__menu menu'>
              <div className='menu__icon icon-menu'>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className='menu__body'>
                <ul className='menu__list'>
                  <li><NavLink exact to='/' className='menu__link'>Characters</NavLink></li>
                  <li><NavLink to='/episodes' className='menu__link'>Episodes</NavLink></li>
                  <li><NavLink to='/locations' className='menu__link'>Locations</NavLink></li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
      )
}

export default Header