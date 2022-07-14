import { Container, Label, Value } from './DataItem.styled';

interface Props {
  label: string;
  value: string;
}

const DataItem = ({ label, value }: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Value>{value}</Value>
    </Container>
  );
};

export { DataItem };
