import {
  StyledNavBlock,
  NavMenuButton,
  NavCancleButton,
} from '../../styles/headerStyle';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const NavButton = () => {
  const isOpen = useSelector((state) => state.menuOpen);
  const dispatch = useDispatch();

  const onToggle = () => {
    dispatch({ type: 'TOGGLEMENU', value: isOpen });
  };

  return (
    <>
      {isOpen ? (
        <StyledNavBlock onClick={onToggle}>
          <NavCancleButton type="button" aria-label="Close the TabMenu" />
        </StyledNavBlock>
      ) : (
        <StyledNavBlock onClick={onToggle}>
          <NavMenuButton type="button" aria-label="Open the TabMenu" />
        </StyledNavBlock>
      )}
    </>
  );
};

export default NavButton;
