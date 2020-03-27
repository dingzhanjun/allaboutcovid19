import * as React from 'react';
import styled from '../../utils/styled';
import LayoutContainer from '../../containers/LayoutContainer';
import Container from './Container';

const Wrapper = styled('footer')`
  padding: 0.5rem 1.5rem;
  background-color: ${props => props.theme.colors.brand};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.headings};
`;

const FooterInner = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: row;
  }
`;

const FooterLeft = styled('div')`
  padding-right: 1rem;
`;

const FooterNav = styled('nav')`
  flex: 1 1 auto;
  margin: 1rem 0;
  text-align: center;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin: 0;
  }
`;

const Footer: React.SFC = () => (
  <Wrapper>
    <FooterInner>
      <FooterNav>
        <h5>COVID-19 Is Here! No Panic, No Ignorant!</h5>
      </FooterNav>
    </FooterInner>
  </Wrapper>
);

export default Footer;
