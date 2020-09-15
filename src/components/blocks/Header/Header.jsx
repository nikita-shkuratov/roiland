import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { PATH_CHARACTER, PATH_EPISODE, PATH_LOCATION } from '../../../constants'
import { HeaderContainer, MenuBurger, MenuBody, MenuList } from './styles'

function Header () {
  const [menu, setMenu] = useState(false)

  return (
    <HeaderContainer>
      <div>
        <nav>
          <MenuBurger active={menu} onClick={() => setMenu(prev => !prev)}>
            <span />
            <span />
            <span />
          </MenuBurger>
          <MenuBody active={menu}>
            <MenuList>
              <li>
                <NavLink to={PATH_CHARACTER}>
                  Characters
                </NavLink>
              </li>
              <li>
                <NavLink to={PATH_EPISODE}>
                  Episodes
                </NavLink>
              </li>
              <li>
                <NavLink to={PATH_LOCATION}>
                  Locations
                </NavLink>
              </li>
            </MenuList>
          </MenuBody>
        </nav>
      </div>
    </HeaderContainer>
  )
}

export default Header
