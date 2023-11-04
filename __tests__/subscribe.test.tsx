import Subscribe from "@/components/subscribe";
import { render, screen } from "@testing-library/react";


describe("Subscribe Component", () => {
    test("renders the components without errors", () => {
        render(<Subscribe />);
        const subscribeSection = screen.getByTestId("subscribe");
        expect(subscribeSection).toBeInTheDocument();
    });

    test('renders the main title correctly', () => {
        render(<Subscribe />);
        const mainTitle = screen.getByText('Subscribe To Our Newsletter & Get The Coupon code.');
        expect(mainTitle).toBeInTheDocument();
    });

    test('renders the description correctly', () => {
        render(<Subscribe />);
        const description = screen.getByText('All your information is completely confidential');
        expect(description).toBeInTheDocument();
    });

    test('renders the email input field correctly', () => {
        render(<Subscribe />);
        const emailInput = screen.getByPlaceholderText('Type your email');
        expect(emailInput).toBeInTheDocument();
    });

    test('renders the subscribe button correctly', () => {
        render(<Subscribe />);
        const subscribeButton = screen.getByText('Subscribe');
        expect(subscribeButton).toBeInTheDocument();
    });
})