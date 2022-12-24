import { menuIcon, cancleIcon } from '../../assets/headerIcons';
import { StyledNavButton } from '../../styles/headerStyles';

const NavButton = ({ isOpen }) => {
  return (
    <>
      {isOpen ? (
        <StyledNavButton type="button" aria-label="Close the TabMenu">
          <img src={cancleIcon} alt="" />
        </StyledNavButton>
      ) : (
        <StyledNavButton type="button" aria-label="Open the TabMenu">
          <img src={menuIcon} alt="" />
        </StyledNavButton>
      )}
    </>
  );
};

export default NavButton;
