import styled from 'styled-components'
import { ContentSkill } from '../../index.js'

export function SkillTemplate() {
  return (
    <Container>
      <ContentSkill />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 90vh;
`;
