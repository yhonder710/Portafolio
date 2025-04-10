import styled from 'styled-components'
import { useState } from 'react';


export function BtnModosOscuro() {
  const [toggle, setToggle] = useState(false)

  const handleTogle = () => {
    setToggle(!toggle)
  }

  const classTogle = toggle ? 'toggle on' : 'toggle'
  const classMoon = toggle ? 'moon on' : 'moon'
  const classSun = toggle ? 'sun' : 'sun on'


  return (
    <Container onClick={handleTogle}>
      <span className={classSun}>ES</span>
      <div className={classTogle}></div>
      <span className={classMoon}>EN</span>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border: 1px solid #003ECD;
  padding: 8px;
  border-radius: 15px;
  box-shadow:    0 0 5px #003ECD;
  transition: 500ms;
  cursor: pointer;


  .toggle{
    width: 50px;
    height: 20px;
    border: 2px solid #003ECD;
    border-radius: 10px;
    position: relative;
    transition: 500ms;

    &::before{
      content: "";
      width: 10px;
      height: 10px;
      background-color: #003ECD;
      position: absolute;
      top: 3px;
      left: 4px;
      border-radius: 50%;
      transition: 500ms;
    }
  }

  .toggle.on{
    &::before{
      transform: translateX(28px);
    }
  }

  .sun{
    color: #003ECD;
    transition: 500ms;
    font-size: 24px;
    font-family: "Averia Serif Libre", serif;
  }

  .sun.on{
    color: #00faf6;
    text-shadow: 0 0 6px #00faf67f;
    animation: animacionLuces 1.3s alternate infinite;
  }

  .moon{
    color: #003ECD;
    transition: 500ms;
    font-size: 24px;
    font-family: "Averia Serif Libre", serif;
  }

  .moon.on{
    color: #00faf6;
    text-shadow: 0 0 6px #00faf67f;
    animation: animacionLuces 1.3s alternate infinite;
  }

  &:hover{
    border: 1px solid #003ECD;
    box-shadow: 0 0 5px #003ECD,
                0 0 15px #003ECD;

    .toggle{
      border: 2px solid #00ffb9;

      &::before{
        background-color: #00ffb9;
      }
    }
  }

  @keyframes animacionLuces {
    from{
      opacity: 30%;
    }
    to{
      opacity: 100%;
    }
  }
`;
