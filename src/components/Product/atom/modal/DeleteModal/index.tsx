import { ModalPropsType } from 'types/components/Home/FilterTypes'
import * as S from './style'
import Button from 'components/common/atoms/Button'
import { EquipmentController } from 'utils/libs/requestUrls'
import { deleteData } from 'utils/apis/data'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import toastOption from 'utils/libs/toastOption'
import { useRecoilValue } from 'recoil'
import { DeleteChoice } from 'recoilAtoms'

const DeleteModal = ({ setModal }: ModalPropsType) => {
  const closeModal = () => {
    setModal((prev) => !prev)
  }
  const DeleteIds = useRecoilValue(DeleteChoice)
  const url = EquipmentController.deleteEquipment(DeleteIds)
  console.log(url)
  const { mutate } = useMutation(
    ['delete', url],
    () => {
      let params = {}
      if (DeleteIds.length > 1) {
        params = {
          equipmentIdList: DeleteIds.map((equipmentId) => ({ equipmentId })),
        }
      } else {
        params = {}
      }
      return deleteData(url, params)
    },
    {
      onSuccess: () => {
        toast.success('삭제에 성공하였습니다.', toastOption)
      },
      onError: (error: any) => {
        toast.error(error.response.data.message, toastOption)
      },
    },
  )
  const deleteEquipment = () => {
    mutate()
  }
  return (
    <S.ModalWrapper>
      <S.CloseModal onClick={closeModal}></S.CloseModal>
      <S.ModalLayer>
        <S.TextWrapper>
          <S.Title>물품 삭제</S.Title>
          <p>정말로 삭제하시겠습니까?</p>
        </S.TextWrapper>
        <S.ButtonWrapper>
          <Button
            text="삭제하기"
            border={true}
            fontsize="14"
            width="150"
            height="36"
            fontweight="800"
            onclick={deleteEquipment}
          />
          <Button
            text="취소"
            border={false}
            fontsize="14"
            width="150"
            height="36"
            fontweight="800"
            onclick={closeModal}
          />
        </S.ButtonWrapper>
      </S.ModalLayer>
    </S.ModalWrapper>
  )
}

export default DeleteModal
