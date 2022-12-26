import styled from 'styled-components';

export const SidebarWrapper = styled.aside`
  flex-shrink: 0;
  width: 300px;
  height: 100%;
  margin-left: 24px;
  margin-bottom: 15px;
`;

export const SidebarPost = styled.div`
  width: 300px;
  border-radius: 3px;
  background-color: #fcf6e2;
  overflow: hidden;
  box-shadow: 0.5px 0.5px 5px rgba(0, 0, 0, 0.1),
    -0.5px 0 5px rgba(0, 0, 0, 0.1);
`;

export const PostTitle = styled.h3`
  padding: 12px 15px;
  font-size: 12px;
  font-weight: 700;
  color: #525960;
  background-color: #fcf2d4;
  border-top: 1px solid #f1e5bc;
  border-bottom: 1px solid #f1e5bc;
`;

export const PostDesc = styled.div`
  display: flex;
  height: 34px;
  padding: 0 16px;
  margin: 12px 0;
`;

export const PostIcon = styled.div`
  margin-right: 8px;
`;

export const PostItem = styled.div`
  font-size: 13px;
  color: #3b4045;

  p {
    color: #6a737c;
    font-style: italic;
  }
`;
