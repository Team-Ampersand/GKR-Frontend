import styled from '@emotion/styled'
import { Palette } from 'style/global'

export const Layer = styled.div`
  position: relative;
  border-radius: 8px;
  box-shadow: 0px 3px 8px 0px rgba(112, 144, 176, 0.15);
  background: ${Palette.NATURAL_N2};
  width: 230px;
  height: 280px;
  overflow: hidden;
  transition: 0.3s;
  cursor: pointer;

  :hover {
    transform: translateY(-1%);
    box-shadow: 0px 3px 8px 3px rgba(112, 144, 176, 0.15);
  }
`
export const CheckWrapper = styled.div`
  position: absolute;
  width: 230px;
  display: flex;
  flex-direction: row-reverse;
  padding: 0.8rem;
`

export const Check = styled.input`
  appearance: none;
  width: 24px;
  height: 24px;
  border-radius: 3px;
  border: 1px solid #865dff;
  cursor: pointer;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #865dff;
  }
`

export const imageFrameWrapper = styled.div`
  width: 100%;
  height: 52%;
  background-color: #f7f7f9;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Title = styled.div`
  width: 100%;
  font-weight: 600;
  font-size: 1.125rem;
`
export const TitleWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`
export const descriptionWrapper = styled.div`
  font-weight: 300;
  color: #999;
`
export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 48%;
  width: 100%;
`

export const TagListWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem;
  gap: 0.3rem;
`
