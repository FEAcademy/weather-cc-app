import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  test('renders footer', () => {
    render(<Footer />)

    const footerText = screen.getByTestId('footer-text')
    expect(footerText).toBeVisible()
  })

  test('footer is not empty', () => {
    render(<Footer />)

    const footerText = screen.getByTestId('footer-text')
    expect(footerText).not.toBeEmptyDOMElement()
  })

  test('renders footer text', () => {
    render(<Footer />)

    const footerText = screen.getByTestId('footer-text')
    expect(footerText).toHaveTextContent(/weatherly/i)
  })

  test('renders logo and current year', () => {
    render(<Footer />)

    const currYear = new Date().getFullYear()
    const footerText = screen.getByTestId('footer-text')
    expect(footerText).toHaveTextContent(`WEATHERLY - ${currYear}`)
  })
})
