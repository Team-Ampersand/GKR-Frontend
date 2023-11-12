export const EquipmentController = {
  getEquipment: (filter?: string) =>
    filter ? `/equipment/${filter}` : '/equipment',
  getDetail: (id: string | string[]) => `/equipment/${id}`,
}

export const ViolationController = {
  getViolation: () => `/violation`,
}

export const NoticeController = {
  getNotice: () => `/notice`,
  getNoticeDetail: (id: string | string[]) => `/notice/${id}`,
  postNoticeWrite: () => `/notice/create`,
  editNotice: (id: string) => `/notice/edit/${id}`,
  deleteNotice: (id: string) => `/notice/delete/${id}`,
}
