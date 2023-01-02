import { HoverButton } from '../../styles/headerStyle';
import { ReactComponent as ListIcon } from '../../assets/icons/listIcon.svg';
import styled from 'styled-components';
import closeIcon from '../../assets/icons/closeIcon.svg';
import { Mobile, Tablet, Desktop } from '../Responsive';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ListButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HoverButton
        onClick={onOpen}
        type="button"
        title="A list of all 181 Stack Exchange sites"
      >
        <ListIcon />
      </HoverButton>

      {isOpen ? (
        <>
          <Mobile>
            <LogoutBlock>
              <TitleBlock>
                <Title>current community</Title>
                <CancleButton onClick={onOpen} />
              </TitleBlock>

              <ContentBlock>
                <UserBlock>
                  <UserImage>
                    <img
                      src="https://www.gravatar.com/avatar/ed02bd6c00c0fb529136773bacdd072e?s=32&d=identicon&r=PG&f=1"
                      alt="user"
                    />
                  </UserImage>
                  <Text>Username</Text>
                </UserBlock>
                <Link to={'/users/logout'} onClick={onOpen}>
                  <Text>log out</Text>
                </Link>
              </ContentBlock>
            </LogoutBlock>
          </Mobile>

          <Tablet>
            <DesktopBlock>
              <TitleBlock>
                <Title>current community</Title>
                <CancleButton onClick={onOpen} />
              </TitleBlock>

              <ContentBlock>
                <UserBlock>
                  <UserImage>
                    <img
                      src="https://www.gravatar.com/avatar/ed02bd6c00c0fb529136773bacdd072e?s=32&d=identicon&r=PG&f=1"
                      alt="user"
                    />
                  </UserImage>
                  <Text>Username</Text>
                </UserBlock>
                <Link to={'/users/logout'} onClick={onOpen}>
                  <Text>log out</Text>
                </Link>
              </ContentBlock>
            </DesktopBlock>
          </Tablet>

          <Desktop>
            <DesktopBlock>
              <TitleBlock>
                <Title>current community</Title>
                <CancleButton onClick={onOpen} />
              </TitleBlock>

              <ContentBlock>
                <UserBlock>
                  <UserImage>
                    <img
                      src="https://www.gravatar.com/avatar/ed02bd6c00c0fb529136773bacdd072e?s=32&d=identicon&r=PG&f=1"
                      alt="user"
                    />
                  </UserImage>
                  <Text>Username</Text>
                </UserBlock>
                <Link to={'/users/logout'} onClick={onOpen}>
                  <Text>log out</Text>
                </Link>
              </ContentBlock>
            </DesktopBlock>
          </Desktop>
        </>
      ) : null}
    </>
  );
};

const UserBlock = styled.div`
  display: flex;
  align-items: center;
`;

const UserImage = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 3px;
  overflow: hidden;
  margin-right: 6px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const CancleButton = styled.button`
  width: 16px;
  height: 16px;
  background-image: url(${closeIcon});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Text = styled.p`
  font-size: 12px;
  color: #0074cc;
  cursor: pointer;

  &:hover {
    filter: brightness(120%);
  }
`;

const Title = styled(Text)`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
`;

const TitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 10px;
  background-color: #f1f2f3;
`;

const ContentBlock = styled(TitleBlock)`
  background-color: #f3f8fb;
  border-bottom: 1px solid #ecebee;
`;

const LogoutBlock = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
`;

const DesktopBlock = styled(LogoutBlock)`
  top: 50px;
  right: 0;
  left: auto;
  width: 375px;
`;

export default ListButton;
