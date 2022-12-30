import { Desktop, Tablet, Mobile } from '../Responsive';
import {
  SearchBlock,
  PrimaryButton,
  SearchInput,
} from '../../styles/headerStyle';
import { ReactComponent as SearchIcon } from '../../assets/icons/searchIcon.svg';

const Search = () => {

  

  return (
    <>
      <Mobile>
        <PrimaryButton type="button" title="Click to show search">
          <SearchIcon />
        </PrimaryButton>
      </Mobile>

      <Tablet>
        <SearchBlock>
          <SearchIcon />
          <SearchInput type="text" placeholder="Search..." />
        </SearchBlock>
      </Tablet>

      <Desktop>
        <SearchBlock>
          <SearchIcon />
          <SearchInput type="text" placeholder="Search..." />
        </SearchBlock>
      </Desktop>
    </>
  );
};

export default Search;
