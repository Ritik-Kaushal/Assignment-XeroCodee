import Testimonials from "@/components/testimonials";
import { render, screen } from "@testing-library/react";

describe('Testimonials Component', () => {
    test('renders the component without errors', () => {
        render(<Testimonials />);
        const testimonialsComponent = screen.getByTestId('testimonials');
        expect(testimonialsComponent).toBeInTheDocument();
    });

    test('renders the main title correctly', () => {
        render(<Testimonials />);
        const mainTitle = screen.getByText('See Our Success Stories');
        expect(mainTitle).toBeInTheDocument();
    });

    test('renders the testimonial content correctly', () => {
        render(<Testimonials />);
        const testimonialContent = screen.getByText(
            'There are many variations of passages of Lorem Ipsum available but the majority have sufferg alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage.'
        );
        expect(testimonialContent).toBeInTheDocument();
    });

    test('renders the author and role correctly', () => {
        render(<Testimonials />);
        const author = screen.getByText('- Abcdefgh Ijklmnop');
        const role = screen.getByText('Frontend Engineer');
        expect(author).toBeInTheDocument();
        expect(role).toBeInTheDocument();
    });

    test('renders the image correctly', () => {
        render(<Testimonials />);
        const image = screen.getByAltText('profile1');
        expect(image).toBeInTheDocument();
    });

    test('renders chevron icons for navigation', () => {
        render(<Testimonials />);
        const cheveronLeft = screen.getByTestId('cheveron-left');
        const cheveronRight = screen.getByTestId('cheveron-right');
        expect(cheveronLeft).toBeInTheDocument();
        expect(cheveronRight).toBeInTheDocument();
    });
});
