import styled from 'styled-components'
import { FaGoogle } from "react-icons/fa";
import { LuCopy } from "react-icons/lu";
import { useEffect, useRef, useState } from 'react';
import { FaRegCheckCircle } from "react-icons/fa";




export function CardEmail() {
  const modalRef = useRef("yhonderaguero@gmail.com")
  const [modal, setModal] = useState(false)

  const classModal = modal ? 'modal on' : 'modal'


  const copiarEmail = () => {
    navigator.clipboard.writeText(modalRef.current)
    setModal(true)
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (modal === true) {
        setModal(false)
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [modal]);

  return (
    <>
      <Container>
        <FaGoogle className='iconGoogle' />
        <strong>{modalRef.current}</strong>
        <button onClick={copiarEmail}><LuCopy /></button>
      </Container>
      <Modal >
        <div className={classModal}>
          <FaRegCheckCircle color='#2bd600' size={25} />
          <span>Email copiado</span>
        </div>
      </Modal>
    </>
  );
};

const Container = styled.div`
  width: 650px;
  height: 130px;
  background-color: #0000007a;
  border: 1px solid #003ECD;
  border-radius: 20px;
  color: #f5f5f5;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 0 5px #003ECD;
  transition: 500ms;
  cursor: pointer;

  .iconGoogle{
    font-size: 60px;
    filter: drop-shadow(0 0 1.5px #f5f5f57f);
    transition: 500ms;
  }

  strong{
    font-size: 2.2rem;
    filter: drop-shadow(0 0 2px #f5f5f545);
  }

  button{
    background-color: transparent;
    color: #003ECD;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    cursor: pointer;
    transition: 500ms;

    &:hover{
      color: #00ffb9;
      filter: drop-shadow(0 0 1.5px #00ffb9);
    }
  }

  &:hover{
    box-shadow: 0 0 5px #003ECD,
                0 0 15px #003ECD;
    .iconGoogle{
      color: #003ECD;
      filter: drop-shadow(0 0 1.5px #003ECD);
    }

  }
`;

const Modal = styled.div`
  .modal{
    width: 170px;
    height: 45px;
    background-color: #000000a4;
    position: absolute;
    top: 20px;
    right: 0px;
    border-radius: 10px;
    border: 1px solid #ffffff58;
    justify-content: center;
    align-items: center;
    display: flex;
    gap: 10px;
    color: #2bd600;
    opacity: 0;
    transition: 500ms;
  }

  .modal.on{
    opacity: 100;
  }

`
