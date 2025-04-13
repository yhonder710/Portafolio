import style from '../atoms/atoms.module.css'
import styled from 'styled-components';
import { LucesNeon } from '../../index.js'
import { CardProject } from '../molecules/CardProject.jsx';
import { RiTailwindCssFill } from "react-icons/ri";


export function ContentProjects() {
  return (
    <Container>
      <h3 className={style.mainText}>Projects</h3>

      <CardProject
        urlImg={"https://imgs.search.brave.com/XcnjwsvlKxFOHM8OsuCgfqh-h0eZIfBC7KS_oJ24EUM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5waXRjaGZvcmsu/Y29tL3Bob3Rvcy81/OTI5ZjU1YjBjMmJi/YTFiN2RlMDM3OGYv/MToxL3dfMTAyNCxj/X2xpbWl0L2Y1ZDMw/MGZmLmpwZw"}
        icon={<RiTailwindCssFill color='#00cdc3' />}
        description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis necessitatibus dolorem quos? In rem ratione dolor temporibus perspiciatis voluptatum dicta quasi quae, facilis numquam laborum quam accusantium nulla dolorem quo?"}
      />


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
  gap: 40px;

  h3{
    font-size: 80px;
    margin: 0;
    text-align: center;
  }

`;
