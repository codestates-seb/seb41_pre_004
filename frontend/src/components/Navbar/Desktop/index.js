import { Link } from 'react-router-dom';
import { ReactComponent as QuestionIcon } from '../../../assets/icons/questionIcon.svg';
import { ReactComponent as InfoIcon } from '../../../assets/icons/infoIcon.svg';
import { ReactComponent as CollectiveIcon } from '../../../assets/icons/collectiveIcon.svg';
import { ReactComponent as Team1 } from '../../../assets/icons/team1.svg';
import { ReactComponent as Team2 } from '../../../assets/icons/team2.svg';
import {
  NavbarWrapper,
  NavbarBlock,
  NavTitle,
  NavPrimary,
  NavPublic,
  NavQuestion,
  NavEtc,
  NavTeams,
  TeamsIcon,
} from '../../../styles/navbarStyles';

const DesktopNav = () => {
  return (
    <NavbarWrapper>
      <NavbarBlock>
        <ol>
          <li aria-label="Go to Home page">
            <Link to="/">
              <NavPrimary className="home">Home</NavPrimary>
            </Link>
          </li>
          <li>
            <NavTitle>
              <h2>Public</h2>
            </NavTitle>
            <ol>
              <li aria-label="Go to Questions page">
                <NavQuestion selected={true}>
                  <QuestionIcon className="question" />
                  <span>Questions</span>
                </NavQuestion>
              </li>
              <li aria-label="Go to Tags page">
                <NavPublic>Tags</NavPublic>
              </li>
              <li aria-label="Go to Users page">
                <NavPublic>Users</NavPublic>
              </li>
              <li aria-label="Go to Companies">
                <NavPublic>Companies</NavPublic>
              </li>
            </ol>
          </li>
          <li>
            <NavTitle>
              <h2>Collectives</h2>
              <InfoIcon />
            </NavTitle>
            <NavEtc>
              <CollectiveIcon />
              <Link to="/collectives" className="collective">
                Explore Collectives
              </Link>
            </NavEtc>
          </li>
          <li>
            <NavTitle>
              <h2>Teams</h2>
              <InfoIcon />
            </NavTitle>
            <NavTeams>
              <TeamsIcon>
                <Team1 className="bag" />
                <Team2 className="key" />
              </TeamsIcon>
              <a
                className="team"
                href="https://stackoverflowteams.com/teams/create/free?utm_source=so-owned&utm_medium=side-bar&utm_campaign=campaign-38&utm_content=cta"
              >
                Create free Team
              </a>
            </NavTeams>
          </li>
        </ol>
      </NavbarBlock>
    </NavbarWrapper>
  );
};

export default DesktopNav;
