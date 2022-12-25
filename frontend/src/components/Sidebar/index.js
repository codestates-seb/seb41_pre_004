import { Mobile, Tablet, Desktop } from '../Responsive';
import { SidebarWrapper, SidebarPost } from '../../styles/sidebarStyles';

const Sidebar = () => {
  return (
    <>
      <Mobile></Mobile>

      <Tablet></Tablet>

      <Desktop>
        <SidebarWrapper>
          <SidebarPost>
            <ul>
              <li>The Overflow Blog</li>
              <li>
                The complete guide to protecting your APIs with OAuth2 (part 1)
              </li>
              <li>
                The three top-paying tech roles in 2022 and the skills you need
                to land them
                <span>sponsored post</span>
              </li>
              <li>Featured on Meta</li>
              <li>Navigation and UI research starting soon</li>
              <li>
                2022 Community Moderator Election Results - now with two more
                mods!
              </li>
              <li>I'm standing down as a moderator</li>
              <li>Temporary policy: ChatGPT is banned</li>
              <li>Hot Meta Posts</li>
              <li>
                How are bounties awarded to ChatGPT-sourced answerers handled?
              </li>
            </ul>
          </SidebarPost>
        </SidebarWrapper>
      </Desktop>
    </>
  );
};

export default Sidebar;
