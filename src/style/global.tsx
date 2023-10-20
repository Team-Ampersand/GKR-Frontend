import { Global, css } from '@emotion/react';
import 'react-toastify/dist/ReactToastify.css';

const color = {
  '--PRIMARY_P1': '#FF6000',
  '--PRIMARY_P2': '#FFA559',
  '--PRIMARY_P3': '#FFB16F',
  '--PRIMARY_P4': '#FFE6C7',
  '--PRIMARY_P5': '#865DFF',
  '--PRIMARY_P6' : '#FF5642',

  '--NATURAL_N1': '#000000',
  '--NATURAL_N2': '#FFFFFF',
  '--NATURAL_N3': '#D9D9D9',
  '--NATURAL_N4': '#c2c2c2',
  '--NATURAL_N5': '#999999',

  '--BACKGROUND_BG': '#F7F7F9',

  '--SUB_RED': '#FF7D7D',
};

const cssColor = (color: string) => `var(--${color})`;

export const Palette = {
  PRIMARY_P1: cssColor('PRIMARY_P1'),
  PRIMARY_P2: cssColor('PRIMARY_P2'),
  PRIMARY_P3: cssColor('PRIMARY_P3'),
  PRIMARY_P4: cssColor('PRIMARY_P4'),
  PRIMARY_P5: cssColor('PRIMARY_P5'),
  PRIMARY_P6: cssColor('PRIMARY_P6'),

  NATURAL_N1: cssColor('NATURAL_N1'),
  NATURAL_N2: cssColor('NATURAL_N2'),
  NATURAL_N3: cssColor('NATURAL_N3'),
  NATURAL_N4: cssColor('NATURAL_N4'),
  NATURAL_N5: cssColor('NATURAL_N5'),

  BACKGROUND_BG: cssColor('BACKGROUND_BG'),

  SUB_RED: cssColor('SUB_RED'),
};

const style = css`
  @font-face {
    font-family: 's-core';
    src: url('/font/SCDream4.otf');
    font-style:normal;
    font-weight:400;
  }
  @font-face {
    font-family: 's-core';
    src: url('/font/SCDream5.otf');
    font-style:Medium;
    font-weight:500;
  }
  @font-face {
    font-family: 's-core';
    src: url('/font/SCDream6.otf');
    font-style:bold;
    font-weight:600;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    font-family:s-core;
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  input:focus::-webkit-input-placeholder {
    color: transparent;
  }
  button {
    cursor: pointer;
    outline: none;
  }

  a {
    color: inherit;
  }

  body {
    ${color}
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
