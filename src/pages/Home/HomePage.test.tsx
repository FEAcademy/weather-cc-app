//import userEvent from '@testing-library/user-event';
import { weatherSuccessResponse } from 'mocks/mockData';
import { render, screen } from 'utils';
import { InputTestIds } from 'components/AutocompleteInput/AutocompleteInputTestIds';
import { TemperatureWidgetTestIds } from 'components/TemperatureWidget';
import { WeatherInfoWidgetTestIds } from 'components/WeatherInfoWidget/WeatherInfoWidgetTestIds';
import { HomePage } from './HomePage';

describe('Home page', () => {
  it('should render temperature widget', async () => {
    render(<HomePage />);

    expect(await screen.findByTestId(TemperatureWidgetTestIds.Container)).toBeInTheDocument();
  });

  it('should render autocomplete input', () => {
    render(<HomePage />);

    const input = screen.getByTestId(InputTestIds.Input);

    expect(input).toBeInTheDocument();
  });

  // it('should render autocomplete input cities correctly', async () => {
  //   render(<HomePage />);

  //   const input = screen.getByRole('combobox');

  //   await userEvent.type(input, 'Wars');

  //   const listEl = await screen.findByText('Warszawa');

  //   await userEvent.click(listEl);

  //   expect('Warszawa').toBeInTheDocument();
  // });

  // it('should render autocomplete input cities correctlyyyy', async () => {
  //   render(<HomePage />);

  //   const input = screen.getByRole('combobox');

  //   // fireEvent.change(input, { target: { value: 'Wal' } });

  //   // act(() => {
  //   // });
  //   // fireEvent.change(input, { target: { value: 'Wal' } });
  //   userEvent.type(input, 'Wal');
  //   // fireEvent.keyPress(input, { key: 'W', code: 'KeyWr' });

  //   // await waitFor(() => screen.findByText(/Walbrzych/i));
  //   // await screen.findByText(/Wal/i);

  //   // const output = await screen.findByText(/Wroc/i);
  //   expect(input).toBeInTheDocument();
  //   expect(input).toHaveValue('Wal');

  //   // expect(await screen.findByText(/W/i)).toBeInTheDocument();
  //   // expect(await screen.findByText(/Wroclaw/i)).toBeInTheDocument();
  //   // expect(output).toBeInTheDocument();

  //   // await waitFor(() => screen.findByText(/Wroclaw/i));
  // });

  // it('should render autocomplete input cities correctlyy2', async () => {
  //   //const getById = queryByAttribute.bind(null, 'id');
  //   render(<HomePage />);
  //   const input = screen.getByRole('combobox');
  //   userEvent.type(input, 'Wroc');
  //   userEvent.keyboard('[Enter]');
  //   const option1 = await waitFor(() => screen.findByText('Wroclaw'));
  //   expect(option1).toBeInTheDocument();
  // });

  it('should render temperature widget content properly', async () => {
    render(<HomePage />);

    const weatherIcon = await screen.findByAltText('Weather widget icon');
    const description = await screen.findByText(/Sunny/i);
    const currentTemperature = await screen.findByText(/25/i);
    const feelslikeTemperature = await screen.findByText(/feels like/i);

    expect(weatherIcon).toHaveAttribute('src', weatherSuccessResponse.current.condition.icon);
    expect(description).toBeInTheDocument();
    expect(currentTemperature).toBeInTheDocument();
    expect(feelslikeTemperature).toBeInTheDocument();
  });

  it('should render weather info widget', async () => {
    render(<HomePage />);

    const weatherInfoWidget = await screen.findByTestId(WeatherInfoWidgetTestIds.Container);

    expect(weatherInfoWidget).toBeInTheDocument();
  });

  it('should render weather info widget content properly', async () => {
    render(<HomePage />);

    const cloud = await screen.findByText(/0%/);
    const humidity = await screen.findByText(/69%/);
    const windSpeed = await screen.findByText(/7 km\/h/);
    const precip = await screen.findByText(/0 mm/i);
    const pressure = await screen.findByText(/1011 mb/i);
    const gust = await screen.findByText(/5 km\/h/i);

    expect(cloud).toBeInTheDocument();
    expect(precip).toBeInTheDocument();
    expect(humidity).toBeInTheDocument();
    expect(pressure).toBeInTheDocument();
    expect(windSpeed).toBeInTheDocument();
    expect(gust).toBeInTheDocument();
  });
});
