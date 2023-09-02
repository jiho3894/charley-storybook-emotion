import styled from '@emotion/styled';
import { Meta } from '@storybook/react';
import Text from '../Text/Text';
import AssistiveText from './AssistiveText';
import React from 'react';

const meta: Meta<typeof AssistiveText> = {
  title: 'TTDS/Basic/AssistiveText',
  component: AssistiveText,
};

export default meta;

export const Variant = () => {
  return (
    <>
      <Text variant="H4">Helper</Text>
      <Container>
        <AssistiveText type="Helper" label="도움말 문구" />
      </Container>
      <Text variant="H4">Error</Text>
      <Container>
        <AssistiveText type="Error" label="유효성 문구" />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  gap: 4px;
`;
