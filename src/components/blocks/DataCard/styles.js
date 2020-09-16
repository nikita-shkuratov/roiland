import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`
export const Card = styled.div`
  display: flex;
  padding-top: 20px;
  border-top: 1px solid #4d4959;
`
export const ImgBox = styled.div`
  img {
    width: 200px;
  }
`
export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 0px 20px;
  color: #4d4959;
  font-size: 16px;
  p {
    margin-bottom: 10px;
  }
`

export const List = styled.div`
  margin: 0 auto;
  width: 100%;
  h1 {
    color: #4d4959;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2.6px;
    border-bottom: 1px solid #4d4959;
    margin: 20px 0px 20px 0px;
  }
`
