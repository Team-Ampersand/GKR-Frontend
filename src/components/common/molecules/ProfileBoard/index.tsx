import { People } from 'asset/svg'
import * as S from './style'
import { GetUser } from 'utils/apis/user'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { roleType } from 'recoilAtoms'

const ProfileBoard = () => {
  const [role, setRole] = useRecoilState(roleType)
  const getCachedProfile = () => {
    const cachedProfile = localStorage.getItem('cachedProfile')
    return cachedProfile && cachedProfile !== 'undefined'
      ? JSON.parse(cachedProfile)
      : null
  }

  const [profile, setProfile] = useState(getCachedProfile)
  const { user, refetch } = GetUser()

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        await refetch()
        const newProfile = user?.data
        localStorage.setItem('cachedProfile', JSON.stringify(newProfile))
        setProfile(newProfile)
        console.log('22')
      } catch (error) {
        console.error('Error fetching profile:', error)
      }
    }

    if (!profile) {
      fetchProfile()
    }
    if (profile.role === 'ROLE_ADMIN' && role !== 'admin') setRole('admin')
  }, [profile, refetch])

  return (
    <>
      {profile ? (
        <S.Wrapper>
          <People />
          <S.InfoBox>
            {profile.name}
            <br />
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
