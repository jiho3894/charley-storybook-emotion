import { css } from '@emotion/react';

export const global = css`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  html,
  body,
  #root {
    height: 100%;
    font-size: 14px;
  }

  #__next {
    height: 100%;
  }

  body {
    //'Apple SD Gothic Neo',
    font-family: 'Noto Sans KR', sans-serif;
  }

  ul,
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    outline: none;
    color: inherit;
  }

  a:hover,
  a:active {
    text-decoration: none;
  }

  button {
    background-color: transparent;
    line-height: inherit;
    border: none;
  }

  input,
  label,
  select,
  button,
  textarea {
    margin: 0;
    border: 0;
    padding: 0;
    display: inline-block;
    background: none;
    line-height: 1;
    font: inherit;
  }

  .swiper {
    max-width: 100%;
  }

  [data-tooltip] {
    position: relative;
    display: inline-block;
  }

  [data-tooltip]:before,
  [data-tooltip]:after {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    z-index: 999999;
  }

  [data-tooltip]:before {
    content: '';
    position: absolute;
    border-width: 7px;
    border-style: solid;
    border-color: transparent;
  }

  [data-tooltip].simptip-position-top:before {
    border-top-color: #323232;
  }

  [data-tooltip].simptip-position-top:after {
    background-color: #323232;
    color: #ecf0f1;
  }

  [data-tooltip].simptip-position-bottom:before {
    border-bottom-color: #323232;
  }

  [data-tooltip].simptip-position-bottom:after {
    background-color: #323232;
    color: #ecf0f1;
  }

  [data-tooltip]:hover,
  [data-tooltip]:focus {
    background-color: transparent;
  }

  [data-tooltip]:hover:before,
  [data-tooltip]:hover:after,
  [data-tooltip]:focus:before,
  [data-tooltip]:focus:after {
    visibility: visible;
    opacity: 1;
  }

  .simptip-position-bottom:before,
  .simptip-position-bottom:after {
    top: 100%;
  }

  .simptip-position-bottom:before {
    margin-top: -6px;
  }

  .simptip-position-bottom:after {
    margin-top: 8px;
  }

  .simptip-position-top:before,
  .simptip-position-top:after {
    bottom: 100%;
  }

  .simptip-position-top:before {
    margin-bottom: -6px;
  }

  .simptip-position-top:after {
    margin-bottom: 8px;
  }

  .simptip-fade:before,
  .simptip-fade:after {
    -webkit-transition: opacity 0.1s linear, visibility 0.1s linear;
    -moz-transition: opacity 0.1s linear, visibility 0.1s linear;
    -ms-transition: opacity 0.1s linear, visibility 0.1s linear;
    -o-transition: opacity 0.1s linear, visibility 0.1s linear;
    transition: opacity 0.1s linear, visibility 0.1s linear;
  }
`;
