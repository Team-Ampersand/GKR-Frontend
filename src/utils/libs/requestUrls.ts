export const EquipmentController = {
  getEquipment: (filter?: string) =>
    filter ? `/equipment/${filter}` : '/equipment',
  getDetail: (id: string | string[]) => `/equipment/${id}`,
}

export const ViolationController = {
  violation: () => `/violation`,
  getViolationAll: () => `/violation/all`,
  cancelViolation: (id: number) => `/violation/${id}`,
}

export const orderController = {
  getNowRentalList: () => `/order/now`,
  getNoReturnRentalList: () => `/order/noreturn`,
}

export const NoticeController = {
  getNotice: () => `/notice`,
  getNoticeDetail: (id: string | string[]) => `/notice/${id}`,
  postNoticeWrite: () => `/notice/create`,
  editNotice: (id: string) => `/notice/edit/${id}`,
  deleteNotice: (id: string) => `/notice/delete/${id}`,
}
