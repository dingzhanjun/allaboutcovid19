import * as React from 'react';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';
import Select, { ValueType } from 'react-select';
import GoTop from '../components/common/GoTop';

import styled from '../utils/styled';
import Page from '../components/layout/Page';
import Container from '../components/layout/Container';
import LoadingOverlay from '../components/data/LoadingOverlay';
import LoadingOverlayInner from '../components/data/LoadingOverlayInner';
import LoadingSpinner from '../components/data/LoadingSpinner';

import { ApplicationState } from '../store';
import { Video } from '../store/videos/types';
import { fetchRequest } from '../store/videos/actions';

// Separate state props + dispatch props to their own interfaces.
interface PropsFromState {
  loading: boolean;
  errors?: string;
  videos: Video[];
  total: number;
}

// We can use `typeof` here to map our dispatch types to the props, like so.
interface PropsFromDispatch {
  fetchRequest: typeof fetchRequest;
}

// Combine both state + dispatch props - as well as any props we want to pass - in a union type.
type AllProps = PropsFromState & PropsFromDispatch;

const VideosIndexPage: React.FC<AllProps> = (props: AllProps) => {
  const { loading, fetchRequest: fetchData } = props;
  const [category, setCategory] = React.useState('');

  React.useEffect(() => {
    setCategory('what_is_it');
  }, []);

  React.useEffect(() => {
    fetchData(JSON.stringify({ category }));
  }, [category]);

  const renderData = () => {
    const { videos, total } = props;

    return (
      <VideoList>
        {videos &&
          videos.map(video => (
            <tr key={video.id}>
              <td>
                <h6>{video.title}</h6>
                <YouTube videoId={video.link} opts={{}} />
              </td>
            </tr>
          ))}
      </VideoList>
    );
  };

  interface CategoryOption {
    value: string;
    label: string;
  }

  const cats: Array<CategoryOption> = [
    { value: 'what_is_it', label: 'What is COVID-19/Coronavirus?' },
    { value: 'how_does_it_feel', label: 'How does COVID-19 feel like?' },
    { value: 'what_to_do', label: 'What to do to prevent COVID-19?' },
    { value: 'by_cdc', label: 'Videos made for you by CDC' },
    { value: 'funny_warm', label: 'Cheer Up, look at the bright side!' }
  ];

  return (
    <Page>
      <Container>
        <ContentHeader>
          <SelectContainer>
            <Select
              options={cats}
              isSearchable={false}
              placeholder="Please choose topic your are interested in ..."
              onChange={(selectedOption: ValueType<CategoryOption>) => {
                const { value } = selectedOption as CategoryOption;
                setCategory(value);
              }}
            />
          </SelectContainer>
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
const mapStateToProps = ({ videos }: ApplicationState) => ({
  loading: videos.loading,
  errors: videos.errors,
  videos: videos.data.result,
  total: videos.data.total
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
)(VideosIndexPage);

const VideoList = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
  h6 {
    margin-top: 15px;
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

const SelectContainer = styled('div')`
  position: relative;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    max-width: 400px;
  }

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    max-width: 400px;
  }

  max-width: 100%;
  margin: 0 auto;
  min-height: 60px;
  margin-top: 20px;
`;
