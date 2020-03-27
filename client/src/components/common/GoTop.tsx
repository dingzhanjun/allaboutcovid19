import * as React from 'react';
import styled from '../../utils/styled';

type ScrollProps = {
  scrollStepInPx: number;
  delayInMs: number;
};

const GoTop: React.FC<ScrollProps> = (props: ScrollProps) => {
  // const [intervalId, setIntervalId] = React.useState(null);
  const [position, setPosition] = React.useState(false);

  React.useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setPosition(true);
      } else {
        setPosition(false);
      }
    });
    window.scrollTo(0, 0);
  }, []);

  const scrollToTop = () => {
    let intervalId;
    const onScrollStep = () => {
      if (window.pageYOffset === 0) {
        clearInterval(intervalId);
        return;
      }
      window.scroll(0, window.pageYOffset - props.scrollStepInPx);
    };

    intervalId = setInterval(onScrollStep, props.delayInMs);
  };

  const renderGoTopIcon = () => {
    if (position) {
      return (
        <Button className="go-top" onClick={scrollToTop} type="button">
          Go Top
        </Button>
      );
    }
    return null;
  };

  return <>{renderGoTopIcon()}</>;
};

const Button = styled('button')`
  border: 0;
  border-radius: 10px 0 0 10px;
  position: fixed;
  cursor: pointer;
  bottom: 30px;
  right: 0px;
  color: white;
  background-color: ${props => props.theme.colors.brand};
  z-index: 1;
  width: 90px;
  text-align: center;
  height: 45px;
  line-height: 45px;
  transition: 0.5s;
`;

export default GoTop;
