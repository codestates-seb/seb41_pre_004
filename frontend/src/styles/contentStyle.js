import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 53px;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1264px;
`;

export const ContainerFlex = styled(Container)`
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-grow: 1;
`;
export const MobileContent = styled(Content)`
  padding: 24px 16px;
`;
export const DesktopContent = styled(Content)`
  padding: 24px;
`;

export const ContentBlock = styled.main`
  width: 100%;
  min-height: 500px;
  margin-bottom: 48px;
`;

export const SideBlock = styled.div`
  padding: 24px;
`;

export const DetailSideBlock = styled(SideBlock)`
  padding: 0 0 0 24px;
`;
