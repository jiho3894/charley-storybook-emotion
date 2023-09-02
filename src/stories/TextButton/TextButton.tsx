import styled from '@emotion/styled';
import { ButtonHTMLAttributes, forwardRef, useState } from 'react';
import Icon from '../Icon/Icon';
import { BasicSize, Colors } from '../styles';
import Text from '../Text/Text';
import { TButtonIcon, TIconType, TTextButtonState } from '../type';
import React from 'react';

export interface ITextButtonStyleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnType?: TTextButtonState; // 버튼 BG 종류
  primary?: boolean; // 버튼 BG , Font Color 변경 여부
  icon?: TButtonIcon; // 버튼 아이콘 위치
  iconType?: TIconType;
  tracking?: string; // 버튼 이벤트 tracking
  disabled?: boolean;
}

export interface ITextButtonProps extends ITextButtonStyleProps {
  label: string; // 버튼 텍스트
}

const TextButton = forwardRef<HTMLButtonElement, ITextButtonProps>((props, ref) => {
  const {
    btnType = 'Emphasis',
    primary = false,
    icon = 'NoIcon',
    iconType = 'Close_Line',
    label = '버튼',
    tracking,
    disabled = false,
    ...restProps
  } = props;
  const [textVariant, setTextVariant] = useState<'H4' | 'H4U'>('H4');
  return (
    <TextButtonWrapper
      btnType={btnType}
      primary={primary}
      disabled={disabled}
      ref={ref}
      data-tracking={tracking}
      icon={icon}
      onMouseEnter={() => {
        if (textVariant === 'H4') setTextVariant('H4U');
      }}
      onMouseLeave={() => {
        if (textVariant === 'H4U') setTextVariant('H4');
      }}
      {...restProps}
    >
      {icon === 'NoIcon' && <Text variant={textVariant}>{label}</Text>}
      {icon === 'Left' && (
        <>
          <Icon icon={iconType} size="16px" />
          <Text variant={textVariant}>{label}</Text>
        </>
      )}
      {icon === 'Right' && (
        <>
          <Text variant={textVariant}>{label}</Text>
          <Icon icon={iconType} size="16px" />
        </>
      )}
      {icon === 'BothSide' && (
        <>
          <Icon icon={iconType} size="16px" />
          <Text variant={textVariant}>{label}</Text>
          <Icon icon={iconType} size="16px" />
        </>
      )}
    </TextButtonWrapper>
  );
});

export default TextButton;

const TextButtonWrapper = styled.button<ITextButtonStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: ${BasicSize.Min_Sizes_Height_S};
  gap: ${BasicSize.Spacing_XXS};
  ${({ btnType, primary }) => {
    if (btnType === 'Emphasis' && primary === false) {
      return `
      color: ${Colors.Primary800};
      path {
        fill: ${Colors.Primary800};
      }
      `;
    }
    if (btnType === 'Normal' && primary === false) {
      return `
      color: ${Colors.Opacity_Black600};
      path {
        fill: ${Colors.Opacity_Black600};
      }
      `;
    }
    if (btnType === 'Emphasis' && primary === true) {
      return `
      color: ${Colors.Opacity_White};
      path {
        fill: ${Colors.Opacity_White};
      }
      `;
    }
    if (btnType === 'Normal' && primary === true) {
      return `
      color: ${Colors.Opacity_White600};
      path {
        fill: ${Colors.Opacity_White600};
      }
      `;
    }
    return `
      color: ${Colors.Primary800};
      path {
        fill: ${Colors.Primary800};
      }
    `;
  }}
  ${({ disabled }) =>
    disabled &&
    `
  opacity: 30%;
  pointer-events: none;
  `}
`;
