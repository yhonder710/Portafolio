import styled from 'styled-components'

export function LucesNeon({ left, bot, right, top, color }) {
  return (
    <LuceNeon anguloLeft={left} anguloBotton={bot} anguloRight={right} anguloTop={top} color={color}>

    </LuceNeon>
  );
};

const LuceNeon = styled.div.withConfig({
  shouldForwardProp: (prop) => !['anguloLeft', 'anguloBotton', 'anguloRight', 'anguloTop', 'color'].includes(prop),
})`
  width: 35px;
  height: 35px;
  background-color: #003ECD;
  box-shadow: 0 0 5px #003ECD;
  filter: blur(20px);
  border-radius:50%;
  position: absolute;
  left: ${((props) => props.anguloLeft)};
  right: ${((props) => props.anguloRight)};
  top: ${((props) => props.anguloTop)};
  bottom: ${((props) => props.anguloBotton)};

  @property --angle{
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }

  &::after, &::before{
    --angle: 180deg;
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: conic-gradient(from var(--angle),  transparent 40%, ${((props) => props.color)} );
    border-radius: 50%;
    padding: 3px;
    top: 50%;
    left: 49%;
    translate: -50% -50%;
    z-index: -1;
    animation: 1s spin linear infinite;
  }

  &::before{
    filter: blur(5px);
    opacity: 0.6;
  }

  @keyframes spin {
    from{
      --angle: 0deg;
    }
    to{
      --angle: 360deg;
    }
  }

`;
