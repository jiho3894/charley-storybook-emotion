import styled from '@emotion/styled';
import { Meta } from '@storybook/react';
import { Colors } from '../styles';
import Text from '../Text/Text';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'TTDS/Basic/Button',
  component: Button,
};

export default meta;

export const Variant = () => {
  return (
    <>
      <Text variant="H4">size</Text>
      <Container>
        <Button btnType="Filled" state="Enabled" size="Small" primary={false} label="버튼" />
        <Button btnType="Filled" state="Enabled" size="Middle" primary={false} label="버튼" />
        <Button btnType="Filled" state="Enabled" size="Large" primary={false} label="버튼" />
      </Container>
      <Text variant="H4">disabled</Text>
      <Container>
        <Button btnType="Filled" state="Enabled" primary={false} label="버튼" />
        <Button btnType="Filled" state="Enabled" primary={false} label="버튼" disabled={true} />
      </Container>
      <Text variant="H4">list</Text>
      <Container>
        <Button btnType="Filled" state="Enabled" primary={false} label="버튼" />
        <Button btnType="Filled" state="RuinEnabled" primary={false} label="버튼" />
        <Button btnType="Border" state="Enabled" primary={false} label="버튼" />
        <Button btnType="Border" state="RuinEnabled" primary={false} label="버튼" />
        <Button btnType="Ghost" state="Enabled" primary={false} label="버튼" />
        <Button btnType="Ghost" state="RuinEnabled" primary={false} label="버튼" />
      </Container>
      <Text variant="H4">Primary</Text>
      <Container style={{ background: Colors.Primary600 }}>
        <Button btnType="Filled" state="Enabled" primary={true} label="버튼" />
        <Button btnType="Filled" state="RuinEnabled" primary={true} label="버튼" />
        <Button btnType="Border" state="Enabled" primary={true} label="버튼" />
        <Button btnType="Border" state="RuinEnabled" primary={true} label="버튼" />
        <Button btnType="Ghost" state="Enabled" primary={true} label="버튼" />
        <Button btnType="Ghost" state="RuinEnabled" primary={true} label="버튼" />
      </Container>
      <Text variant="H4">Icon</Text>
      <Container>
        <Button btnType="Border" state="RuinEnabled" size="Large" primary={false} label="버튼" icon="Left" />
        <Button btnType="Border" state="RuinEnabled" size="Small" primary={false} label="버튼" icon="Left" />
        <Button btnType="Filled" state="RuinEnabled" size="Large" primary={false} label="버튼" icon="Right" />
        <Button btnType="Border" state="RuinEnabled" size="Large" primary={false} label="버튼" icon="BothSide" />
        <Button btnType="Border" state="RuinEnabled" size="Large" primary={false} label="버튼" icon="OnlyIcon" />
        <Button
          btnType="Ghost"
          state="RuinEnabled"
          size="Small"
          label="버튼"
          icon="BothSide"
          iconType="Chevron_Right"
        />
      </Container>
      <Text variant="H4">OnlyIcon</Text>
      <Container>
        <Button btnType="Border" state="RuinEnabled" size="Large" primary={false} label="버튼" icon="OnlyIcon" />
        <Button btnType="Border" state="RuinEnabled" size="Middle" primary={false} label="버튼" icon="OnlyIcon" />
        <Button btnType="Border" state="RuinEnabled" size="Small" primary={false} label="버튼" icon="OnlyIcon" />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  gap: 4px;
`;
