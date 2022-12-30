import { Mobile, Tablet, Desktop } from '../Responsive';
import { ReactComponent as PencilIcon } from '../../assets/icons/pencilIcon.svg';
import { ReactComponent as MetaIcon } from '../../assets/icons/metaIcon.svg';

import {
  SidebarWrapper,
  SidebarPost,
  PostTitle,
  PostDesc,
  PostIcon,
  PostItem,
} from '../../styles/sidebarStyle';

const Sidebar = () => {
  return (
    <>
      <Mobile></Mobile>

      <Tablet></Tablet>

      <Desktop>
        <SidebarWrapper>
          <SidebarPost>
            <ul>
              <li>
                <PostTitle>The Overflow Blog</PostTitle>
              </li>
              <li>
                <PostDesc>
                  <PostIcon>
                    <PencilIcon />
                  </PostIcon>
                  <PostItem>
                    The complete guide to protecting your APIs with OAuth2 (part
                    1)
                  </PostItem>
                </PostDesc>
              </li>
              <li>
                <PostDesc>
                  <PostIcon>
                    <PencilIcon />
                  </PostIcon>
                  <PostItem>
                    The three top-paying tech roles in 2022 and the skills you
                    need to land them
                    <p>sponsored post</p>
                  </PostItem>
                </PostDesc>
              </li>
              <li>
                <PostTitle>Featured on Meta</PostTitle>
              </li>
              <li>
                <PostDesc>
                  <PostIcon>
                    <MetaIcon />
                  </PostIcon>
                  <PostItem>Navigation and UI research starting soon</PostItem>
                </PostDesc>
              </li>
              <li>
                <PostDesc>
                  <PostIcon>
                    <MetaIcon />
                  </PostIcon>
                  <PostItem>
                    2022 Community Moderator Election Results - now with two
                    more mods!
                  </PostItem>
                </PostDesc>
              </li>
              <li>
                <PostDesc>
                  <PostIcon>
                    <MetaIcon />
                  </PostIcon>
                  <PostItem>I'm standing down as a moderator</PostItem>
                </PostDesc>
              </li>
              <li>
                <PostDesc>
                  <PostIcon>
                    <MetaIcon />
                  </PostIcon>
                  <PostItem>Temporary policy: ChatGPT is banned</PostItem>
                </PostDesc>
              </li>
              <li>
                <PostTitle>Hot Meta Posts</PostTitle>
              </li>
              <li>
                <PostDesc>
                  <PostIcon>9</PostIcon>
                  <PostItem>
                    How are bounties awarded to ChatGPT-sourced answerers
                    handled?
                  </PostItem>
                </PostDesc>
              </li>
            </ul>
          </SidebarPost>
        </SidebarWrapper>
      </Desktop>
    </>
  );
};

export default Sidebar;
