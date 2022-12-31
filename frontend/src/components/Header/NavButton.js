import { useState } from 'react';
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
        <StyledNavBlock>
          <NavCancleButton
            onClick={onToggle}
            type="button"
            aria-label="Close the TabMenu"
          />
        </StyledNavBlock>
      ) : (
        <StyledNavBlock>
          <NavMenuButton
            onClick={onToggle}
            type="button"
            aria-label="Open the TabMenu"
          />
        </StyledNavBlock>
      )}
    </>
  );
};

export default NavButton;
