import React from 'react';
import { IconProps } from '../../Icon/Icon';

const ArrowTop = ({ size, color }: IconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1410_4104)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.0001 2.29999C12.329 2.29999 12.6435 2.43501 12.8701 2.67349L21.3701 11.6209C21.8265 12.1013 21.807 12.8609 21.3266 13.3174C20.8461 13.7738 20.0865 13.7543 19.6301 13.2739L13.2001 6.50543L13.2001 20.5C13.2001 21.1627 12.6628 21.7 12.0001 21.7C11.3373 21.7 10.8001 21.1627 10.8001 20.5L10.8001 6.50543L4.37005 13.2739C3.91359 13.7543 3.15404 13.7738 2.67355 13.3174C2.19306 12.8609 2.17359 12.1013 2.63005 11.6209L11.1301 2.67349C11.3566 2.43501 11.6711 2.29999 12.0001 2.29999Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1410_4104">
          <rect width="20" height="20" fill="white" transform="translate(2 2)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowTop;
