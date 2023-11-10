export const EquipmentController = {
  getEquipment() {
    return `/equipment`
  },
  getState(filter: string) {
    return `/equipment/${filter}`
  },
}
