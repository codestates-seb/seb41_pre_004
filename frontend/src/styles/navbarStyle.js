import styled, { css } from 'styled-components';

export const NavbarWrapper = styled.nav`
  height: 100%;
  border-right: 1px solid #d7d9dd;
`;

export const MobileNavbar = styled.div`
  position: fixed;
  top: 53px;
  left: 0;
  width: 240px;
  padding-top: 24px;
  padding-bottom: 8px;
  border-right: 1px solid #d7d9dd;
  border-bottom: 1px solid #d7d9dd;
  background-color: #ffffff;
`;

export const NavbarBlock = styled.div`
  position: sticky;
  top: 53px;
  width: 164px;
  padding-top: 24px;
  margin-bottom: 8px;
  background-color: #ffffff;
`;

export const NavTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 8px 4px 8px;

  h2 {
    font-size: 11px;
    font-weight: 400;
    color: #6a737c;
    text-transform: uppercase;
  }

  svg {
    fill: #6b737c;
  }
`;

export const NavPrimary = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 34px;
  padding: 4px 4px 4px 8px;
  font-size: 13px;
  font-weight: 400;
  color: #525960;
  cursor: pointer;

  &:hover {
    color: #0c0d0e;

    .home,
    .collective,
    .team {
      color: #0c0d0e;
    }

    .question {
      fill: #0c0d0e;
    }
  }

  ${(props) =>
    props.selected &&
    css`
      border-right: 3px solid #f48123;
      font-weight: 700;
      color: #0c0d0e;
      background-color: #f0f2f4;

      .home,
      .collective,
      .team {
        font-weight: 700;
        color: #0c0d0e;
      }

      .question {
        fill: #0c0d0e;
      }
    `}
`;

export const NavPublic = styled(NavPrimary)`
  width: 100%;
  padding-left: 30px;
`;

export const NavQuestion = styled(NavPrimary)`
  width: 100%;
  padding: 8px 6px 8px 6px;

  svg {
    fill: #848c95;
    margin-right: 4px;
    margin-top: -4px;
  }
`;

export const NavEtc = styled(NavQuestion)`
  svg {
    fill: #f48123;
  }

  a {
    display: block;
    font-size: 13px;
    font-weight: 400;
    color: #525960;
  }
`;

export const NavTeams = styled(NavEtc)`
  svg {
    fill: #ffffff;
  }
`;

export const TeamsIcon = styled.div`
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 3px;
  background-color: #f48123;
  margin-top: -4px;
  margin-right: 4px;

  .bag {
    position: absolute;
    top: 1px;
    left: 1px;
    margin-top: 0;
  }

  .key {
    position: absolute;
    right: -6px;
    bottom: -3px;

    path:last-child {
      fill: #6b737c;
    }
  }
`;
