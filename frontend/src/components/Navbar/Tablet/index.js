import { Link } from 'react-router-dom';
import { NavbarBlock } from '../../../styles/NavbarStyles';

const TabletNav = () => {
  return (
    <NavbarBlock>
      <ol>
        <li aria-label="Go to Home page">
          <Link to="/">Home</Link>
        </li>
        <li>
          <h2>Public</h2>
          <ol>
            <li aria-label="Go to Questions page">Questions</li>
            <li aria-label="Go to Tags page">Tags</li>
            <li aria-label="Go to Users page">Users</li>
            <li aria-label="Go to Companies">Companies</li>
          </ol>
        </li>
        <li>
          <h2>Collectives</h2>
          <Link to="/collectives">Explore Collectives</Link>
        </li>
        <li>
          <h2>Teams</h2>
          <a href="https://stackoverflowteams.com/teams/create/free?utm_source=so-owned&utm_medium=side-bar&utm_campaign=campaign-38&utm_content=cta">
            Create free Team
          </a>
        </li>
      </ol>
    </NavbarBlock>
  );
};

export default TabletNav;
