import { render, screen } from '@testing-library/react';
import Navbar from '@/components/navbar';


describe("Navbar", () => {
  test('renders Navbar component', () => {
    render(<Navbar />);
  });


  test('renders navigation links', () => {
    render(<Navbar />);
    const navItems = ['Home', 'Teams', 'Contact', 'Careers'];

    navItems.forEach((item) => {
      const link = screen.getByText(item);
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '#');
    });
  });
})

