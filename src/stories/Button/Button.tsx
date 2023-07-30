import React from 'react';

export interface IButtonProps {
  text: string;
  onClick: () => void;
}

const Button = ({ text = '제출하기', onClick }: IButtonProps) => {
  return (
    <div onClick={onClick}>
      <span>{text}</span>
    </div>
  );
};
export default Button;
