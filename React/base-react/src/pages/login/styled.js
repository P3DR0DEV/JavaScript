import styled from 'styled-components';

const Title = styled.h1`
  color: ${(props) => props.isRed ? 'red' : 'blue'};
  small {
    font-size: 12px;
    color: #999;
    display: block;
  }
`;

export {
  Title,
};
