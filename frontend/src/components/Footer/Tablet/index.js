import { ReactComponent as LogoIcon } from '../../../assets/icons/mobileLogo.svg';
import {
  TabletWrapper,
  ColumnGap,
  Logo,
  Content,
  Title,
  Item,
  Sns,
  TabletSnsBox,
  TabletLicense,
} from '../../../styles/footerStyle';

const TabletFooter = () => {
  return (
    <TabletWrapper>
      <Logo>
        <LogoIcon />
      </Logo>
      <div>
        <Content>
          <Title>Stack Overflow</Title>
          <ColumnGap as={'ul'}>
            <Item>Questions</Item>
            <Item>Help</Item>
          </ColumnGap>
        </Content>
        <Content>
          <Title>Products</Title>
          <ColumnGap as={'ul'}>
            <Item>Teams</Item>
            <Item>Advertising</Item>
            <Item>Collectives</Item>
            <Item>Talent</Item>
          </ColumnGap>
        </Content>
        <Content>
          <Title>Company</Title>
          <ColumnGap as={'ul'}>
            <Item>About</Item>
            <Item>Press</Item>
            <Item>Work Here</Item>
            <Item>Legal</Item>
            <Item>Privacy Policy</Item>
            <Item>Terms of Service</Item>
            <Item>Contact Us</Item>
            <Item>Cookie Settings</Item>
            <Item>Cookie Policy</Item>
          </ColumnGap>
        </Content>
        <Content>
          <Title> Stack Exchange Network</Title>
          <ColumnGap as={'ul'}>
            <Item>Technology</Item>
            <Item>Culture & recreation</Item>
            <Item>Life & arts</Item>
            <Item>Science</Item>
            <Item>Professional</Item>
            <Item>Business</Item>
            <Item>API</Item>
            <Item>Data</Item>
          </ColumnGap>
        </Content>
      </div>
      <div className="mt-24">
        <TabletSnsBox as={'ul'}>
          <Sns>Blog</Sns>
          <Sns>Facebook</Sns>
          <Sns>Twitter</Sns>
          <Sns>LinkedIn</Sns>
          <Sns>Instagram</Sns>
        </TabletSnsBox>
        <TabletLicense>
          Site design / logo © 2022 Stack Exchange Inc; user contributions
          licensed under CC BY-SA. rev 2022.12.21.43127
        </TabletLicense>
      </div>
    </TabletWrapper>
  );
};

export default TabletFooter;
