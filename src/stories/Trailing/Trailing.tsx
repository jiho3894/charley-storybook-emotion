import styled from '@emotion/styled';
import Button from '../Button/Button';
import { TIconType, TTrailingSizeProps } from '../type';
import React from 'react';

interface ITrailingProps {
  iconType: TIconType;
  size?: TTrailingSizeProps;
  color?: string;
  primary?: boolean;
}

const Trailing = ({ iconType, size, color, primary = false }: ITrailingProps) => {
  return (
    <TrailingWrapper>
      <Button
        size={size}
        btnType="Border"
        state="RuinEnabled"
        primary={primary}
        label="버튼"
        icon="OnlyIcon"
        iconType={iconType}
        color={color}
      />
    </TrailingWrapper>
  );
};

const TrailingWrapper = styled.div`
  display: inline-flex;
  align-items: flex-start;
`;

export default Trailing;
