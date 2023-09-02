import styled from '@emotion/styled';
import { Meta } from '@storybook/react';
import AssistiveText from '../AssistiveText/AssistiveText';
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Text from '../Text/Text';
import AlertDialog from './AlertDialog';
import Tooltip from '../Tooltip/Tooltip';
import React from 'react';

const meta: Meta<typeof AlertDialog> = {
  title: 'TTDS/Basic/AlertDialog',
  component: AlertDialog,
};

export default meta;

export const Variant = () => {
  return (
    <Container>
      <AlertDialog>
        <Text variant="H2">타이틀</Text>
        <Test>
          <Text variant="H4">당신은 찰리입니까?</Text>
        </Test>
        <ButtonGroup count={2} direction="Horizontal">
          <Button btnType="Border" state="Enabled" primary={false} label="아니요" />
          <Button label="네" />
        </ButtonGroup>
        <Tooltip position="Top_Center" label="안녕하세요">
          <AssistiveText type="Helper" label="도움말 문구" />
        </Tooltip>
      </AlertDialog>
    </Container>
  );
};

const Container = styled.div`
  width: 360px;
  height: 100vh;
`;

const Test = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
