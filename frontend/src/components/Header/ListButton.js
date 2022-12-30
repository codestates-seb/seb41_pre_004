import { HoverButton } from '../../styles/headerStyle';
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
