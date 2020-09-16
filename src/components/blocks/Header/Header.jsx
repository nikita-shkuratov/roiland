import React, { useState, useCallback } from 'react'
import {
  HeaderLayout,
  HeaderContainer,
  MenuBurger,
  MenuBody,
  MenuList,
  Element,
  Link,
  Span,
} from './styles'
import { PATH_CHARACTER, PATH_EPISODE, PATH_LOCATION } from '../../../constants'

function Header () {
  const [menu, setMenu] = useState(false)

  const menuItems = [
    { title: 'Characters', path: PATH_CHARACTER },
    { title: 'Episodes', path: PATH_EPISODE },
    { title: 'Locations', path: PATH_LOCATION },
  ]

  return (
    <HeaderLayout>
      <HeaderContainer>
        <nav>
          <MenuBurger active={menu} onClick={useCallback(() => setMenu(prev => !prev), [])}>
            <Span />
            <Span />
            <Span />
          </MenuBurger>
          <MenuBody active={menu}>
            <MenuList>
              {menuItems.map((item, index) => (
                <Element key={index}>
                  <Link as={Link} to={item.path}>{item.title}</Link>
                </Element>
              ))}
            </MenuList>
          </MenuBody>
        </nav>
      </HeaderContainer>
    </HeaderLayout>
  )
}

export default Header
