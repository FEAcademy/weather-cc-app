import { Name } from './Title.styled';

interface Props {
  name: string;
}

const Title = ({ name }: Props) => {
  return <Name>{name}</Name>;
};

export { Title };
