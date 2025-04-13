import styled from 'styled-components'
import { } from '../../index.js'
import { ContentProjects } from '../organisms/ContentProjects.jsx';

export function ProjectsTemplate() {
  return (
    <Container>
      <ContentProjects />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;
