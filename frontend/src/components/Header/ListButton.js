import { listIcon } from '../../assets/headerIcons';

const ListButton = () => {
  return (
    <>
      <button type="button" title="A list of all 181 Stack Exchange sites">
        <img src={listIcon} alt="" />
      </button>
    </>
  );
};

export default ListButton;
