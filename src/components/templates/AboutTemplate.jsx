import styled from 'styled-components'
import { ContentAbout } from '../../index.js'

export function AboutTemplate() {
  return (
    <Container>
      <ContentAbout />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 90vh;
`;
