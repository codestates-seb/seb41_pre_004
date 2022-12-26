import { ReactComponent as LogoIcon } from '../../../assets/icons/mobileLogo.svg';
import {
  DesktopWrapper,
  FlexBox,
  JustifyEvenly,
  AlignBetween,
  Logo,
  Content,
  Title,
  Item,
  Sns,
  License,
} from '../../../styles/footerStyle';

const DesktopFooter = () => {
  return (
    <DesktopWrapper>
      <Logo>
        <LogoIcon />
      </Logo>
      <JustifyEvenly>
        <Content>
          <Title>Stack Overflow</Title>
          <ul>
            <Item>Questions</Item>
            <Item>Help</Item>
          </ul>
        </Content>
        <Content>
          <Title>Products</Title>
          <ul>
            <Item>Teams</Item>
            <Item>Advertising</Item>
            <Item>Collectives</Item>
            <Item>Talent</Item>
          </ul>
        </Content>
        <Content>
          <Title>Company</Title>
          <ul>
            <Item>About</Item>
            <Item>Press</Item>
            <Item>Work Here</Item>
            <Item>Legal</Item>
            <Item>Privacy PoItemcy</Item>
            <Item>Terms of Service</Item>
            <Item>Contact Us</Item>
            <Item>Cookie Settings</Item>
            <Item>Cookie PoItemcy</Item>
          </ul>
        </Content>
        <Content>
          <Title> Stack Exchange Network</Title>
          <ul>
            <Item>Technology</Item>
            <Item>Culture & recreation</Item>
            <Item>Itemfe & arts</Item>
            <Item>Science</Item>
            <Item>Professional</Item>
            <Item>Business</Item>
            <Item>API</Item>
            <Item>Data</Item>
          </ul>
        </Content>
      </JustifyEvenly>
      <AlignBetween>
        <FlexBox as={'ul'}>
          <Sns>Blog</Sns>
          <Sns>Facebook</Sns>
          <Sns>Twitter</Sns>
          <Sns>LinkedIn</Sns>
          <Sns>Instagram</Sns>
        </FlexBox>
        <License>
          Site design / logo © 2022 Stack Exchange Inc; user
          <br />
          contributions licensed under CC BY-SA.
          <br /> rev 2022.12.21.43127
        </License>
      </AlignBetween>
    </DesktopWrapper>
  );
};

export default DesktopFooter;
