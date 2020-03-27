import * as React from 'react';
import Page from '../components/layout/Page';
import Container from '../components/layout/Container';
import styled from '../utils/styled';

function IndexPage() {
  return (
    <Page>
      <Container>
        <PageContent>
          <h1>Welcome to All About COVID-19!</h1>
          <p>
            COVID-19 is here, everyone is talking about it and everyone is impacted by it to some extent no mater who you are. There is too
            much information and misinformation, it is so seay to get overwhelmed or mislead by them. We are dedicated to helping you have
            good-enough knowledge by collecting COVID-19 information on the Internet, which we think may be helpful for you and want to keep
            you informed. You are welcome to share <b>AllAboutCovid19.info</b> with your family and friends.
          </p>
          <p>
            Please be noted, we just put the links together on this website, we do not host any data(copyrighed by others) on our server.
            All Videos are from Youtube.com and posts are sourced from various websites.
          </p>
          <p>You are encouraged to seek more information on your own.</p>
          <p>Be informed, Be Healthy!</p>
          <p>
            Suggestions or Questions? drop me a line: <a href="mailto:allaboutcovid@gmail.com">allaboutcovid@gmail.com</a>
          </p>
        </PageContent>
      </Container>
    </Page>
  );
}

export default IndexPage;

const PageContent = styled('article')`
  max-width: ${props => props.theme.widths.md};
  margin: 0 auto;
  line-height: 1.6;

  a {
    color: ${props => props.theme.colors.brand};
  }

  h1,
  h2,
  h3,
  h4 {
    margin-bottom: 0.5rem;
    font-family: ${props => props.theme.fonts.headings};
    line-height: 1.25;
  }
  h3 {
    color: red;
    line-height: 1;
  }
`;
