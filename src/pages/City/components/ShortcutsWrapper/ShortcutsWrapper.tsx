import { ShortcutWidget } from 'components/ShortcutWidget';
import { ShortcutWidgetLoader } from 'components/ShortcutWidget/components/ShortcutWidgetLoader';
import { Weather } from 'models/Weather';
import { ShortcutsContainer, Wrapper, Title } from './ShortcutsWrapper.styled';

interface Props {
  data: Weather[] | undefined;
  isLoading: boolean;
}

const ShortcutsWrapper = ({ data, isLoading }: Props) => {
  const renderContent = () => {
    if (isLoading) {
      return (
        <>
          {[...Array(6)].map((_, id) => {
            return <ShortcutWidgetLoader key={id} />;
          })}
        </>
      );
    }

    if (data) {
      return (
        <>
          {data.map((element, id) => (
            <ShortcutWidget key={id} data={element} />
          ))}
        </>
      );
    }
  };

  return (
    <Wrapper>
      <Title>nearest</Title>
      <ShortcutsContainer>{renderContent()}</ShortcutsContainer>
    </Wrapper>
  );
};

export { ShortcutsWrapper };
