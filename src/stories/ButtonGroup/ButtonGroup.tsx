import styled from '@emotion/styled';
import { ReactElement } from 'react';
import { BasicSize } from '../styles';
import { TButtonGroupDirection } from '../type';

export interface IButtonStyleGroupProps {
  direction?: TButtonGroupDirection;
  children: ReactElement | ReactElement[];
}

export interface IButtonGroupProps extends IButtonStyleGroupProps {
  count: 1 | 2;
}

const ButtonGroup = ({ count, children, direction = 'Horizontal' }: IButtonGroupProps) => {
  const childArray = Array.isArray(children) ? children : [children];

  if (childArray.length !== count) {
    throw new Error(
      `현재 설정한 count 수는 ${count} 입니다. 하지만 현재 자식 노드의 수는 ${childArray.length} 입니다. 코드를 다시 확인해주세요.`,
    );
  }

  return <ButtonGroupWrapper direction={direction}>{childArray}</ButtonGroupWrapper>;
};

const ButtonGroupWrapper = styled.div<IButtonStyleGroupProps>`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: ${BasicSize.Spacing_XS};
  flex-direction: ${({ direction }) => (direction === 'Vertical' ? 'column' : '')};
`;

export default ButtonGroup;
