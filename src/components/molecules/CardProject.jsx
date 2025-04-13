import styled from "styled-components"
import { FaExternalLinkAlt } from "react-icons/fa";


export function CardProject({ description, icon, urlImg }) {
  return (
    <Container>
      <div className="ContainerProjects">
        <img src={urlImg} alt="imagen del projecto" />
        <section className="ContainerInfor">
          <div>
            <h5>Projecto</h5>
            <p>{description}</p>
          </div>
          <div className="iconProject">
            {icon}
          </div>
          <div className="link">
            <a href="#"><FaExternalLinkAlt size={20} className="iconLink" /></a>
          </div>
        </section>
      </div>
    </Container>
  )
}

const Container = styled.div`


  .ContainerProjects{
    width: 850px;
    height: 350px;
    background-color: #00000058;
    border: 1px solid #003ECD;
    box-shadow: 0 0 8px #003ECD;
    border-radius: 15px;
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 25px;
    color: #f5f5f5;
    position: relative;
    transition: 300ms;

    img{
      width: 330px;
      height: auto;
      border-radius: 15px;
    }

    h5{
      font-size: 2rem;
      margin: 0;
      color: #003ECD;
      text-shadow: 0 0 4px #003ECD;
      text-align: center;
      transition: linear 500ms;
    }

    .link{
      position: absolute;
      right: 10px;

      .iconLink{
        color: #003ECD;
        transition: linear 500ms;
      }
    }

    .ContainerInfor{
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .iconProject{
        border: 1px solid #003ecd6a;
        box-shadow: 0 0 4px #003ECD;
        border-radius: 10px;
        height: 80px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3rem;
        gap: 20px;

      }
    }

    &:hover{
      box-shadow: 0 0 8px #003ECD,
                0 0 15px #003ECD;

      h5{
        color: #00ffb9;
      text-shadow: 0 0 4px #00ffb9;
      }

      .iconLink{
        color: #00ffb9;
      }
    }
  }
`;
