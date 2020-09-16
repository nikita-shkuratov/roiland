import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const HeaderLayout = styled.header`
  position: absolute;
  width: 100%;
  z-index: 50;
  left: 0;
  top: 10px;
`
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  @media (max-width: 767px) {
    top: 15px;
  }
`

export const MenuBody = styled.div`
  @media (max-width: 767px) {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #4d4959;
    padding: 150px 0px 20px 0px;
    transition: ease 0.3s all;
    transform: ${props =>
      props.active
        ? 'translate3d(0px, 0px, 0px);'
        : 'translate3d(0, -100%, 0);'};
  }
`

export const MenuList = styled.ul`
  display: flex;
  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const Link = styled(NavLink)`
  color: #807d8a;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2.6px;
  &:hover {
    color: rgb(190, 188, 188);
  }
  &.active {
    color: #000000;
  }
  @media (max-width: 767px) {
    color: #fff;
    font-size: 20px;
  }
`

export const Element = styled.li`
  position: relative;
  padding: 0px 45px;
  &:after {
    content: '';
    width: 4px;
    height: 4px;
    background-color: #4d4959;
    border-radius: 50%;
    position: absolute;
    right: 0;
    top: 50%;
    margin: -1.5px 0px 0px 0px;
  }
  &:nth-child(3),
  &:last-child {
    &:after {
      display: none;
    }
  }
  @media (max-width: 767px) {
    padding: 0px 0px 45px 0px;
    &:nth-child(3) {
      padding: 0px 0px 45px 0px;
      &:after {
        display: none;
      }
    }
    &:last-child {
      padding: 0;
    }
    &:after {
      content: '';
      width: 4px;
      height: 4px;
      background-color: #fff;
      right: 50%;
      top: 40px;
      margin: 0px -2px 0px 0px;
    }
  }
`
export const Span = styled.span`
  transition: ease 0.3s all;
  top: 8px;
  left: 0px;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #4d4959;
  &:first-child {
    top: 0px;
  }
  &:last-child {
    top: auto;
    bottom: 0px;
  }
`

export const MenuBurger = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: block;
    position: absolute;
    top: 10px;
    right: 15px;
    width: 30px;
    height: 18px;
    cursor: pointer;
    z-index: 5;
    ${Span} {
      ${props =>
        props.active && `
          transform: scale(0);
          background-color: #fff;
          &:first-child {
            transform: rotate(-45deg);
            top: 8px;
          }
          &:last-child {
            transform: rotate(45deg);
            bottom: 8px;
          }
        `}
    }
  }
`
