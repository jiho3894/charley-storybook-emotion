import styled from '@emotion/styled';
import { Meta } from '@storybook/react';
import Tooltip from './Tooltip';
import Text from '../Text/Text';
import { TTooltipType } from '../type';
import AssistiveText from '../AssistiveText/AssistiveText';
import { Fragment } from 'react';

const meta: Meta<typeof Tooltip> = {
  title: 'TTDS/Basic/Tooltip',
  component: Tooltip,
};

export default meta;

export const Variant = () => {
  const positionList = [
    'Bottom_Left',
    'Bottom_Center',
    'Bottom_Right',
    'Top_Left',
    'Top_Center',
    'Top_Right',
  ] as TTooltipType[];
  return (
    <>
      {positionList.map((position) => {
        return (
          <Fragment key={position}>
            <Text variant="H4">{position}</Text>
            <Container>
              <Tooltip position={position} label={`해당 포지션은 ${position}입니다`}>
                <AssistiveText type="Helper" label="툴팁 포지션 설명" />
              </Tooltip>
            </Container>
          </Fragment>
        );
      })}
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 40px;
`;
