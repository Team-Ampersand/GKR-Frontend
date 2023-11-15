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
  editNotice: (id: string) => `/notice/edit/${id}`,
  deleteNotice: (id: number) => `/notice/delete/${id}`,
}

export const OrderController = {
  waitOrder: () => `/order/wait`,
  rentalOrder: (url: string, id: string | string[]) => `/order/${url}/${id}`,
  detailOrder:(id:string | string[])=>`/order/detail/${id}`,
}
