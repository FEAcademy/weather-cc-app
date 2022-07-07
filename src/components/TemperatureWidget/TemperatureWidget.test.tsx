import { weatherSuccessResponse } from 'mocks/mockData';
import { render, screen } from 'test-utils';
import { TemperatureWidget } from './TemperatureWidget';
import { TemperatureWidgetTestIds } from './TemperatureWidgetTestIds';

describe('TemperatureWidget', () => {
  it('should render', () => {
    render(<TemperatureWidget icon={weatherSuccessResponse.current.condition.icon} />);

    expect(screen.getByTestId(TemperatureWidgetTestIds.Container)).toBeInTheDocument();
  });
  it('should icon', () => {
    render(<TemperatureWidget icon={weatherSuccessResponse.current.condition.icon} />);

    const icon = screen.getByRole('img');

    expect(icon).toBeInTheDocument();
  });
});
