import { Meta } from '@storybook/react';
import { Colors } from '../../styles';
import { TFontSize } from '../../type';
import Text from './Text';
import React from 'react';

const meta: Meta<typeof Text> = {
  title: 'TTDS/Basic/Text',
  component: Text,
};

export default meta;

export const Variant = () => {
  const variants = ['H1', 'H2', 'H3', 'H3U', 'H4', 'H4U', 'H5', 'Body1', 'Body2', 'Body3', 'Caption'] as TFontSize[];
  return (
    <>
      {variants.map((variant) => {
        return (
          <Text key={variant} variant={variant} color={Colors.Opacity_Black}>
            {variant}
          </Text>
        );
      })}
    </>
  );
};
