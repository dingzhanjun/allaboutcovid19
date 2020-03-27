import * as React from 'react';
import { Link } from 'react-router-dom';
import Page from '../components/layout/Page';
import Container from '../components/layout/Container';
import styled from '../utils/styled';
import StateSelect from '../components/common/StateSelect';

function IndexPage() {
  return (
    <Page>
      <Container>
        <PageContent>
          <h1>Welcome to All About COVID-19!</h1>
          <h3>WHO announced COVID-19 outbreak a pandemic, you cannot be too serious about it.</h3>
          <p>We collect COVID-19 information which may be helpful for you and want to keep you informed.</p>
          <ul>
            <li>
              FAQ pages about COVID-19 by{' '}
              <a href="https://www.cdc.gov/coronavirus/2019-ncov/faq.html" target="blank" rel="noopener noreferrer">
                CDC
              </a>{' '}
              and{' '}
              <a href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses" target="blank" rel="noopener noreferrer">
                WHO
              </a>
              .
            </li>
            <li>
              A real-time tracker focuses attention on the U.S. and provides continuously updated state-level case counts for COVID-19
              coronavirus in the United States. Click{' '}
              <a
                href="https://www.arcgis.com/apps/opsdashboard/index.html#/85320e2ea5424dfaaa75ae62e5c06e61"
                target="blank"
                rel="noopener noreferrer"
              >
                here
              </a>{' '}
              if you are visiting from a mobile device such as a smart phone, tablet and{' '}
              <a
                href="https://medpage.maps.arcgis.com/apps/opsdashboard/index.html#/c7dafaae988f4c07a13a9ede90e43a47"
                target="blank"
                rel="noopener noreferrer"
              >
                here
              </a>{' '}
              if you are visiting from your a desktop/laptop computer.
            </li>
            <li>
              CDC has{' '}
              <a href="https://www.cdc.gov/coronavirus/2019-nCoV/index.html" target="blank" rel="noopener noreferrer">
                comprehensive infomation
              </a>{' '}
              about COVID-19.
            </li>
            <li>
              CDC also teaches you how to{' '}
              <a href="https://www.cdc.gov/coronavirus/2019-ncov/prepare/index.html" target="blank" rel="noopener noreferrer">
                prepare for
              </a>{' '}
              COVID-19.
            </li>
            <li>
              Such a difficult situation is stressful, CDC has great infomation helping you{' '}
              <a href="https://www.cdc.gov/coronavirus/2019-ncov/faq.html" target="blank" rel="noopener noreferrer">
                manage anxiety & stress.
              </a>
            </li>
            <li>
              Feeling ill and concerned? Have a{' '}
              <a href="https://COVID19.morehealth.com" target="blank" rel="noopener noreferrer">
                Self-Assessment
              </a>
              .
            </li>
            <li>
              You can help by{' '}
              <a href="https://give4cdcf.org" target="blank" rel="noopener noreferrer">
                making donation
              </a>{' '}
              to CDC, please make sure the website address in your brower's address bar is <b>https://give4cdcf.org</b>
            </li>
            <li>
              Bad guys are always around,{' '}
              <a href="https://www.justice.gov/usao-wdpa/COVID-19-fraud-page" target="blank" rel="noopener noreferrer">
                check this out
              </a>{' '}
              to avoid being frauded.
            </li>

            <li>
              Get more informed by <Link to="/videos">watching videos</Link> and <Link to="/posts">reading online resources</Link> collected
              for you.
            </li>
            <li>
              <p>See more information from the Health Department of your state:</p>
              <p>
                <StateSelect />
              </p>
            </li>
          </ul>
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
