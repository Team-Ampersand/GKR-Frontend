import styled from '@emotion/styled';
import { Palette } from 'style/global';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const Title = styled.div`
  width: 25%;
  color: ${Palette.NATURAL_N4};
  font-size: 18px;
  font-weight: 700;
  display: flex;
`;

export const Input = styled.div`
  width: 75%;

  textarea {
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid ${Palette.NATURAL_N3};
    background: ${Palette.BACKGROUND_BG};
    font-size: 18px;
    font-weight: 500;
    resize: none;

    :focus {
      border: 1px solid ${Palette.PRIMARY_P5};
    }
    ::placeholder {
      color: ${Palette.NATURAL_N3};
    }
  }
`;
