import { RequestButtonList } from 'types/components/Request/RequestDetailType'
import * as S from './style'
import { OrderController } from 'utils/libs/requestUrls'
import { useMutation } from 'react-query'
import { patchData } from 'utils/apis/data'
import { toast } from 'react-toastify'
import toastOption from 'utils/libs/toastOption'
import { useEffect, useState } from 'react'

export default function RequsetButtonList({
  orderType = 'RENTAL',
  id,
}: RequestButtonList) {
  const acceptUrl = OrderController.acceptOrder(id)
  const rejectUrl = OrderController.rejectOrder(id)
  const [url, setUrl] = useState('')
  const { mutate } = useMutation<void, any, { url: string }>(
    ['order', acceptUrl, rejectUrl],
    ({ url }) => {
      return patchData(url)
    },
    {
      onSuccess: () => {
        toast.success('승인되었습니다.', toastOption)
      },
      onError: (error: any) => {
        toast.error(error.response.data.message, toastOption)
      },
    },
  )
  const handleClick = (newUrl: string) => {
    setUrl(newUrl)
    mutate({ url: newUrl })
  }
  const changeButton = () => {
    return {
      RENTAL() {
        return (
          <S.AdminFillButtonWrapper onClick={() => handleClick(acceptUrl)}>
            대여수락
          </S.AdminFillButtonWrapper>
        )
      },
      RETURN() {
        return (
          <S.AdminFillButtonWrapper onClick={() => handleClick(acceptUrl)}>
            반납확인
          </S.AdminFillButtonWrapper>
        )
      },
      EXTENSION() {
        return (
          <S.AdminFillButtonWrapper onClick={() => handleClick(acceptUrl)}>
            연장수락
          </S.AdminFillButtonWrapper>
        )
      },
    }
  }
  return (
    <S.ButtonListWrapper>
      <>{changeButton()[orderType]()}</>
      <S.AdminOutlineButtonWrapper onClick={() => handleClick(rejectUrl)}>
        거절
      </S.AdminOutlineButtonWrapper>
    </S.ButtonListWrapper>
  )
}
