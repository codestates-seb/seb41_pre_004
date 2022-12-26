import { HoverButton } from '../../styles/headerStyles';
import { ReactComponent as ListIcon } from '../../assets/icons/listIcon.svg';

const ListButton = () => {
  return (
    <>
      <HoverButton type="button" title="A list of all 181 Stack Exchange sites">
        <ListIcon />
      </HoverButton>
    </>
  );
};

export default ListButton;
