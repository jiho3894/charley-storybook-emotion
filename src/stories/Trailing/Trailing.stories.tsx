import styled from '@emotion/styled';
import { Meta } from '@storybook/react';
import { Colors } from '../styles';
import Text from '../Text/Text';
import Trailing from './Trailing';

const meta: Meta<typeof Trailing> = {
  title: 'TTDS/Basic/Trailing',
  component: Trailing,
};

export default meta;

export const Variant = () => {
  return (
    <>
      <Container>
        <Text variant="H4">Large</Text>
        <Trailing iconType="Alert_Circle" size="Large" color={Colors.Error600} />
      </Container>
      <Container>
        <Text variant="H4">Middle</Text>
        <Trailing iconType="Alert_Circle" size="Middle" color={Colors.Success600} />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  gap: 4px;
`;
