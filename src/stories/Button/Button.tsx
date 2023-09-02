import styled from '@emotion/styled';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import Icon from '../Icon/Icon';
import { BasicSize, Colors } from '../styles';
import Text from '../Text/Text';
import { TButtonIcon, TButtonSize, TButtonState, TButtonType, TIconType } from '../type';

export interface IButtonStyleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: TButtonSize; // 버튼 사이즈
  state?: TButtonState; // 버튼 상태 종류
  btnType?: TButtonType; // 버튼 BG 종류
  primary?: boolean; // 버튼 BG , Font Color 변경 여부
  icon?: TButtonIcon; // 버튼 아이콘 위치
  iconType?: TIconType;
  tracking?: string; // 버튼 이벤트 tracking
  disabled?: boolean;
  color?: string; // only Icon 전용 색상
}

export interface IButtonProps extends IButtonStyleProps {
  label: string; // 버튼 텍스트
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const {
    size = 'Large',
    state = 'Enabled',
    btnType = 'Filled',
    primary = false,
    icon = 'NoIcon',
    iconType = 'Close_Line',
    label = '버튼',
    tracking,
    disabled = false,
    color = Colors.Opacity_Black,
    ...restProps
  } = props;
  return (
    <ButtonWrapper
      size={size}
      state={state}
      btnType={btnType}
      primary={primary}
      disabled={disabled}
      icon={icon}
      ref={ref}
      data-tracking={tracking}
      color={color}
      {...restProps}
    >
      {icon === 'NoIcon' && <Text variant={size === 'Small' ? 'H4' : 'H3'}>{label}</Text>}
      {icon === 'Left' && (
        <>
          <Icon icon={iconType} size={size === 'Large' ? '24px' : '16px'} />
          <Text variant={size === 'Small' ? 'H4' : 'H3'}>{label}</Text>
        </>
      )}
      {icon === 'Right' && (
        <>
          <Text variant={size === 'Small' ? 'H4' : 'H3'}>{label}</Text>
          <Icon icon={iconType} size={size === 'Large' ? '24px' : '16px'} />
        </>
      )}
      {icon === 'BothSide' && (
        <>
          <Icon icon={iconType} size={size === 'Large' ? '24px' : '16px'} />
          <Text variant={size === 'Small' ? 'H4' : 'H3'}>{label}</Text>
          <Icon icon={iconType} size={size === 'Large' ? '24px' : '16px'} />
        </>
      )}
      {icon === 'OnlyIcon' && <Icon icon={iconType} size={size === 'Small' ? '16px' : '24px'} />}
    </ButtonWrapper>
  );
});

const ButtonWrapper = styled.button<IButtonStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: ${BasicSize.Radius_M};
  width: inherit;
  ${({ size }) => {
    switch (size) {
      case 'Large':
        return `height: ${BasicSize.Min_Sizes_Height_I};
                padding: ${BasicSize.Spacing_XXS} ${BasicSize.Spacing_S};
                gap: ${BasicSize.Spacing_XS};
        `;
      case 'Middle':
        return `height: ${BasicSize.Min_Sizes_Height_M};
                padding: ${BasicSize.Spacing_XXS} ${BasicSize.Spacing_S};
                gap: ${BasicSize.Spacing_XXS};
        `;
      case 'Small':
        return `height: ${BasicSize.Min_Sizes_Height_S};
                padding: ${BasicSize.Spacing_XXS} ${BasicSize.Spacing_XS};
                gap: ${BasicSize.Spacing_XXS};
        `;
      default:
        break;
    }
  }}
  ${({ btnType, state, primary }) => {
    if (btnType === 'Filled' && state === 'Enabled' && primary === false) {
      return `
    background: ${Colors.Primary600};
    color: ${Colors.Opacity_White};
    &:hover {
    background: ${Colors.Primary800};
    }
    path {
      fill : ${Colors.Opacity_White};
    }
    `;
    }
    if (btnType === 'Filled' && state === 'RuinEnabled' && primary === false) {
      return `
    background: ${Colors.Error600};
    color: ${Colors.Opacity_White};
    &:hover {
    background: ${Colors.Error800};
    }
    path {
      fill : ${Colors.Opacity_White};
    }
    `;
    }
    if (btnType === 'Border' && state === 'Enabled' && primary === false) {
      return `
    border: 1px solid ${Colors.Opacity_Black100};
    color: ${Colors.Opacity_Black};
    &:hover {
    background: ${Colors.Opacity_Black50};
    }
    path {
      fill : ${Colors.Opacity_Black};
    }
    `;
    }
    if (btnType === 'Border' && state === 'RuinEnabled' && primary === false) {
      return `
    border: 1px solid ${Colors.Error600};
    color: ${Colors.Error800};
    &:hover {
    background: ${Colors.Opacity_Black50};
    }
    path {
      fill : ${Colors.Error800};
    }
    `;
    }
    if (btnType === 'Ghost' && state === 'Enabled' && primary === false) {
      return `
    color: ${Colors.Primary800};
    &:hover {
    background: ${Colors.Opacity_Black50};
    }
    path {
      fill : ${Colors.Primary800};
    }
    `;
    }
    if (btnType === 'Ghost' && state === 'RuinEnabled' && primary === false) {
      return `
    color: ${Colors.Error800};
    &:hover {
    background: ${Colors.Opacity_Black50};
    }
    path {
      fill : ${Colors.Error800};
    }
    `;
    }
    if (btnType === 'Filled' && state === 'Enabled' && primary === true) {
      return `
    background: ${Colors.Opacity_White};
    color: ${Colors.Primary800};
    &:hover {
    background: ${Colors.Primary200};
    }
    path {
      fill : ${Colors.Primary800};
    }
    `;
    }
    if (btnType === 'Filled' && state === 'RuinEnabled' && primary === true) {
      return `
    background: ${Colors.Opacity_White};
    color: ${Colors.Error800};
    &:hover {
    background: ${Colors.Error200};
    }
    path {
      fill : ${Colors.Error800};
    }
    `;
    }
    if (btnType === 'Border' && state === 'Enabled' && primary === true) {
      return `
    border: 1px solid ${Colors.Opacity_White600};
    color: ${Colors.Opacity_White};
    &:hover {
    background: ${Colors.Opacity_White50};
    }
    path {
      fill : ${Colors.Opacity_White};
    }
    `;
    }
    if (btnType === 'Border' && state === 'RuinEnabled' && primary === true) {
      return `
    border: 1px solid ${Colors.Error600};
    color: ${Colors.Error600};
    &:hover {
    background: ${Colors.Opacity_White50};
    }
    path {
      fill : ${Colors.Error600};
    }
    `;
    }
    if (btnType === 'Ghost' && state === 'Enabled' && primary === true) {
      return `
    color: ${Colors.Opacity_White};
    &:hover {
    background: ${Colors.Opacity_White50};
    }
    path {
      fill : ${Colors.Opacity_White};
    }
    `;
    }
    if (btnType === 'Ghost' && state === 'RuinEnabled' && primary === true) {
      return `
    color: ${Colors.Error600};
    &:hover {
    background: ${Colors.Opacity_White50};
    }
    path {
      fill : ${Colors.Error600};
    }
    `;
    }
  }}
  ${({ disabled }) =>
    disabled &&
    `
  opacity: 30%;
  pointer-events: none;
  `}
  ${({ icon, size, color }) => {
    if (icon === 'OnlyIcon') {
      if (size === 'Small') {
        return `
        width: 32px;
        path {
          fill : ${color};
        }
        border: 0;
        `;
      } else if (size === 'Middle') {
        return `
        width: 40px;
        padding: ${BasicSize.Spacing_XXS};
        path {
          fill : ${color};
        }
        border: 0;
        `;
      } else {
        return `
        width: 48px;
        padding: ${BasicSize.Spacing_XXS};
        path {
          fill : ${color};
        }
        border: 0;
        `;
      }
    }
  }}
`;

export default Button;
