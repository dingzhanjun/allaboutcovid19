import * as React from 'react';
import styled from '../../utils/styled';

type ButtonGroupProps = {
  defaultButton?: number;
  children: React.ReactElement[];
  onClick: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
};

const GroupContainer = styled('div')`
  text-align: center;
`;

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ onClick, defaultButton, children }) => {
  const [current, setCurrent] = React.useState(defaultButton);
  const count = React.Children.count(children);
  const handleClick = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    setCurrent(parseInt(event.currentTarget.dataset.index, 10));
    onClick(event);
  };
  return (
    <GroupContainer>
      {React.Children.map(children, (child: React.ReactElement, i: number) => {
        let groupPosition = '';
        if (i === 0) {
          groupPosition = 'first';
        } else if (i === count - 1) {
          groupPosition = 'last';
        }
        return React.cloneElement(child, { groupPosition, onClick: handleClick, 'data-index': i, isCurrent: current === i });
      })}
    </GroupContainer>
  );
};

type GrouperParam = {
  groupPosition?: string;
  isCurrent?: boolean;
};
function btnRadius(param: GrouperParam) {
  const { groupPosition } = param;
  if (groupPosition === 'first') {
    return '5px 0 0 5px';
  }
  if (groupPosition === 'last') {
    return '0 5px 5px 0';
  }
  return '0';
}

function btnLeftBorder(param: GrouperParam) {
  const { groupPosition } = param;
  if (groupPosition === 'first') {
    return '1px';
  }
  return '0';
}

export const Button = styled('button')`
  border-radius: ${btnRadius};
  border-right-width: 1px;
  border-left-width: ${btnLeftBorder};
  padding: 5px 15px;
  color: ${props => (props.isCurrent ? props.theme.colors.brand : props.theme.colors.black)};
`;
