import styled from '@emotion/styled';
import { Calendar } from 'asset/svg';
import TextareaAutosize from 'react-textarea-autosize';
import { Palette } from 'style/global';

interface Props {
  role: 'admin' | 'member';
  isCalendar?: boolean;
}

const borderColor = (role: 'admin' | 'member') =>
  role === 'admin' ? Palette.PRIMARY_P5 : Palette.PRIMARY_P1;

export const Layer = styled.div`
  position: relative;
  width: 100%;
  font-size: 16px;
  display: flex;
  flex-direction: column;

  p {
    font-size: 16px;
    margin-bottom: 12px;
  }
`;

export const Label = styled.label`
  width: 100%;
  position: relative;
  cursor: pointer;
`;

export const Input = styled.input<Props>`
  width: 100%;
  border-radius: 8px;
  padding: 12px 16px;
  background-color: ${Palette.BACKGROUND_BG};
  transition:
    all 0.3s,
    height 0s;
  border: 1px solid
    ${({ isCalendar, role }) =>
      !isCalendar ? 'transparent' : borderColor(role)};
  cursor: pointer;

  ::placeholder {
    transition: all.3s;
  }

  :focus {
    border: 1px solid ${({ role }) => borderColor(role)};
  }
`;

export const Textarea = styled(Input)`
  resize: none;
`.withComponent(TextareaAutosize);

export const Icon = styled(Calendar)`
  position: absolute;
  right: 16px;
  top: 12px;
`;
