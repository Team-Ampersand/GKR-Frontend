import MenuButton from 'components/Home/atoms/MenuButton';
import { useState } from 'react';
import { Layer } from './style';

const MenuList = () => {
  const array = ['전체', '모니터', '노트북', '키보드', '라즈베리파이', '대여중', '대기중', '수리중', '대여가능'];

  const [selected, setSelected] = useState<string>(array[0]);

  return (
    <Layer>
      {array.map((item, key) => (
        <MenuButton
          text={item}
          selected={selected === item}
          key={key}
          onClick={() => setSelected(item)}
        />
      ))}
    </Layer>
  );
};

export default MenuList;
