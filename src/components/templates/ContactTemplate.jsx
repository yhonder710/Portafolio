import styled from 'styled-components'
import { ContentContact } from '../../index.js'


export function ContactTemplate() {
  return (
    <Container>
      <ContentContact />
    </Container>
  );
};

const Container = styled.div`
   width: 100%;
   height: 90vh;
`;
