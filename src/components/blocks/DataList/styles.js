import styled from 'styled-components'

export const Table = styled.div`
  font-size: 10px;
  display: flex;
  flex-direction: column;
  text-align: left;
  p {
    color: #181818;
    font-size: 0.85rem;
  }
  @media (max-width: 560px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`
export const TableHeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-transform: uppercase;
  background-color: #d1cece;
  font-weight: 600;
  padding: 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  @media (max-width: 560px) {
    display: none;
  }
`
export const HeaderTitles = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;
  &:nth-child(1) {
    width: 40%;
  }
  &:nth-child(2) {
    width: 20%;
  }
  &:nth-child(3) {
    width: 40%;
  }
`
export const TableBodyRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.25), 0 3px 3px rgba(0, 0, 0, 0.22);
  margin: 5px 0px 5px 0px;
  padding: 0px 5px 0px 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background: rgba(252, 252, 252, 0.8);
  transition: ease 0.3s all;
  :hover {
    background: #f0ecec;
  }
  @media (max-width: 560px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 5px;
  }
`
export const BodyItems = styled.div`
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-wrap: break-word;
  word-wrap: break-word;
  padding: 0 10px;
  &:nth-child(1) {
    width: 10%;
  }
  &:nth-child(2) {
    width: 30%;
  }
  &:nth-child(3) {
    width: 20%;
    text-transform: lowercase;
  }
  &:nth-child(4) {
    width: 40%;
    text-transform: lowercase;
  }
  @media (max-width: 560px) {
    height: auto;
    padding: 3px 0%;
    &:nth-child(-n + 4) {
      width: auto;
    }
  }
`
export const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 5px;
`
