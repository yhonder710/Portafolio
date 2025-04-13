import { PiReadCvLogoLight } from "react-icons/pi";

import styled from 'styled-components'


export function BtnCv() {
  return (
    <ButtonContainer>
      <span className='iconContact'><PiReadCvLogoLight /></span>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #003ECD;
  gap: 5px;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 35px;
  transition: 1s;

  span{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .iconContact{
    color: #003ECD;
    font-size: 60px;
    filter: drop-shadow(0 0 2px #003ecd5e);
    transition: 1s;
    transform: rotate(-10deg) translateY(-3px);
  }

  &:hover{
    color: #00ffb9;
    .iconContact{
      color: #00ffb9;
      filter: drop-shadow(0 0 2px #00ffbb75);
    }
  }


`;
