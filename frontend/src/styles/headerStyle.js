import styled, { css } from 'styled-components';
import menuIcon from '../assets/icons/menuIcon.svg';
import closeIcon from '../assets/icons/closeIcon.svg';

export const HeaderBlock = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 51px;
  border-top: 3px solid #f48225;
  background-color: #f7faf9;
  box-shadow: 0 1px 2px 1px #e7e7e7;
  z-index: 10;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1264px;
`;

export const FlexBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const MobileFlexBlock = styled(FlexBlock)`
  justify-content: space-between;
`;

export const LeftBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const RightBlock = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  overflow-x: auto;
`;

export const Logo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  padding: 6px 8px 10px;
  transition: background-color 0.5s;

  img {
    width: 150px;
    height: 30px;
  }

  &:hover {
    background-color: #e3e6e8;
  }
`;

export const MobileLogo = styled(Logo)`
  padding: 0 6px;

  img {
    width: 25px;
    height: 30px;

    path:first-child {
      color: #bbbbbb;
    }
    path:last-child {
      color: #f38021;
    }
  }
`;

export const MenuButton = styled.button`
  font-size: 13px;
  padding: 6px 12px;
  border-radius: 100px;
  color: #525960;
  transition: background-color 0.5s;

  &:hover {
    color: #232629;
    background-color: #e3e6e8;
  }
`;

export const MobileMenuButton = styled(MenuButton)`
  font-size: 11px;
`;

export const ProductsButton = styled(MenuButton)`
  ${(props) =>
    props.selected &&
    css`
      color: #ffffff;
      background-color: #f48225;

      &:hover {
        color: #ffffff;
        background-color: #da680b;
      }
    `}
`;

export const MobileProductsButton = styled(MobileMenuButton)`
  ${(props) =>
    props.selected &&
    css`
      color: #ffffff;
      background-color: #f48225;

      &:hover {
        color: #ffffff;
        background-color: #da680b;
      }
    `}
`;

export const LogButton = styled.strong`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 33px;
  font-size: 13px;
  font-weight: bold;
  border-radius: 3px;
  cursor: pointer;
`;

export const LoginButton = styled(LogButton)`
  width: 60px;
  margin-right: 4px;
  border: 1px solid #98abb8;
  color: #39739d;
  background-color: #e1ecf4;
  transition: background-color 0.5s;

  &:hover {
    color: #2c5877;
    background-color: #b3d3ea;
  }
`;

export const SignupButton = styled(LogButton)`
  width: 68px;
  margin-right: 12px;
  border: 1px solid #0a95ff;
  color: #ffffff;
  background-color: #0a95ff;
  transition: background-color 0.5s;

  &:hover {
    background-color: #0074cc;
  }
`;

export const SearchBlock = styled.div`
  position: relative;
  flex-grow: 1;
  margin-right: 8px;
  margin-left: 8px;

  svg {
    position: absolute;
    top: 8px;
    left: 8px;
    fill: #525960;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 8px 9px 8px 32px;
  border: 1px solid #babec4;
  border-radius: 3px;

  &:focus {
    border: 1px solid #6bbbf6;
    outline: 3px solid #e7e7e7;
    -moz-outline-radius: 3px;
  }
`;

export const StyledNavBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    background-color: #e3e6e8;
  }
`;

export const StyledNavButton = styled.button`
  width: 16px;
  height: 16px;
`;

export const NavMenuButton = styled(StyledNavButton)`
  background-image: url(${menuIcon});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const NavCancleButton = styled(StyledNavButton)`
  background-image: url(${closeIcon});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const PrimaryButton = styled.button`
  height: 48px;
  padding: 0 10px;
  transition: background-color 0.5s;

  svg {
    fill: #525960;
  }
`;

export const HoverButton = styled(PrimaryButton)`
  &:hover {
    background-color: #e3e6e8;
  }
`;

export const MyPageButton = styled(HoverButton)`
  padding: 0 12px;

  img {
    width: 24px;
    height: 24px;
    border-radius: 3px;
  }
`;
