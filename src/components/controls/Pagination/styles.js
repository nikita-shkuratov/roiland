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
`

const Li = styled.li`
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
  :hover {
    background: #d65db1;
  }
`

export const LiPrev = styled(Li)`
  background: ${props => (props.disabled ? '#fbeaff' : '#3e207c')};
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
`

export const LiNumbers = styled(Li)`
  background-color: ${props => (props.active ? '#ff6f91' : '#845ec2')};
  cursor: ${props => (props.active ? 'default' : 'pointer')};
  :hover{
    background: ${props => (props.active && '#ff6f91')};
  }
  @media (max-width: 700px) {
    display:none;
  }
`

export const LiNext = styled(LiPrev)`
  margin-right: 0px;
`
