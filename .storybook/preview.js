import { ThemeProvider } from '@emotion/react';
import React from 'react';
import theme from '../src/styles/theme';

const preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        {/* <Global styles={css``} /> */}
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
