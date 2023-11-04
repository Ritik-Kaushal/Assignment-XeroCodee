import Intro from '@/components/intro';
import { render, screen } from '@testing-library/react';

describe('Intro Component', () => {
    test('renders the component without errors', () => {
        render(<Intro />);
        const introElement = screen.getByTestId('intro-component');
        expect(introElement).toBeInTheDocument();
    });

    test('renders the main title correctly', () => {
        render(<Intro />);
        const mainTitle = screen.getByText('Build your audience and grow your brand');
        expect(mainTitle).toBeInTheDocument();
    });

    test('renders the description correctly', () => {
        render(<Intro />);
        const description = screen.getByText(
            'no more, no less. Deploy from our single pane of glass, manage them with ease and scale up as fast as your workload grows.'
        );
        expect(description).toBeInTheDocument();
    });

    test('renders the "Get Started Now" button correctly', () => {
        render(<Intro />);
        const button = screen.getByText('Get Started Now');
        expect(button).toBeInTheDocument();
    });

    test('renders the image correctly', () => {
        render(<Intro />);
        const image = screen.getByAltText('Intro');
        expect(image).toBeInTheDocument();
    });
});
