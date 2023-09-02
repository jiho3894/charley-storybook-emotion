import styled from '@emotion/styled';
import { Meta } from '@storybook/react';
import Text from '../Text/Text';
import Divider from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'TTDS/Basic/Divider',
  component: Divider,
};

export default meta;

export const Variant = () => {
  return (
    <>
      <Text variant="H4">Divider : Thin</Text>
      <Container>
        <Divider type="Thin" />
      </Container>
      <Text variant="H4">Divider : Thickest</Text>
      <Container>
        <Divider type="Thickest" />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  gap: 4px;
`;
