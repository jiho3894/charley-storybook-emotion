import styled from '@emotion/styled';
import { Meta } from '@storybook/react';
import Button from '../Button/Button';
import Text from '../Text/Text';
import ButtonGroup from './ButtonGroup';

const meta: Meta<typeof ButtonGroup> = {
  title: 'TTDS/Basic/ButtonGroup',
  component: ButtonGroup,
};

export default meta;

export const Variant = () => {
  return (
    <>
      <Text variant="H4">count : 1, direction : Horizontal</Text>
      <Container>
        <ButtonGroup count={1}>
          <Button label="버튼" />
        </ButtonGroup>
      </Container>
      <Text variant="H4">count : 2, direction : Horizontal</Text>
      <Container>
        <ButtonGroup count={2}>
          <Button label="취소" state="Enabled" btnType="Border" />
          <Button label="확인" />
        </ButtonGroup>
      </Container>
      <Text variant="H4">count : 2, direction : Vertical</Text>
      <Container>
        <ButtonGroup count={2} direction="Vertical">
          <Button label="취소" state="Enabled" btnType="Border" />
          <Button label="확인" />
        </ButtonGroup>
      </Container>
      <Text variant="H4">no Group</Text>
      <Container>
        <Button label="버튼" />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  gap: 4px;
`;
