import { render, screen } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  test('navbar is not empty', () => {
    render(<Navbar />)

    const navbar = screen.getByRole('navigation')
    expect(navbar).not.toBeEmptyDOMElement()
  })

  test('renders footer', () => {
    render(<Navbar />)

    const navbar = screen.getByRole('navigation')
    expect(navbar).toBeVisible()
  })

  test('navbar has logo', () => {
    render(<Navbar />)

    const navbar = screen.getByRole('navigation')
    expect(navbar).toHaveTextContent(/weatherly/i)
  })
})
