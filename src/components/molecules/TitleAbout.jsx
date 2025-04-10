import styled from 'styled-components'
import style from '../atoms/atoms.module.css'

export function TitleAbout() {
  return (
    <Container>
      <h2 className={style.mainText}>Sobre mi</h2>
      <div className='content'>
        <div className='text'>
          <h3>Es un placer conocerte, soy Yhonder</h3>
          <p>Me especializo tanto en frontend como en backend, lo que me permite tener una visión integral del desarrollo de aplicaciones. Mi curiosidad insaciable es lo que me lleva a aprender constantemente nuevas tecnologías y herramientas que mejoran mi capacidad de creación y optimización.</p>
          <p>Una de las características más destacadas  es mi capacidad para aprender rápidamente. No importa cuán complejas sean las tecnologías , siempre busco comprenderlas a fondo y aplicarlas con eficacia en mis proyectos. Esto me permite adaptarme a los cambios del sector tecnológico con facilidad.</p>
        </div>
        <div className='imgNeon'>
          <img src="https://imgs.search.brave.com/nHFizkqcc03cVkBonssb4t_8VMJTx6kS6q27Mmu-Iyo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtcHJlbWl1/bS9ob21icmUtZXN0/YS10cmFiYWphbmRv/LWNvbXB1dGFkb3Jh/LW51bWVyby00LWVs/Xzk3ODkxNC0yNDI3/MC5qcGc_c2VtdD1h/aXNfaHlicmlk" alt="imagen de perfil" />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  color: #f5f5f5;

  h2{
    font-size: 80px;
    margin: 0;
    margin-bottom: 20px;
    text-align: center;
  }

  .imgNeon{
    width: 280px;
    height: 280px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    align-items: center;
    position: relative;

    img{
    width: 280px;
    height: 280px;
    border-radius: 50%;
   }

   &::after, &::before{
    --angle: 180deg;
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: conic-gradient(from var(--angle),  transparent 20%, #003ECD );
    border-radius: 50%;
    padding: 6px;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    z-index: -1;
    animation: 5s spin linear infinite;
    filter: blur(10px);
  }

  &::before{
    filter: blur(20px);
    opacity: 0.5;
  }

  }

  .content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 50px;
    padding-right: 50px;
  }

  .text{
    width: 60%;

    p{
    font-size: 18px;
    }

   h3{
      color: #003ECD;
      font-size: 42px;
      font-weight: bold;
      text-shadow: 0 0 5px #003ECD;
    }
  }
`;
