import styled from 'styled-components'
import style from '../atoms/atoms.module.css'

export function TitleContact() {
  return (
    <Container>
      <h3 className={style.mainText}>Contactame</h3>
    </Container>
  );
};

const Container = styled.div`
 h3{
    font-size: 80px;
    margin: 0;
    margin-bottom: 20px;
    text-align: center;
  }
`;
