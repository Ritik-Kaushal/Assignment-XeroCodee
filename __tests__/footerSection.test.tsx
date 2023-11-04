import FooterSection from '@/components/footer/footerSection';
import { render, screen } from '@testing-library/react';

// Sample data for testing
const sampleContentList = [
    { name: 'Link 1', link: '/link1' },
    { name: 'Link 2', link: '/link2' },
];

describe('FooterSection Component', () => {
    test('renders the component without errors', () => {
        render(<FooterSection heading="Section Title" contentList={sampleContentList} />);
        const footerSection = screen.getByTestId('footer-section');
        expect(footerSection).toBeInTheDocument();
    });

    test('renders the heading correctly', () => {
        render(<FooterSection heading="Section Title" contentList={sampleContentList} />);
        const heading = screen.getByText('Section Title');
        expect(heading).toBeInTheDocument();
    });

    test('renders content list items correctly', () => {
        render(<FooterSection heading="Section Title" contentList={sampleContentList} />);

        sampleContentList.forEach((content, index) => {
            const link = screen.getByText(content.name);
            expect(link).toBeInTheDocument();
            expect(link).toHaveAttribute('href', content.link);
        });
    });
});