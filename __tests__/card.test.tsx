import Card, { CardInterface } from '@/components/features/infrastructure/cards';
import { render, screen } from '@testing-library/react';

const sampleCardData: CardInterface = {
    path: '/sample-image.png',
    alt: 'Sample Image',
    title: 'Sample Title',
    description: 'Sample Description',
};

describe('Card Component', () => {
    test('renders the component without errors', () => {
        render(<Card {...sampleCardData} />);
        const cardComponent = screen.getByTestId('card-Sample Image');
        expect(cardComponent).toBeInTheDocument();
    });

    test('renders the card title and description correctly', () => {
        render(<Card {...sampleCardData} />);
        const cardTitle = screen.getByText('Sample Title');
        const cardDescription = screen.getByText('Sample Description');
        expect(cardTitle).toBeInTheDocument();
        expect(cardDescription).toBeInTheDocument();
    });

    test('renders the card image correctly', () => {
        render(<Card {...sampleCardData} />);
        const cardImage = screen.getByAltText('Sample Image');
        expect(cardImage).toBeInTheDocument();
    });
});
