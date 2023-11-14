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

export const orderController = {
  getNowRentalList: () => `/order/now`,
  getNoReturnRentalList: () => `/order/noreturn`,
}
