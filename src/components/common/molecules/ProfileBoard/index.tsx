import { People } from 'asset/svg'
import * as S from './style'
import { GetUser } from 'utils/apis/user'

const ProfileBoard = () => {
  const { user } = GetUser()
  return (
    <S.Wrapper>
      <People />
      <S.InfoBox>
        {user?.data?.name}
        <br />
        <p>
          {user?.data?.grade}학년{user?.data?.classNum}반{user?.data?.stuNum}번
        </p>
      </S.InfoBox>
    </S.Wrapper>
  )
}

export default ProfileBoard
