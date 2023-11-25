import { ButtonListPropsType } from 'types/components/Detail/ButtonListType'
import * as S from './style'
import { useEffect, useState } from 'react'
import {
  EquipmentController,
  OrderController,
  UserController,
} from 'utils/libs/requestUrls'
import { useMutation, useQuery } from 'react-query'
import { getData, patchData, postData } from 'utils/apis/data'
import { toast } from 'react-toastify'
import toastOption from 'utils/libs/toastOption'
import { useRouter } from 'next/navigation'

export interface changeButtonPropsType {
  isRenter: boolean
}
export default function ButtonList({
  equipmentStatus,
  role,
  id,
  apid,
}: ButtonListPropsType) {
  const [reason, setReason] = useState<string>('')
  const [inUrl, setUrl] = useState<string>('')
  const rentalUrl = OrderController.rentalOrder(id)
  const unionUrl = OrderController.extensionOrder(inUrl, apid)
  const repairUrl = EquipmentController.repairEquipment(id)
  const cancelRepairUrl = EquipmentController.cancelRepairEquipment(id)
  const rentalStateUrl = UserController.rentalUser()
  const router = useRouter()
  const [renter, setRenter] = useState(false)
  const { data, refetch } = useQuery([], () => {
    return getData(rentalStateUrl)
  })

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
        case 'repair':
          return patchData(repairUrl)
        case `cancelRepair`:
          return patchData(cancelRepairUrl)
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
        if (error) toast.error(error.response.data.message, toastOption)
        else toast.error('요청에 실패했습니다.', toastOption)
      },
    },
  )
  useEffect(() => {
    if (inUrl) mutate()
  }, [inUrl])

  useEffect(() => {
    if (
      data?.data?.equipmentList &&
      data.data.equipmentList.filter((f: any) => f.equipmentId == Number(id))
        .length > 0
    )
      setRenter(true)
    else setRenter(false)
  }, [data, refetch])

  const ChangeMemberButton = ({ isRenter }: changeButtonPropsType) => {
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
        return (
          <S.AdminFillButtonWrapper
            onClick={() => {
              setUrl('repair')
            }}
          >
            수리등록
          </S.AdminFillButtonWrapper>
        )
      },
      WAITING() {
        return <></>
      },
      RENTING() {
        return <></>
      },
      REPAIRING() {
        return (
          <S.AdminOutlineButtonWrapper
            onClick={() => {
              setUrl('cancelRepair')
            }}
          >
            수리취소
          </S.AdminOutlineButtonWrapper>
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
