import styled from '@emotion/styled';
import { Meta } from '@storybook/react';
import { Colors } from '../../styles';
import Text from '../Text/Text';
import Trailing from '../Trailing/Trailing';
import NavigationBar from './NavigationBar';
import React from 'react';

const meta: Meta<typeof NavigationBar> = {
  title: 'TTDS/Basic/NavigationBar',
  component: NavigationBar,
};

export default meta;

export const Variant = () => {
  return (
    <>
      <Text variant="H4">Both</Text>
      <Container>
        <NavigationBar icon="BothSide">
          <Trailing iconType="Arrow_Top" color={Colors.Error600} />
          <Text variant="H4">안녕하세요</Text>
          <Trailing iconType="Chevron_Right" color={Colors.Success600} />
        </NavigationBar>
      </Container>
      <Text variant="H4">Left</Text>
      <Container>
        <NavigationBar icon="Left">
          <Trailing iconType="Chevron_Left" color={Colors.Success600} />
          <Text variant="H4">안녕하세요</Text>
        </NavigationBar>
      </Container>
      <Text variant="H4">Right</Text>
      <Container>
        <NavigationBar icon="Right">
          <Text variant="H4">안녕하세요</Text>
          <Trailing iconType="Eye_Slash" />
        </NavigationBar>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  gap: 4px;
`;
