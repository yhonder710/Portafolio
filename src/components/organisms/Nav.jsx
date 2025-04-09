import styled from "styled-components"
import { NavOption, BtnNavPrimary, NavModos } from '../../index.js'
import { Link } from 'react-router-dom'


export function Nav() {
  return (
    <Header>
      <Link to="/"><BtnNavPrimary /></Link>
      <NavOption />
      <NavModos />
    </Header>
  )
}

const Header = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;

  a{
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
