import { useRecoilValue } from 'recoil';
import { Layer } from './style';
import { roleType } from 'recoilAtoms';

interface Props {
  text: string;
  selected?: boolean;
  onClick: () => void;
}

const MenuButton = ({ text, selected = false, onClick }: Props) => {
  const role = useRecoilValue(roleType);
  return (
    <Layer role={role} selected={selected} onClick={onClick}>
      {text}
    </Layer>
  );
};

export default MenuButton;
