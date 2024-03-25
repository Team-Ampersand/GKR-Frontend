import { Global, css } from '@emotion/react'
import localFont from 'next/font/local'
import 'react-toastify/dist/ReactToastify.css'

const color = {
  '--PRIMARY_P1': '#FF6000',
  '--PRIMARY_P2': '#FFA559',
  '--PRIMARY_P3': '#FFB16F',
  '--PRIMARY_P4': '#FFE6C7',
  '--PRIMARY_P5': '#865DFF',
  '--PRIMARY_P6': '#FF5642',

  '--NATURAL_N1': '#000000',
  '--NATURAL_N2': '#FFFFFF',
  '--NATURAL_N3': '#D9D9D9',
  '--NATURAL_N4': '#c2c2c2',
  '--NATURAL_N5': '#999999',
  '--NATURAL_N6': '#616161',
  '--NATURAL_N7': '#818198',
  '--NATURAL_N8': '#525252',

  '--BACKGROUND_BG': '#F7F7F9',

  '--SUB_RED': '#FF7D7D',
}

const cssColor = (color: string) => `var(--${color})`

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
  NATURAL_N6: cssColor('NATURAL_N6'),
  NATURAL_N7: cssColor('NATURAL_N7'),
  NATURAL_N8: cssColor('NATURAL_N8'),

  BACKGROUND_BG: cssColor('BACKGROUND_BG'),

  SUB_RED: cssColor('SUB_RED'),
}

const SCDream = localFont({
  src: [
    {
      path: 'font/SCDream1.woff',
      weight: '100',
      style: 'thin',
    },
    {
      path: 'font/SCDream2.woff',
      weight: '200',
      style: 'extra-light',
    },
    {
      path: 'font/SCDream3.woff',
      weight: '300',
      style: 'light',
    },
    {
      path: 'font/SCDream4.woff',
      weight: '400',
      style: 'regular',
    },
    {
      path: 'font/SCDream5.woff',
      weight: '500',
      style: 'Medium',
    },
    {
      path: 'font/SCDream6.woff',
      weight: '600',
      style: 'semi-bold',
    },
    {
      path: 'font/SCDream7.woff',
      weight: '700',
      style: 'bold',
    },
    {
      path: 'font/SCDream8.woff',
      weight: '800',
      style: 'extra-bold',
    },
    {
      path: 'font/SCDream9.woff',
      weight: '800',
      style: 'black',
    },
  ],
  variable: '--SCDream',
})

const style = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    font-family: s-core;
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
`

const GlobalStyle = () => {
  return <Global styles={style} />
}

export default GlobalStyle
