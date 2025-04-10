import styled from 'styled-components'

import style from '../atoms/atoms.module.css'


export function TitlePresentation() {
  return (
    <Container>
      <span className='textSecondary'>Soy Yhonder</span>
      <h1 className='Title'>Full <span className={style.mainText}>stack</span> developer</h1>
      <p>La programación es un viaje emocionante que despierta mi curiosidad y me impulsa a seguir aprendiendo, ya que cada línea de código es una oportunidad para crear y transformar ideas en realidad.</p>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #f5f5f5;

  p{
    width: 600px;
    font-size: 18px;
    text-align: center;
  }

  .textSecondary{
    font-size: 32px;
    font-weight: bold;
  }

  .Title{
    font-size: 80px;
    color: #003ECD;
    margin: 0;
    text-shadow: 0 2px 5px #003ECD;
  }

`;
