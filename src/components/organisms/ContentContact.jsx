import styled from 'styled-components'
import { TitleContact, BtnCardContact, CardEmail, LucesNeon } from '../../index.js'
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { PiReadCvLogoLight } from "react-icons/pi";

export function ContentContact() {
  return (
    <Container>
      <TitleContact />
      <div className='ContainerCardContact'>
        <a target="_blank" href="https://www.linkedin.com/in/yhonder-aguero-a86991331/"><BtnCardContact text={"LinkedIn"} iconCardContact={<FaLinkedin />} /></a>
        <a target="_blank" href="https://github.com/yhonder710"><BtnCardContact text={"GitHub"} iconCardContact={<BsGithub />} /></a>
        <a href="#"><BtnCardContact text={"Descarga mi CV"} iconCardContact={<PiReadCvLogoLight />} /></a>
        <LucesNeon left={"40px"} color={"#00ffb9"} />
        <LucesNeon left={"200px"} bot={"70px"} color={"#8b0c03"} />
        <LucesNeon left={"250px"} top={"60px"} color={"#1900ff"} />
        <LucesNeon right={"60px"} top={"60px"} color={"#cc00ff"} />
        <LucesNeon left={"360px"} top={"160px"} color={"#3cff00"} />
        <LucesNeon right={"50%"} top={"80px"} color={"#ff8800"} />
        <LucesNeon right={"100px"} bot={"150px"} color={"#9900ff"} />
        <LucesNeon right={"200px"} bot={"40px"} color={"#ff0062"} />
      </div>
      <CardEmail />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  position: relative;
  gap: 40px;

  .ContainerCardContact{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;

  }
`;
