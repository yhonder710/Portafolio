import styled from 'styled-components'



export function BtnCardContact({ text, iconCardContact }) {
  return (
    <Container>
      <span className='IconCartContact'>{iconCardContact}</span>
      <h5>{text}</h5>
    </Container>
  );
};

const Container = styled.button`
  width: 350px;
  height: 130px;
  background-color: #0000007a;
  border: 1px solid #003ECD;
  border-radius: 20px;
  color: #f5f5f5;
  cursor: pointer;
  box-shadow:    0 0 5px #003ECD;
  transition: 500ms;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;


  span{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h5{
    margin: 0;
    font-size: 2rem;
    filter: drop-shadow(0 0 2px #f5f5f55e);
    transition: 500ms;
  }

  .IconCartContact{
    font-size: 70px;
    filter: drop-shadow(0 0 1.5px #f5f5f56e);
    transition: 500ms;
  }

  &:hover{
    box-shadow: 0 0 5px #003ECD,
                0 0 15px #003ECD;


    .IconCartContact{
      color: #003ECD;
      filter: drop-shadow(0 0 1.5px #003ECD);
    }
  }
`;
