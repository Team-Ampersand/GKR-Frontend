import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  overflow: hidden;
  .imageCover {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .blur {
      position: relative;
      z-index: 20;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
      filter: blur(2px);
      backdrop-filter: blur(10px);
    }
  }
`
