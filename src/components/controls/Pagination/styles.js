import styled from 'styled-components'

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 25px;
`
export const PaginationList = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  li {
    background: #845ec2;
    padding: 10px 15px;
    margin-right: 4px;
    border-radius: 4px;
    font-family: sans-serif;
    color: #fff;
    font-size: 0.85rem;
    min-width: 20px;
    text-align: center;
    user-select: none;

    &:last-child {
      margin-right: 0px;
    }
    &:not(.active):not(.disabled) {
      cursor: pointer;
    }
    &:not(.active):not(.disabled):hover {
      background: #d65db1;
    }
    &:not(.active):not(.disabled):active {
      background: #3e207c;
    }

    &.active {
      background: #ff6f91;
    }
    &.disabled {
      background: #fbeaff;
      pointer-events: none;
    }
  }

  @media (max-width: 700px) {
    list-style: none;
    padding: 0px;
    display: flex;
    li {
      display: none;
    }
    .show {
      display: inline;
    }
  }
`
