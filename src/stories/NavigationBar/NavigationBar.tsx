import styled from '@emotion/styled';
import { ReactElement } from 'react';
import { BasicSize, Colors } from '../../styles';
import { TNavigationBarIcon } from '../../type';
import React from 'react';

interface INavigationBarStyleProps {
  icon: TNavigationBarIcon;
}

interface INavigationBarProps extends INavigationBarStyleProps {
  children: ReactElement[];
}

const NavigationBar = ({ children, icon }: INavigationBarProps) => {
  return (
    <NavigationWrapper icon={icon}>
      {icon === 'BothSide' && (
        <>
          {children[0]}
          <div style={{ flex: '1 0 0' }}>{children[1]}</div>
          {children[2]}
        </>
      )}
      {icon === 'Left' && (
        <>
          {children[0]}
          <div style={{ flex: '1 0 0' }}>{children[1]}</div>
        </>
      )}
      {icon === 'Right' && (
        <>
          <div style={{ flex: '1 0 0' }}>{children[0]}</div>
          {children[1]}
        </>
      )}
    </NavigationWrapper>
  );
};

const NavigationWrapper = styled.div<INavigationBarStyleProps>`
  display: flex;
  width: 100%;
  align-items: center;
  flex-shrink: 0;
  height: ${BasicSize.Min_Sizes_Height_I};
  background: ${Colors.Opacity_White};
  gap: ${BasicSize.Spacing_XS};
  ${({ icon }) => {
    if (icon === 'BothSide') {
      return `
      padding: ${BasicSize.Spacing_XS};
      `;
    }
    if (icon === 'Left') {
      return `
      padding: ${BasicSize.Spacing_XS} ${BasicSize.Spacing_M} ${BasicSize.Spacing_XS} ${BasicSize.Spacing_XS};
      `;
    }
    if (icon === 'Right') {
      return `
      padding: ${BasicSize.Spacing_XS} ${BasicSize.Spacing_XS} ${BasicSize.Spacing_XS} ${BasicSize.Spacing_M};
      `;
    }
    return `
      padding: ${BasicSize.Spacing_XS};
    `;
  }}
`;

export default NavigationBar;
