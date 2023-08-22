import { Global, css } from '@emotion/react';
import 'react-toastify/dist/ReactToastify.css';

const color = {
  '--PRIMARY_P1': '#FF6000',
  '--PRIMARY_P2': '#FFA559',
  '--PRIMARY_P3': '#FFB16F',

  '--NATURAL_N1': '#000000',
  '--NATURAL_N2': '#D9D9D9',
  '--NATURAL_N3': '#FFFFFF',

  '--SUB_RED': '#FF7D7D',
};

const cssColor = (color: string) => `var(--${color})`;

export const Palette = {
  PRIMARY_P1: cssColor('PRIMARY_P10'),
  PRIMARY_P2: cssColor('PRIMARY_P20'),
  PRIMARY_P3: cssColor('PRIMARY_P30'),

  NATURAL_N1: cssColor('NATURAL_N10'),
  NATURAL_N2: cssColor('NATURAL_N20'),
  NATURAL_N3: cssColor('NATURAL_N30'),

  SUB_RED: cssColor('SUB_RED'),
};

const style = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
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
