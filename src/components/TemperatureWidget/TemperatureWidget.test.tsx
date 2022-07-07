import { weatherSuccessResponse } from 'mocks/mockData';
import { render, screen } from 'test-utils';
import { TemperatureWidget } from './TemperatureWidget';
import { TemperatureWidgetTestIds } from './TemperatureWidgetTestIds';

describe('TemperatureWidget', () => {
  it('should render', () => {
    render(<TemperatureWidget description="Partly cloudy" icon={weatherSuccessResponse.current.condition.icon} />);

    expect(screen.getByTestId(TemperatureWidgetTestIds.Container)).toBeInTheDocument();
  });

  it('should contain weather description', () => {
    render(<TemperatureWidget description="Partly cloudy" icon={weatherSuccessResponse.current.condition.icon} />);
    const description = screen.getByText(/Partly cloudy/i);

    expect(description).toBeInTheDocument();
  });
  
  it('should render icon', () => {
    render(<TemperatureWidget icon={weatherSuccessResponse.current.condition.icon} description="Partly cloudy" />);
    const icon = screen.getByRole('img');

    expect(icon).toBeInTheDocument();
  });
});
