import React from 'react';
import { TTipIconSize } from '../../../type';

interface ITipDownProps {
  border: TTipIconSize;
}

const TipDown = ({ border }: ITipDownProps) => {
  return (
    <>
      {border === 'ON' ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M1.06066 7.35355C0.865398 7.15829 0.865398 6.84171 1.06066 6.64645L6.64645 1.06066C6.84171 0.865398 7.15829 0.865398 7.35355 1.06066L12.9393 6.64645C13.1346 6.84171 13.1346 7.15829 12.9393 7.35355L7.35355 12.9393C7.15829 13.1346 6.84171 13.1346 6.64645 12.9393L1.06066 7.35355Z"
            fill="white"
            stroke="#3F3D44"
          />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="7" viewBox="0 0 14 7" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.70711 6.29289C7.31658 6.68342 6.68342 6.68342 6.29289 6.29289L0 0H14L7.70711 6.29289Z"
            fill="#3F3D44"
          />
        </svg>
      )}
    </>
  );
};

export default TipDown;
