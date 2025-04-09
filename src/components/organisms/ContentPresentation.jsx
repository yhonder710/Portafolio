import styled from 'styled-components'
import { TitlePresentation, ContactPresentation, LucesNeon } from '../../index.js'




export function ContentPresentation() {


  return (
    <Container>
      <TitlePresentation />
      <ContactPresentation />
      <LucesNeon left={"40px"} color={"#00ffb9"} />
      <LucesNeon left={"300px"} bot={"70px"} color={"#8b0c03"} />
      <LucesNeon left={"250px"} top={"60px"} color={"#1900ff"} />
      <LucesNeon right={"60px"} top={"60px"} color={"#cc00ff"} />
      <LucesNeon left={"360px"} top={"160px"} color={"#3cff00"} />
      <LucesNeon right={"50%"} top={"80px"} color={"#ff8800"} />
      <LucesNeon right={"100px"} bot={"150px"} color={"#9900ff"} />
      <LucesNeon right={"400px"} bot={"40px"} color={"#ff0062"} />
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

`;
