import styled from 'styled-components'


export function BtnContact({ iconContact }) {
  return (
    <ButtonContainer>
      <span className='iconContact'>{iconContact}</span>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;

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
  }

  &:hover{
    .iconContact{
      color: #00ffb9;
      filter: drop-shadow(0 0 2px #00ffbb75);
    }
  }


`;
