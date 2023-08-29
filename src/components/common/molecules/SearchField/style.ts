import styled from '@emotion/styled';
import { Palette } from 'style/global';

export const Label = styled.label`
  position: relative;
  width: 640px;
  height: 48px;
`;

export const Input = styled.input<{ role: string }>`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  border: 1px solid ${Palette.NATURAL_N4};
  color: ${Palette.NATURAL_N4};
  padding: 12px 24px;
  transition: all 0.3s;
  font-size: 20px;
  outline: none;

  ::placeholder {
    color: ${Palette.NATURAL_N3};
  }

  :focus {
    border: 1px solid
      ${({ role }) =>
        role === 'admin' ? Palette.PRIMARY_P5 : Palette.PRIMARY_P2};
    color: ${Palette.NATURAL_N1};
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  top: 25%;
  right: 24px;
`;
