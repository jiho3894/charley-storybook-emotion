import styled from '@emotion/styled';
import React from 'react';

export interface IButtonProps {
  text: string;
  onClick: () => void;
}

const Button = ({ text = '제출하기', onClick }: IButtonProps) => {
  return (
    <ButtonWrapper onClick={onClick}>
      <span>{text}</span>
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.colors.red};
`;
