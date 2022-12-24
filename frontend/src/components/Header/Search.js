import { Desktop, Tablet, Mobile } from '../Responsive';
import { searchIcon } from '../../assets/headerIcons';
import {
  SearchBlock,
  SearchButton,
  SearchInput,
  SearchIcon,
} from '../../styles/headerStyles';

const Search = () => {
  return (
    <>
      <Mobile>
        <SearchButton type="button" title="Click to show search">
          <img src={searchIcon} alt="" />
        </SearchButton>
      </Mobile>

      <Tablet>
        <SearchBlock>
          <SearchIcon src={searchIcon} alt="" />
          <SearchInput type="text" placeholder="Search..." />
        </SearchBlock>
      </Tablet>

      <Desktop>
        <SearchBlock>
          <SearchIcon src={searchIcon} alt="" />
          <SearchInput type="text" placeholder="Search..." />
        </SearchBlock>
      </Desktop>
    </>
  );
};

export default Search;
