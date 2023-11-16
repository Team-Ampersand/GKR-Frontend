import { ButtonListPropsType } from 'types/components/Detail/ButtonListType'
import * as S from './style'
import { useEffect, useState } from 'react'
import { OrderController } from 'utils/libs/requestUrls'
import { useMutation } from 'react-query'
import { postData } from 'utils/apis/data'
import { toast } from 'react-toastify'
import toastOption from 'utils/libs/toastOption'
import { useRouter } from 'next/navigation'

export interface changeButtonPropsType {
  isRenter: boolean
}
export default function ButtonList({
  equipmentStatus,
  renter,
  role,
  id,
  apid,
}: ButtonListPropsType) {
  const ChangeMemberButton = ({ isRenter }: changeButtonPropsType) => {
    const [reason, setReason] = useState<string>('')
    const [inUrl, setUrl] = useState<string>('')
    const rentalUrl = OrderController.rentalOrder(id)
    const unionUrl = OrderController.extensionOrder(inUrl, apid)
    const router = useRouter()
    const { mutate } = useMutation(
      ['order', rentalUrl, unionUrl],
      () => {
        const body = {
          reason: reason,
        }
        switch (inUrl) {
          case 'rental':
            return postData(rentalUrl, body)
          case 'extension':
            return postData(unionUrl, body)
          case 'return':
            return postData(unionUrl)
          case 'cancel':
            return postData(unionUrl)

          default:
            throw new Error('잘못된 요청입니다.')
        }
      },
      {
        onSuccess: () => {
          toast.success('요청되었습니다.', toastOption)
          router.push('/home')
        },
        onError: (error: any) => {
          toast.error(error.response.data.message, toastOption)
        },
      },
    )
    useEffect(() => {
      if (inUrl) mutate()
    }, [inUrl])

    return {
      NOT_RENT() {
        return (
          <S.FillButtonWrapper
            onClick={() => {
              setUrl('rental')
            }}
          >
            대여하기
          </S.FillButtonWrapper>
        )
      },
      WAITING() {
        return isRenter ? (
          <S.OutlineButtonWrapper
            onClick={() => {
              setUrl('cancel')
            }}
          >
            취소하기
          </S.OutlineButtonWrapper>
        ) : (
          <></>
        )
      },
      RENTING() {
        return isRenter ? (
          <>
            <S.FillButtonWrapper
              onClick={() => {
                setUrl('return')
              }}
            >
              반납하기
            </S.FillButtonWrapper>
            <S.OutlineButtonWrapper
              onClick={() => {
                setUrl('extension')
              }}
            >
              연장하기
            </S.OutlineButtonWrapper>
          </>
        ) : (
          <></>
        )
      },
      REPAIRING() {
        return <></>
      },
    }
  }

  const ChangeAdminButton = () => {
    return {
      NOT_RENT() {
        return <S.AdminFillButtonWrapper>수리등록</S.AdminFillButtonWrapper>
      },
      WAITING() {
        return <></>
      },
      RENTING() {
        return <></>
      },
      REPAIRING() {
        return (
          <S.AdminOutlineButtonWrapper>수리취소</S.AdminOutlineButtonWrapper>
        )
      },
    }
  }

  return (
    <S.ButtonListWrapper>
      {equipmentStatus
        ? role === 'admin'
          ? ChangeAdminButton()[equipmentStatus]()
          : ChangeMemberButton({ isRenter: renter })[equipmentStatus]()
        : null}
    </S.ButtonListWrapper>
  )
}
