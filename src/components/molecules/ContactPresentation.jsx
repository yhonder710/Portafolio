import styled from 'styled-components'
import { BtnContact, BtnCv } from '../../index.js'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";




export function ContactPresentation() {
  return (
    <Container>
      <a target="_blank" href="https://www.linkedin.com/in/yhonder-aguero-a86991331/"><BtnContact iconContact={<FaLinkedin />} /></a>
      <a target="_blank" href="https://github.com/yhonder710"><BtnContact iconContact={<FaGithubSquare />} /></a>
      <a target="_blank" href="#"><BtnCv /></a>
    </Container>
  );
};

const Container = styled.div`
  width: 500px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
