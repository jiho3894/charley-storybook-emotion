import styled from '@emotion/styled';
import { Meta } from '@storybook/react';
import Text from '../Text/Text';
import CheckBox from './CheckBox';

const meta: Meta<typeof CheckBox> = {
  title: 'TTDS/Basic/CheckBox',
  component: CheckBox,
};

export default meta;

export const Variant = () => {
  return (
    <>
      <Text variant="H4">CheckBox size Small</Text>
      <Container>
        <CheckBox label="오리" size="Small" groupName="smallGroup" />
        <CheckBox label="강아지" size="Small" groupName="smallGroup" />
        <CheckBox label="찰리" disabled size="Small" groupName="smallGroup" />
      </Container>
      <Text variant="H4">CheckBox size Middle</Text>
      <Container>
        <CheckBox label="오리" size="Middle" groupName="LargeGroup" />
        <CheckBox label="강아지" size="Middle" groupName="LargeGroup" />
        <CheckBox label="찰리" disabled size="Middle" groupName="LargeGroup" />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  gap: 4px;
`;
