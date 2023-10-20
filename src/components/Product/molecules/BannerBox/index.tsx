import * as I from 'asset/svg';
import * as S from './style';
import { useForm } from 'react-hook-form';

const BannerBox = () => {
  const { register } = useForm({});

  const onChangeImg = () => { };

  return (
    <S.Wrapper>
      <S.ImgInput
        type="file"
        id="imgInput"
        {...register('img', {
          onChange: () => {
            onChangeImg();
          },
        })}
      />
      <S.ImgLabel htmlFor="imgInput">
        <S.Icon>
          <I.Addfile />
          <p>배너를 추가해주세요</p>
        </S.Icon>
      </S.ImgLabel>
    </S.Wrapper>
  );
};

export default BannerBox;
