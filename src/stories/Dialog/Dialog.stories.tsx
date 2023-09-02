import styled from '@emotion/styled';
import { Meta } from '@storybook/react';
import AssistiveText from '../AssistiveText/AssistiveText';
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import NavigationBar from '../NavigationBar/NavigationBar';
import Text from '../Text/Text';
import Trailing from '../Trailing/Trailing';
import Dialog from './Dialog';
import Tooltip from '../Tooltip/Tooltip';

const meta: Meta<typeof Dialog> = {
  title: 'TTDS/Basic/Dialog',
  component: Dialog,
};

export default meta;

export const Variant = () => {
  return (
    <Container>
      <Dialog>
        <NavigationBar icon="Right">
          <Text variant="H3">타이틀</Text>
          <Trailing iconType="Close_Line" />
        </NavigationBar>
        <Test>
          <Text variant="H5">본문 내용이 궁금하면 스크롤을 해보세요</Text>
          <Text variant="H4U">찰리</Text>
        </Test>
        <ButtonGroup count={1} direction="Horizontal">
          <Button label="버튼" />
        </ButtonGroup>
        <Tooltip position="Top_Center" label="안녕하세요">
          <AssistiveText type="Error" label="주의사항" />
        </Tooltip>
      </Dialog>
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
  height: 800px;
`;
