import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer Component', () => {
    it('should render footer sign', () => {
        render(<Footer />)
        const footerTitleElement = screen.getByTitle('currentYear')
        expect(footerTitleElement).toBeInTheDocument()
    })
    it('should check if the year is current', () => {
        render(<Footer />)
        const footerTitleElement = screen.getByTitle('currentYear')
        const currentYear = new Date().getFullYear().toString()
        expect(footerTitleElement).toHaveTextContent(currentYear)
    })
})
