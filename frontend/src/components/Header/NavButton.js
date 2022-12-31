import { useState } from 'react';
import {
  StyledNavBlock,
  NavMenuButton,
  NavCancleButton,
} from '../../styles/headerStyle';

const NavButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
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
