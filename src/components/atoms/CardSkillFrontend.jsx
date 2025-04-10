import styled from 'styled-components'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";




export function CardSkillFrontend() {
  return (
    <Container>
      <h4>Frontend</h4>
      <div className='ContainerCardIcon'>
        <FaHtml5 className='IconCard' color='#ff6800' />
        <FaCss3Alt className='IconCard' color='#1879d3' />
        <FaJsSquare className='IconCard' color='#FFDF00' />
        <FaReact className='IconCard' color='#00ACEA' />
        <RiTailwindCssFill className='IconCard' color='#0d8ab8' />
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
  box-shadow: 0 0 8px #003ECD;
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
    flex-wrap: wrap;
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
        -webkit-text-stroke: 1.5px #00ffb9;
        text-shadow: 0 0 13px #00ffb9;
      }
    }
`;
