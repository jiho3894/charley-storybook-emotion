import styled from '@emotion/styled';
import { TDividerProps } from '../type';
import { Colors } from '../styles';
import React from 'react';

interface IDividerProps {
  type: TDividerProps;
}

const Divider = ({ type = 'Thin' }: IDividerProps) => {
  return <DividerWrapper type={type} />;
};

const DividerWrapper = styled.div<IDividerProps>`
  width: 100%;
  height: ${({ type }) => (type === 'Thin' ? '1px' : '8px')};
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background: ${Colors.Opacity_Black100};
`;

export default Divider;
