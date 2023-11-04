'use client'

import { useRouter } from 'next/router'
import * as S from './style'
import { useEffect, useState } from 'react'
import ImageFrame from 'components/Detail/molecules/ImageFrame'
import Tag from 'components/common/atoms/Tag'
import ButtonList from 'components/Detail/molecules/ButtonList'
import { useRecoilState } from 'recoil'
import { roleType } from 'recoilAtoms'
import { useParams } from 'next/navigation'

export default function DetailBox({}) {
  // const router = useRouter();

  const [role, setRole] = useRecoilState(roleType)
  const [path, setPath] = useState()
  return (
    <S.DetailWrapper>
      <ImageFrame />
      <S.TitleWrapper>
        <S.Title>{`Raspberry pi 4`}</S.Title>
        <S.TagListWrapper></S.TagListWrapper>
      </S.TitleWrapper>
      <S.ContentsWrapper>{`이 라즈베리 파이로 말할거같으면 1도 아니고 무려 4인 놀라운 성능을 지닌 라즈베리 파이다.
사양은 112에서 234한 236이다.`}</S.ContentsWrapper>
      <ButtonList equipmentStatus={'NOT_RENT'} role={role} renter={'s22066'} />
    </S.DetailWrapper>
  )
}
