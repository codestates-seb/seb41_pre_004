import { StyledNavButton } from '../../styles/headerStyle';
import { ReactComponent as MenuIcon } from '../../assets/icons/menuIcon.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/closeIcon.svg';

const NavButton = ({ isOpen }) => {
  return (
    <>
      {isOpen ? (
        <StyledNavButton type="button" aria-label="Close the TabMenu">
          <CloseIcon />
        </StyledNavButton>
      ) : (
        <StyledNavButton type="button" aria-label="Open the TabMenu">
          <MenuIcon />
        </StyledNavButton>
      )}
    </>
  );
};

export default NavButton;
