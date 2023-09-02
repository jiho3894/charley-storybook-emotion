import styled from '@emotion/styled';
import { Meta } from '@storybook/react';
import Text from '../Text/Text';
import RadioButton from './RadioButtont';

const meta: Meta<typeof RadioButton> = {
  title: 'TTDS/Basic/RadioButton',
  component: RadioButton,
};

export default meta;

export const Variant = () => {
  return (
    <>
      <Text variant="H4">RadioButton size Small</Text>
      <Container>
        <RadioButton label="오리" size="Small" groupName="smallGroup" />
        <RadioButton label="강아지" size="Small" groupName="smallGroup" />
        <RadioButton label="찰리" disabled size="Small" groupName="smallGroup" />
      </Container>
      <Text variant="H4">RadioButton size Middle</Text>
      <Container>
        <RadioButton label="오리" size="Middle" groupName="LargeGroup" />
        <RadioButton label="강아지" size="Middle" groupName="LargeGroup" />
        <RadioButton label="찰리" disabled size="Middle" groupName="LargeGroup" />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  gap: 4px;
`;
