import React from 'react';
import { IconProps } from '../../Icon/Icon';

const PlayStart = ({ size, color }: IconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.73274 21C6.44489 20.9994 6.16215 20.9208 5.91231 20.7716C5.34973 20.439 5 19.7934 5 19.0925V4.90767C5 4.2048 5.34973 3.56111 5.91231 3.2285C6.16809 3.07513 6.45868 2.99625 6.75367 3.00014C7.04867 3.004 7.33725 3.09048 7.58927 3.25051L19.2088 10.5072C19.4509 10.6656 19.6506 10.8856 19.7891 11.1466C19.9274 11.4075 20 11.7008 20 11.9991C20 12.2973 19.9274 12.5906 19.7891 12.8515C19.6506 13.1125 19.4509 13.3325 19.2088 13.4909L7.58739 20.7496C7.32949 20.9122 7.0341 20.9987 6.73274 21Z"
        fill={color}
      />
    </svg>
  );
};

export default PlayStart;
