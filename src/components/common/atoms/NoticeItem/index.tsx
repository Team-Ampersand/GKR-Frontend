interface NoticeItemPropsType {
  title: string
  id: number
  roleType?: 'member' | 'admin'
  createNoticeDate: string
}

const NoticeItem = ({
  title,
  id,
  roleType,
  createNoticeDate,
}: NoticeItemPropsType) => {
  return <div>NoticeItem</div>
}

export default NoticeItem
