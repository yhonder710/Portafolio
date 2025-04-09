import styled from 'styled-components'
import { BtnNavSecondary } from '../../index.js'

import { FaRegUser } from "react-icons/fa6";
import { IoIosBody } from "react-icons/io";
import { PiProjectorScreenChartDuotone } from "react-icons/pi";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { Link } from 'react-router-dom';







export function NavOption() {
  return (
    <NavContainer>
      <Link to="/about"><BtnNavSecondary text={'About me'} icon={<FaRegUser />} /></Link>
      <Link to="/skill"><BtnNavSecondary text={'Skill'} icon={<IoIosBody />} /></Link>
      <Link to="/projects"><BtnNavSecondary text={'Projects'} icon={<PiProjectorScreenChartDuotone />} /></Link>
      <Link to="/contact"><BtnNavSecondary text={'Contact'} icon={<MdOutlinePermPhoneMsg />} /></Link>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  width: 600px;
  border: 1px solid #003ECD;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  transition: 500ms;
  box-shadow: 0 0 5px #003ECD;

  &:hover{
    border: 1px solid #003ECD;
    box-shadow: 0 0 5px #003ECD,
                0 0 15px #003ECD;
  }
`;
