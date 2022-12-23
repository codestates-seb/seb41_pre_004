import styled from 'styled-components';
import { searchIcon } from '../../assets/headerIcons';
import { Desktop, Tablet, Mobile } from '../Responsive';

const SearchBlock = styled.div``;

const Search = () => {
  return (
    <SearchBlock>
      <Desktop>
        <input type="text" aria-label="Search" />
      </Desktop>
      <Tablet>
        <input type="text" aria-label="Search" />
      </Tablet>
      <Mobile>
        <button type="button" title="Click to show search">
          <img src={searchIcon} alt="" />
        </button>
      </Mobile>
    </SearchBlock>
  );
};

export default Search;
