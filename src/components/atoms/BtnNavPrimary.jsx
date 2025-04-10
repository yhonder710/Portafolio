import styled from "styled-components"
import { FaCode } from "react-icons/fa";


export function BtnNavPrimary() {
  return (
    <ButtonHome>
      <FaCode className="tf" />
      Inicio
    </ButtonHome>
  )
}

const ButtonHome = styled.button`
  background-color: transparent;
  color: white;
  font-size: 28px;
  display: flex;
  gap: 6px;
  align-items: center;
  border: 1px solid #003ECD;
  padding: 8px;
  border-radius: 10px;
  font-family: "Averia Serif Libre", serif;
  font-weight: 700;
  font-style: normal;
  transition: 500ms;
  text-shadow: 0 2px 2px #00000018;
  box-shadow:    0 0 5px #003ECD;
  cursor: pointer;

  .tf{
    font-size: 34px;
    filter: drop-shadow(0 0 2px #003ECD);
    color: #003ECD;
    animation: pulsecolor 5s alternate infinite;
  }

  &:hover{
    border: 1px solid #003ECD;
    box-shadow: 0 0 5px #003ECD,
                0 0 15px #003ECD;
  }

  @keyframes pulsecolor {
    0%{
      color: #003ECD;
      filter: drop-shadow(0 0 2px #003ECD);
    }
    25%{
      color: #b200ff;
      filter: drop-shadow(0 0 2px #b200ff);
    }
    50%{
      color: #13ff00;
      filter: drop-shadow(0 0 2px #13ff00);
    }
    75%{
      color: #ff6800;
      filter: drop-shadow(0 0 2px #ff6800);
    }
    100%{
      color: #00ffb9;
      filter: drop-shadow(0 0 2px #00ffb9);

    }
  }
`;
