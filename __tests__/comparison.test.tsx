import Comparison from '@/components/features/comparison';
import { render, screen } from '@testing-library/react';


describe('Comparison Component', () => {
    it('renders the component without errors', () => {
        render(<Comparison />);
        const comparisonComponent = screen.getByTestId('comparison');
        expect(comparisonComponent).toBeInTheDocument();
    });

    it('renders "Without Xerocodee" section correctly', () => {
        render(<Comparison />);
        const withoutXerocodeeSection = screen.getByText('Without Xerocodee');
        expect(withoutXerocodeeSection).toBeInTheDocument();

        const withoutXerocodeeImage = screen.getByAltText('Without Xerocodee');
        expect(withoutXerocodeeImage).toBeInTheDocument();
    });

    it('renders "With Xerocodee" section correctly', () => {
        render(<Comparison />);
        const withXerocodeeSection = screen.getByText('With Xerocodee');
        expect(withXerocodeeSection).toBeInTheDocument();

        const withXerocodeeImage = screen.getByAltText('With Xerocodee');
        expect(withXerocodeeImage).toBeInTheDocument();
    });
});
