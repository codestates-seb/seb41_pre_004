import styled from 'styled-components';

const ContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 53px;
`;

const ContainerBlock = styled.div`
  display: flex;
  width: 100%;
  max-width: 1264px;
`;

const Container = ({ children }) => {
  return (
    <ContainerWrapper>
      <ContainerBlock>{children}</ContainerBlock>
    </ContainerWrapper>
  );
};

export default Container;
