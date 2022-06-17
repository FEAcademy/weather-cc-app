import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('should renders', () => {
    render(<Footer />)

    const footer = screen.getByTestId('footer-container')

    expect(footer).toBeInTheDocument()
  })

  it('should not be empty', () => {
    render(<Footer />)

    const footer = screen.getByTestId('footer-container')

    expect(footer).not.toBeEmptyDOMElement()
  })

  it('should display date corectly', () => {
    render(<Footer />)

    jest.useFakeTimers().setSystemTime(new Date('2022-01-01'))

    const footer = screen.getByTestId('footer-container')

    expect(footer).toHaveTextContent('WEATHERLY - 2022')
  })
})
