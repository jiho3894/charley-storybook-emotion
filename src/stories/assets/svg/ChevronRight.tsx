import React from 'react';
import { IconProps } from '../../Icon/Icon';

const ChevronRight = ({ size, color }: IconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.76721 4.81955C4.14301 4.41484 4.77574 4.39141 5.18046 4.76721L12.1805 11.2672C12.3842 11.4564 12.5 11.7219 12.5 12C12.5 12.2781 12.3842 12.5436 12.1805 12.7328L5.18046 19.2328C4.77574 19.6086 4.14301 19.5852 3.76721 19.1805C3.39141 18.7757 3.41484 18.143 3.81955 17.7672L10.0304 12L3.81955 6.2328C3.41484 5.85699 3.39141 5.22426 3.76721 4.81955Z"
        fill={color}
      />
    </svg>
  );
};

export default ChevronRight;
