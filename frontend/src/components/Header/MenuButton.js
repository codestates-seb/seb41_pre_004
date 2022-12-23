import { menuIcon, cancleIcon } from '../../assets/headerIcons';

const MenuButton = ({ isOpen }) => {
  return (
    <>
      {isOpen ? (
        <button type="button" aria-label="Close the TabMenu">
          <img src={cancleIcon} alt="" />
        </button>
      ) : (
        <button type="button" aria-label="Open the TabMenu">
          <img src={menuIcon} alt="" />
        </button>
      )}
    </>
  );
};

export default MenuButton;
