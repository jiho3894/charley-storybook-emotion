import styled from '@emotion/styled';
import { Meta } from '@storybook/react';
import { Colors } from '../../styles';
import Text from '../Text/Text';
import TextButton from './TextButton';
import React from 'react';

const meta: Meta<typeof TextButton> = {
  title: 'TTDS/Basic/TextButton',
  component: TextButton,
};

export default meta;

export const Variant = () => {
  return (
    <>
      <Text variant="H4">icon position</Text>
      <Container>
        <TextButton label="버튼" />
        <TextButton label="버튼" icon="Left" />
        <TextButton label="버튼" icon="Right" />
        <TextButton label="버튼" icon="BothSide" />
      </Container>
      <Text variant="H4">disable</Text>
      <Container>
        <TextButton label="버튼" />
        <TextButton label="버튼" disabled={true} />
        <TextButton label="버튼" btnType="Normal" disabled={true} />
      </Container>
      <Text variant="H4">list</Text>
      <Container>
        <TextButton label="버튼" btnType="Emphasis" primary={false} />
        <TextButton label="버튼" btnType="Normal" primary={false} />
        <TextButton label="버튼" btnType="Emphasis" primary={false} icon="BothSide" iconType="Eye" />
      </Container>
      <Text variant="H4">primary</Text>
      <Container style={{ background: Colors.Primary600 }}>
        <TextButton label="버튼" btnType="Emphasis" primary={true} />
        <TextButton label="버튼" btnType="Normal" primary={true} />
        <TextButton label="버튼" btnType="Emphasis" primary={true} icon="BothSide" iconType="Eye" />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  gap: 4px;
`;
