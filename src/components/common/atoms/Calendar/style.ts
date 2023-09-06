import styled from '@emotion/styled';
import { Calendar } from 'react-calendar';
import { Palette } from 'style/global';

interface CalendarProps {
  role: 'admin' | 'member';
}

export const Wrapper = styled.div`
  background: ${Palette.NATURAL_N2};
  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 16px;
`;

export const CalendarLayer = styled(Calendar)<CalendarProps>`
  border-radius: 16px;

  * {
    border: none;
    line-height: 3.25em;
    text-align: center;
    text-decoration: none;
  }

  .react-calendar {
    background: ${Palette.BACKGROUND_BG};
    color: #222;
    border-radius: 1em;
    padding: 1.5em;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
    font-family: Arial, Helvetica, sans-serif;

    @media (max-width: 951px) {
      max-width: 380px;
    }
  }

  .react-calendar__navigation {
    display: flex;
    justify-content: center;

    button {
      color: ${Palette.NATURAL_N1};
      min-width: 15%;
      background: none;
      font-size: 16px;
      margin-top: 8px;

      &:disabled {
        background: ${({ role }) =>
          role === 'admin' ? Palette.PRIMARY_P5 : Palette.PRIMARY_P2};
      }
    }

    abbr[title] {
      text-decoration: none;
    }

    span {
      word-break: keep-all;
    }
  }

  .react-calendar__month-view__weekdays {
    color: ${Palette.NATURAL_N3};
  }

  .react-calendar__month-view__days {
    background: ${Palette.BACKGROUND_BG};
    border-radius: 0.5em;
    font-size: 0.875em;
    gap: 4px 0;

    button {
      background: transparent;
      color: ${Palette.NATURAL_N1};
    }

    .react-calendar__month-view__days__day--neighboringMonth {
      color: ${Palette.NATURAL_N3};
    }

    .react-calendar__tile--now {
      background: ${Palette.SUB_RED};
      border-radius: 0.5em;
      color: ${Palette.NATURAL_N2};
      font-size: 14px;

      :enabled:focus {
        background: ${({ role }) =>
          role === 'admin' ? Palette.PRIMARY_P5 : Palette.PRIMARY_P2};
        color: ${Palette.NATURAL_N2};
      }
    }

    .react-calendar__tile:enabled:hover,
    .react-calendar__tile:enabled:focus {
      background: ${Palette.NATURAL_N3};
      color: #6d92c4;
      border-radius: 0.5em;
      font-weight: normal;
    }

    .react-calendar__tile--active {
      background: ${({ role }) =>
        role === 'admin' ? Palette.PRIMARY_P5 : Palette.PRIMARY_P2};
      border-radius: 0.5em;
      color: ${Palette.NATURAL_N2};
      font-size: 12px;

      :enabled:hover,
      :enabled:focus {
        background: ${({ role }) =>
          role === 'admin' ? Palette.PRIMARY_P5 : Palette.PRIMARY_P2};
        color: ${Palette.NATURAL_N2};
      }
    }

    .react-calendar__tile--range,
    .react-calendar__tile--range:enabled:hover,
    .react-calendar__tile--range:enabled:focus {
      background: ${({ role }) =>
        role === 'admin' ? Palette.PRIMARY_P5 : Palette.PRIMARY_P2};
      color: ${Palette.NATURAL_N2};
      border-radius: 0;
    }
    .react-calendar__tile--rangeStart,
    .react-calendar__tile--rangeStart:enabled:hover,
    .react-calendar__tile--rangeStart:enabled:focus {
      border-radius: 0.5em 0 0 0.5em;
    }
    .react-calendar__tile--rangeEnd,
    .react-calendar__tile--rangeEnd:enabled:hover,
    .react-calendar__tile--rangeEnd:enabled:focus {
      border-radius: 0 0.5em 0.5em 0;
    }
  }
`;
