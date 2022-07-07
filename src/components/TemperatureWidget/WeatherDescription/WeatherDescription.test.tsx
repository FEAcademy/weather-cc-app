import { render, screen } from 'test-utils';
import { WeatherDescription } from './WeatherDescription';
 
describe('WeatherDescription', () => {
  it('should contain weather description',  () => {
    render(<WeatherDescription description={'Partly cloudy'} />);

    const description = screen.getByText(/Partly cloudy/i);

    expect(description).toBeInTheDocument();
  });
});
