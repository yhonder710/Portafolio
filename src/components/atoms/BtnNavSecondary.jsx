import styled from 'styled-components'


export function BtnNavSecondary({ text, icon }) {
  return (
    <Container>
      <span className='btnNavIcon'>{icon}</span>
      {text}
    </Container>
  );
};

const Container = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  font-family: "Averia Serif Libre", serif;
   text-shadow: 0 2px 2px #00000018;
  cursor: pointer;

  .btnNavIcon{
    font-size: 24px;
    color: #003ECD;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 150ms;
  }

  &:hover{

    .btnNavIcon{
      color: #00ffb9;
      filter: drop-shadow(0 0 1px #00ffb9);
    }
  }
`;
