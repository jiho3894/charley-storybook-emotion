import { TTipIconSize, TTooltipType } from '../type';
import { ReactElement, useEffect, useLayoutEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { BasicSize } from '../styles';
import { getPositionLine } from '../hook';

interface ITooltipProps {
  position: TTooltipType;
  border?: TTipIconSize;
  label: string;
  children: ReactElement;
}

interface ITooltipStyleProps {
  positionUpDown: string;
  positionLine: string;
  tooltipWidth: number;
  position: TTooltipType;
  border?: TTipIconSize;
}

const Tooltip = ({ children, label = '툴팁 문구', position }: ITooltipProps) => {
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const [tooltipWidth, setTooltipWidth] = useState<number>(0);
  const positionLine = getPositionLine(position);

  useEffect(() => {
    const myElement = tooltipRef.current;

    if (myElement) {
      setTimeout(() => {
        const afterElement = window.getComputedStyle(myElement, '::after');
        const width = afterElement.getPropertyValue('width');
        const calWidth = Number(parseFloat(width).toFixed(2));
        setTooltipWidth(calWidth / 2 - 7);
      }, 200);
    }
  }, []);

  return (
    <TooltipWrapper
      ref={tooltipRef}
      position={position}
      positionUpDown={positionLine[0]}
      positionLine={positionLine[1]}
      tooltipWidth={tooltipWidth}
      className={`simptip-position-${positionLine[0].toLocaleLowerCase()} simptip-fade`}
      data-tooltip={label}
      role="tooltip"
    >
      {children}
    </TooltipWrapper>
  );
};

const TooltipWrapper = styled.div<ITooltipStyleProps>`
  ::before {
    left: 50%;
  }

  ::after {
    padding: ${BasicSize.Spacing_XS} ${BasicSize.Spacing_S};
    border-radius: ${BasicSize.Radius_M};
    content: attr(data-tooltip);
    white-space: nowrap;
    /* Body1 */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    /* positionLine */
    ${({ positionLine, tooltipWidth }) => {
      switch (positionLine) {
        case 'Left':
          return `
        left: 50%;
        margin-left: -24px;
        `;
        case 'Center':
          return `
        left: 50%;
        margin-left: -${tooltipWidth}px;
        `;
        case 'Right':
          return `
        right: 50%;
        margin-right: -39px; // margin-left +15px
        `;
        default:
          break;
      }
    }}
  }
`;

export default Tooltip;
