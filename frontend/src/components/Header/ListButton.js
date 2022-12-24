import { listIcon } from '../../assets/headerIcons';
import { PrimaryButton } from '../../styles/headerStyles';

const ListButton = () => {
  return (
    <>
      <PrimaryButton
        type="button"
        title="A list of all 181 Stack Exchange sites"
      >
        <img src={listIcon} alt="" />
      </PrimaryButton>
    </>
  );
};

export default ListButton;
