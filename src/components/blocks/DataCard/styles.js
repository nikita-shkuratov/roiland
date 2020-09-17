import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`
export const Card = styled.div`
  display: flex;
  padding-top: 20px;
  background: rgba(252, 252, 252, 0.8);
  padding: 20px;
`
export const ImgBox = styled.div`
  img {
    width: 200px;
    @media (max-width: 560px) {
      width: 100px;
    }
  }
`
export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 0px 20px;
  color: #000000;
  font-size: 16px;
  p {
    margin-bottom: 10px;
    text-transform: uppercase;
  }
  @media (max-width: 560px) {
    font-size: 12px;
  }
`
export const List = styled.div`
  margin: 0 auto;
  width: 100%;
  h1 {
    color: #ffffff;
    -webkit-text-stroke: 1px #000000;
    font-size: 20px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 2.6px;
    border-bottom: 1px solid #ffffff;
    margin: 20px 0px 20px 0px;
  }
`
