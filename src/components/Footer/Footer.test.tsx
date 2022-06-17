import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer Component', () => {
    beforeAll(() => {
        jest.useFakeTimers()
        jest.setSystemTime(new Date('2022-01-01'))
    })
    it('should render footer sign', () => {
        render(<Footer />)
        const footerTitleElement = screen.getByTitle('currentYear')
        expect(footerTitleElement).toBeInTheDocument()
    })
    it('should check if the year is current', () => {
        render(<Footer />)
        const footerTitleElement = screen.getByTitle('currentYear')
        expect(footerTitleElement).toHaveTextContent('- 2022')
    })
})
