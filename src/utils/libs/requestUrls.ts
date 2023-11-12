export const EquipmentController = {
  getEquipment: (filter?: string) =>
    filter ? `/equipment/${filter}` : '/equipment',
  getDetail: (id: string | string[]) => `/equipment/${id}`,
}

export const ViolationController = {
  getViolation: () => `/violation`,
}

export const orderController = {
  getNowRentalList: () => `/order/now`,
  getNoReturnRentalList: () => `/orger/noreturn`,
}
