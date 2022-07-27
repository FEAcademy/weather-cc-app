import { render, screen, fireEvent } from 'utils';
import { Button } from './GeolocationButton.styled';

describe('GeolocationButton', () => {
  it('should call callback onClick', async () => {
    const mockCallBack = jest.fn();
    render(<Button onClick={mockCallBack} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockCallBack).toHaveBeenCalledTimes(1);
  });
});
