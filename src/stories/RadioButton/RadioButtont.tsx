import styled from '@emotion/styled';
import Text from '../Text/Text';
import { BasicSize, Colors } from '../styles';
import { TInputSizeProps } from '../type';
import { useState } from 'react';
import React from 'react';

interface IRadioButtonProps {
  label: string;
  disabled?: boolean;
  size?: TInputSizeProps;
  groupName: string;
}

interface IRadioButtonStyleProps {
  textColor?: boolean;
  checked?: boolean;
  boxSize?: TInputSizeProps;
  size?: TInputSizeProps;
}

const RadioButton = ({ label, disabled = false, size = 'Middle', groupName }: IRadioButtonProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <StyledLabel htmlFor={label + groupName} textColor={disabled} size={size} checked={isChecked}>
      <RadioContainer>
        <StyledRadio
          id={label + groupName}
          type="radio"
          value={label}
          name={groupName}
          disabled={disabled}
          boxSize={size}
          onChange={handleCheckboxChange}
        />
      </RadioContainer>
      <Text variant={size === 'Middle' ? 'Body1' : 'Body2'}>{label}</Text>
    </StyledLabel>
  );
};

const StyledLabel = styled.label<IRadioButtonStyleProps>`
  display: flex;
  align-items: flex-start;
  margin-right: ${BasicSize.Spacing_M};
  gap: ${BasicSize.Spacing_XXS};
  text-align: start;
  cursor: ${({ textColor }) => (textColor ? `not-allowed !important` : '')};
  color: ${({ textColor }) => (textColor ? Colors.Opacity_Black300 : Colors.Opacity_Black)};
  :last-child {
    margin-right: 0;
  }

  :hover {
    cursor: pointer;
  }

  & > * {
    line-height: ${({ size }) => {
      return size === 'Small' && `16px !important`;
    }};
    font-weight: ${({ checked }) => {
      return checked && `700`;
    }};
  }
`;

const RadioContainer = styled.div``;

const StyledRadio = styled.input<IRadioButtonStyleProps>`
  appearance: none;
  width: ${({ boxSize }) => (boxSize === 'Middle' ? '24px' : '16px')};
  height: ${({ boxSize }) => (boxSize === 'Middle' ? '24px' : '16px')};
  border: 1px solid ${Colors.Opacity_Black100};
  border-radius: ${BasicSize.Radius_Round};

  :hover {
    cursor: pointer;
    border: 2px solid ${Colors.Primary600};
  }

  :checked {
    border: 2px solid ${Colors.Success600};
  }

  :disabled {
    background: ${Colors.Opacity_Black100};
    border: 0;
    cursor: not-allowed;
  }

  :checked ~ * {
    font-weight: 700;
  }
`;

export default RadioButton;
