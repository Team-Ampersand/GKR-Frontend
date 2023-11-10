export const FilterListData = {
  equipmentStatusList: [
    {
      name: '전체',
      value: '',
      color: '',
    },
    {
      name: '대여가능',
      value: 'NOT_RENT',
      color: '#3484D1',
    },
    {
      name: '대기중',
      value: 'WAITING',
      color: '#C2C2C2',
    },
    {
      name: '대여중',
      value: 'RENTING',
      color: '#C2C2C2',
    },
    {
      name: '수리중',
      value: 'REPAIRING',
      color: '#FF5642',
    },
  ],
  equipmentType: [
    {
      name: '전체',
      value: '',
    },
    {
      name: '모니터',
      value: 'MONITOR',
    },
    {
      name: '노트북',
      value: 'LAPTOP',
    },
    {
      name: '키보드',
      value: 'KEYBOARD',
    },
    {
      name: '핸드폰',
      value: 'PHONE',
    },
    {
      name: '라즈베리파이',
      value: 'PIE',
    },
    {
      name: '소모품',
      value: 'CONSUMABLE',
    },
    {
      name: '기타',
      value: 'ETC',
    },
  ],
}
