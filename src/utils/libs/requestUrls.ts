export const EquipmentController = {
  getEquipment: (filter?: string) =>
    filter ? `/equipment/${filter}` : '/equipment',
}
