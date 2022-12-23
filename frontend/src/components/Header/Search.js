import styled from 'styled-components';
import { searchIcon } from '../../assets/headerIcons';
import { Desktop, Tablet, Mobile } from '../Responsive';

const SearchBlock = styled.div``;

const Search = () => {
  return (
    <SearchBlock>
      <Mobile>
        <button type="button" title="Click to show search">
          <img src={searchIcon} alt="" />
        </button>
      </Mobile>

      <Tablet>
        <input type="text" aria-label="Search" />
      </Tablet>

      <Desktop>
        <input type="text" aria-label="Search" />
      </Desktop>
    </SearchBlock>
  );
};

export default Search;
