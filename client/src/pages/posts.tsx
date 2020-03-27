import * as React from 'react';
import { connect } from 'react-redux';
import GoTop from '../components/common/GoTop';

import styled from '../utils/styled';
import Page from '../components/layout/Page';
import Container from '../components/layout/Container';
import LoadingOverlay from '../components/data/LoadingOverlay';
import LoadingOverlayInner from '../components/data/LoadingOverlayInner';
import LoadingSpinner from '../components/data/LoadingSpinner';

import { ApplicationState } from '../store';
import { Post } from '../store/posts/types';
import { fetchRequest } from '../store/posts/actions';

// Separate state props + dispatch props to their own interfaces.
interface PropsFromState {
  loading: boolean;
  errors?: string;
  posts: Post[];
  total: number;
}

// We can use `typeof` here to map our dispatch types to the props, like so.
interface PropsFromDispatch {
  fetchRequest: typeof fetchRequest;
}

// Combine both state + dispatch props - as well as any props we want to pass - in a union type.
type AllProps = PropsFromState & PropsFromDispatch;

const PostsIndexPage: React.FC<AllProps> = (props: AllProps) => {
  const { loading, fetchRequest: fetchData } = props;

  React.useEffect(() => {
    fetchData('');
  }, []);

  const renderData = () => {
    const { posts } = props;

    return (
      <PostList>
        {posts &&
          posts.map((post, index) => (
            <div key={post.id}>
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                <h6>
                  {index + 1}
                  {'. '}
                  {post.title}
                </h6>
              </a>
            </div>
          ))}
      </PostList>
    );
  };

  return (
    <Page>
      <Container>
        <ContentHeader>
          <h5>Read through to get informed, prepared and peace.</h5>
        </ContentHeader>
        <TableWrapper>
          {loading && (
            <LoadingOverlay>
              <LoadingOverlayInner>
                <LoadingSpinner />
              </LoadingOverlayInner>
            </LoadingOverlay>
          )}
          {renderData()}
        </TableWrapper>
      </Container>
      <GoTop scrollStepInPx={50} delayInMs={20} />
    </Page>
  );
};

// It's usually good practice to only include one context at a time in a connected component.
// Although if necessary, you can always include multiple contexts. Just make sure to
// separate them from each other to prevent prop conflicts.
const mapStateToProps = ({ posts }: ApplicationState) => ({
  loading: posts.loading,
  errors: posts.errors,
  posts: posts.data.result,
  total: posts.data.total
});

// mapDispatchToProps is especially useful for constraining our actions to the connected component.
// You can access these via `this.props`.
const mapDispatchToProps = {
  fetchRequest
};

// Now let's connect our component!
// With redux v4's improved typings, we can finally omit generics here.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsIndexPage);

const PostList = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: left;
  h6 {
    margin-top: 15px;
  }

  td {
    text-align: left;
  }
`;

const ContentHeader = styled('div')`
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

const TableWrapper = styled('div')`
  position: relative;
  max-width: ${props => props.theme.widths.md};
  margin: 0 auto;
  min-height: 200px;
`;
