import styled from 'styled-components'
import { ContentPresentation } from '../../index.js'

export function HomeTemplate() {
  return (
    <Container>
      <ContentPresentation />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 90vh;
`;
