import styled from 'styled-components'
import { TitleSkill, CardSkillFrontend, CardSkillBackend, CardSkillTools, LucesNeon } from '../../index.js'

export function ContentSkill() {
  return (
    <Container>
      <TitleSkill />
      <div className='ContentCard'>
        <CardSkillFrontend />
        <CardSkillBackend />
        <CardSkillTools />
        <LucesNeon left={"200px"} bot={"20px"} color={"#8b0c03"} />
        <LucesNeon left={"150px"} top={"60px"} color={"#1900ff"} />
        <LucesNeon right={"60px"} top={"60px"} color={"#cc00ff"} />
        <LucesNeon left={"360px"} top={"100px"} color={"#3cff00"} />
        <LucesNeon right={"25%"} top={"120px"} color={"#ff8800"} />
        <LucesNeon right={"100px"} bot={"20px"} color={"#9900ff"} />
        <LucesNeon right={"600px"} bot={"40px"} color={"#ff0062"} />
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  position: relative;
  gap: 20px;

  .ContentCard{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
