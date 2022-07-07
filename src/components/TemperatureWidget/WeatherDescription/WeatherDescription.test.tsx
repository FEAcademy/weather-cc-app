import { render, screen } from 'test-utils';
import { HomePage } from 'pages/Home';
 
describe('Home page', () => {
  it('should contain weather description', async () => {
    render(<HomePage />);

    const description = await screen.findByText(/Sunny/i);

    expect(description).toBeInTheDocument();
  });
});
