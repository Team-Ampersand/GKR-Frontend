import { People } from 'asset/svg'
import * as S from './style'
import { GetUser } from 'utils/apis/user'
import { useEffect, useState } from 'react'
import cookieManager from 'utils/cookieManager'
const ProfileBoard = () => {
  const { getCookie, setCookies } = cookieManager()
  const getCachedProfile = () => {
    const cachedProfile = getCookie('userProfile')
    return cachedProfile
  }
  const [profile, setProfile] = useState(getCachedProfile)
  const { user, refetch } = GetUser()

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        await refetch()
        const newProfile = user?.data
        setCookies('userProfile', newProfile)
        setProfile(newProfile)
      } catch (error) {
        console.error(error)
      }
    }
    if (!profile) fetchProfile()
  }, [profile, refetch])

  return (
    <>
      {profile ? (
        <S.Wrapper>
          <People />
          <S.InfoBox>
            <div>
              <h2>{profile.name}</h2>
              {profile.rentalRestricted ? (
                <S.ViolationTag>제재중</S.ViolationTag>
              ) : null}
            </div>
            <p>
              {profile.grade}학년{profile.classNum}반{profile.stuNum}번
            </p>
          </S.InfoBox>
        </S.Wrapper>
      ) : null}
    </>
  )
}

export default ProfileBoard
