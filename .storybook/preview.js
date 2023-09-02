import { Global } from '@emotion/react';
import { global } from '../src/styles/global';
import React from 'react';

const preview = {
  decorators: [
    (Story) => (
      <>
        <Global styles={global} />
        <Story />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css"
        />
      </>
    ),
  ],
};

export default preview;
