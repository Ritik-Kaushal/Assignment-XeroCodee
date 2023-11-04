import Infrastructure from '@/components/features/infrastructure';
import { render, screen } from '@testing-library/react';


describe('Infrastructure Component', () => {
    test('renders the component without errors', () => {
        render(<Infrastructure />);
        const infrastructureComponent = screen.getByTestId('infrastructure');
        expect(infrastructureComponent).toBeInTheDocument();
    });

    test('renders all cards correctly', () => {
        render(<Infrastructure />);
        const cardTitles = screen.getAllByTestId('card-title');
        const cardDescriptions = screen.getAllByTestId('card-description');
        const cardImages = screen.getAllByAltText(/infrastructure|cyber\-security|neural\-network|development/);

        expect(cardTitles).toHaveLength(4);
        expect(cardDescriptions).toHaveLength(4);
        expect(cardImages).toHaveLength(4);
    });
});
