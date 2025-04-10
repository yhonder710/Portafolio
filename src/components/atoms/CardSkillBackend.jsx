import styled from 'styled-components'
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNodejsLine } from "react-icons/ri";
import { RiSupabaseFill } from "react-icons/ri";
import { SiSqlite } from "react-icons/si";


export function CardSkillBackend() {
  return (
    <Container>
      <h4>Backend</h4>
      <div className='ContainerCardIcon'>
        <BiLogoPostgresql className='IconCard' color='#0084ff' />
        <RiNodejsLine className='IconCard' color='#00ff15d1' />
        <RiSupabaseFill className='IconCard' color='#18b971' />
        <SiSqlite className='IconCard' color='#0c82b9' />
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 400px;
  height: auto;
  border-radius: 15px;
  background-color: #0000005e;
  border: 2px solid #003ECD;
  box-shadow: 0 0 8px #003ecd81;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 40px;
  transition: 300ms;

  h4{
    font-size: 50px;
    margin: 10px;
    text-align: center;
    text-shadow: none;
    color: transparent;
    -webkit-text-stroke: 1.5px #003ECD;
    text-shadow: 0 0 13px #003ecda9;
    margin-bottom: 30px;
    transition: 500ms;
  }

  .ContainerCardIcon{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    .IconCard{
      font-size: 60px;
      color: ${((props) => props.colorIcon)};
      filter: drop-shadow(0 0 1.5px ${((props) => props.colorIcon)});
      transition: 100ms linear;

      &:hover{
        transform: translateY(-10px);
      }
    }
  }


  &:hover{
      box-shadow: 0 0 8px #003ECD,
                0 0 15px #003ECD;

      h4{
        -webkit-text-stroke: 1.5px #13ff00;
        text-shadow: 0 0 13px #13ff00;
      }
    }
`;
