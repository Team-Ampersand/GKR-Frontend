export interface NoticeManagementItemPropsType {
  id: number
  title: string
  content: string
  imageUrl: string
  createNoticeDate: string
}

export interface NoticeDataType {
  id: number
  title: string
  content: string
  imageUrl: string
  createNoticeDate: string
}

export interface NoticeListDataType {
  noticeList: NoticeDataType[]
}

export interface NoticeListPropsType {
  data: NoticeListDataType
}
