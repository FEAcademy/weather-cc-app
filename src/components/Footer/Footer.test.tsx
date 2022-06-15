import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer tests', () => {
  test('Footer renders', () => {
    render(<Footer />)

    const footer = screen.getByTestId('Footer')

    expect(footer).toBeInTheDocument()
  })

  test('Footer not empty', () => {
    render(<Footer />)

    const footer = screen.getByTestId('Footer')

    expect(footer).not.toBeEmptyDOMElement()
  })

  test('Footer displays date corectly', () => {
    render(<Footer />)

    jest.useFakeTimers().setSystemTime(new Date().getFullYear())

    const currentYear = new Date(jest.getRealSystemTime()).getFullYear()

    const footer = screen.getByTestId('Footer')

    expect(footer).toHaveTextContent(`WEATHERLY - ${currentYear}`)
  })
})
