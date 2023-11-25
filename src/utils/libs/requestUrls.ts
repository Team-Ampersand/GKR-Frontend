export const EquipmentController = {
  getEquipment: (filter?: string) =>
    filter ? `/equipment/${filter}` : '/equipment',
  getDetail: (id: string | string[]) => `/equipment/${id}`,
  deleteEquipment: (id: number[]) => {
    if (id.length === 1) {
      return `/equipment/delete/${id}`
    } else {
      return `/equipment/delete`
    }
  },
  createEquipment: () => `/equipment/create`,
  serachEquipment: () => `/equipment/search`,
  editEquipment: (id: string | string[]) => `/equipment/edit/${id}`,
  repairEquipment: (id: string | string[]) => `equipment/repair/${id}`,
  cancelRepairEquipment: (id: string | string[]) =>
    `equipment/repair/completion/${id}`,
}

export const ViolationController = {
  violation: () => `/violation`,
  getViolationAll: () => `/violation/all`,
  cancelViolation: (id: number) => `/violation/${id}`,
}

export const UserController = {
  user: () => `/user`,
  allUser: () => `/user/all`,
  rentalUser: () => `user/rental`,
}

export const orderController = {
  getNowRentalList: () => `/order/now`,
  getNoReturnRentalList: () => `/order/noreturn`,
}

export const NoticeController = {
  getNotice: () => `/notice`,
  getNoticeDetail: (id: string | string[]) => `/notice/${id}`,
  postNoticeWrite: () => `/notice/create`,
  editNotice: (id: number) => `/notice/edit/${id}`,
  deleteNotice: (id: number) => `/notice/delete/${id}`,
}

export const OrderController = {
  stateOrder: () => `order/state`,
  waitOrder: () => `/order/wait`,
  rentalOrder: (equipmentId: string | string[]) =>
    `/order/rental/${equipmentId}`,
  extensionOrder: (url: string, applicationId?: number) =>
    `/order/${url}/${applicationId}`,
  detailOrder: (applicationId: string | string[]) =>
    `/order/detail/${applicationId}`,
  acceptOrder: (applicationId: string | undefined) =>
    `/order/accept/${applicationId}`,
  rejectOrder: (applicationId: string | undefined) =>
    `/order/reject/${applicationId}`,
}
