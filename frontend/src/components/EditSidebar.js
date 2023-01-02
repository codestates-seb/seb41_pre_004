import { Mobile, Tablet, Desktop } from './Responsive';

import {
  SidebarWrapper,
  SidebarPost,
  PostTitle,
  PostDesc,
  PostItem,
} from '../styles/sidebarStyle';
import styled from 'styled-components';

const EditSidebar = () => {
  return (
    <>
      <Mobile></Mobile>

      <Tablet></Tablet>

      <Desktop>
        <SidebarWrapper>
          <SidebarEdit>
            <EditTitle>How to Edit</EditTitle>
            <ul>
              <li>
                <PostItem>Correct minor typos or mistakes</PostItem>
              </li>
              <li>
                <PostItem>Clarify meaning without changing it</PostItem>
              </li>
              <li>
                <PostItem>Add related resources or links</PostItem>
              </li>
              <li>
                <PostItem>Always respect the author’s intent</PostItem>
              </li>
              <li>
                <PostItem>Don’t use edits to reply to the author</PostItem>
              </li>
            </ul>
          </SidebarEdit>
        </SidebarWrapper>
      </Desktop>
    </>
  );
};

const SidebarEdit = styled(SidebarPost)`
  ul {
    padding: 4px 15px 4px 30px;
    list-style: disc;

    li {
      margin: 12px 0;
    }
  }
`;

const EditTitle = styled(PostTitle)`
  font-size: 15px;
  font-weight: 400;
`;

export default EditSidebar;
