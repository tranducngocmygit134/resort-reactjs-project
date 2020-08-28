import styled from 'styled-components';
import defaultImg from '../images/defaultBcg.jpeg';

const StyledHero = styled.header`
  min-height: 60vh;
  background: url(${(props) => (props.img ? props.img : defaultImg)});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
`;

export { StyledHero };
