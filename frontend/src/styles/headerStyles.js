import styled, { css } from 'styled-components';

export const HeaderBlock = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 51px;
  border-top: 3px solid #f48225;
  box-shadow: 0 1px 2px 1px #e7e7e7;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1264px;
`;

export const FlexBlock = styled.div`
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
  padding: 9px 10px;

  img {
    width: 25px;
    height: 30px;
  }
`;

export const MenuButton = styled.button`
  font-size: 13px;
  font-weight: bold;
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
`;

export const SearchButton = styled.button`
  height: 48px;
  padding: 15px 10px;
`;

export const SearchIcon = styled.img`
  position: absolute;
  top: 8px;
  left: 8px;
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

export const StyledNavButton = styled.button`
  width: 48px;
  height: 48px;
  padding: 16px;
  color: #232629;
  transition: background-color 0.5s;

  &:hover {
    background-color: #e3e6e8;
  }
`;

export const PrimaryButton = styled.button`
  width: 38px;
  height: 48px;
  padding: 12px 10px;
  transition: background-color 0.5s;

  img {
    width: 18px;
  }

  &:hover {
    background-color: #e3e6e8;
  }
`;

export const MyPageButton = styled(PrimaryButton)`
  width: 48px;

  img {
    width: 24px;
    height: 24px;
    border-radius: 3px;
  }
`;
