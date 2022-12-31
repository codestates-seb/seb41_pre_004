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
} from '../../../styles/navbarStyle';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const TabletNav = () => {
  const activeTab = useSelector((state) => state.activeTab);
  const dispatch = useDispatch();

  return (
    <NavbarWrapper>
      <NavbarBlock>
        <ol>
          <li aria-label="Go to Home page">
            <Link
              to="/"
              onClick={() => dispatch({ type: 'ACTIVETAB', value: 0 })}
            >
              <NavPrimary selected={activeTab === 0} className="home">
                Home
              </NavPrimary>
            </Link>
          </li>
          <li>
            <NavTitle>
              <h2>Public</h2>
            </NavTitle>
            <ol>
              <li aria-label="Go to Questions page">
                <Link
                  to="/questions"
                  onClick={() => dispatch({ type: 'ACTIVETAB', value: 1 })}
                >
                  <NavQuestion selected={activeTab === 1}>
                    <QuestionIcon className="question" />
                    <span>Questions</span>
                  </NavQuestion>
                </Link>
              </li>
              <li aria-label="Go to Tags page">
                <Link
                  to="/tags"
                  onClick={() => dispatch({ type: 'ACTIVETAB', value: 2 })}
                >
                  <NavPublic selected={activeTab === 2}>Tags</NavPublic>
                </Link>
              </li>
              <li aria-label="Go to Users page">
                <Link
                  to="/users"
                  onClick={() => dispatch({ type: 'ACTIVETAB', value: 3 })}
                >
                  <NavPublic selected={activeTab === 3}>Users</NavPublic>
                </Link>
              </li>
              <li aria-label="Go to Companies">
                <Link
                  to="/jobs/Companies"
                  onClick={() => dispatch({ type: 'ACTIVETAB', value: 4 })}
                >
                  <NavPublic selected={activeTab === 4}>Companies</NavPublic>
                </Link>
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

export default TabletNav;
