import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const LoaderRoller = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
   :after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #000000;
    border-color: #000000 transparent #000000 transparent;
    animation: ${rotate} 1.2s linear infinite;
  }
`