import * as React from 'react';
import styled from '../utils/styled';
import Page from '../components/layout/Page';
import Container from '../components/layout/Container';

const NotFound: React.FC = () => {
  return (
    <Page>
      <Container>
        <NotFoundContent>
          <span>Got Lost?</span>
          <a href="/">Continue</a>
        </NotFoundContent>
      </Container>
    </Page>
  );
};

const NotFoundContent = styled('div')`
  text-align: center;
  flexg-row: 1;
  min-height: 100%;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default NotFound;
