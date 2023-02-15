import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  background: ${primaryColor};
  padding: 20px;
  display: flex;
  align-itens: center;
  justify-content: center;

  a {
    color: #FFF;
    margin: 0 10px 0 0;
    font-weight: bold;
  }
`;