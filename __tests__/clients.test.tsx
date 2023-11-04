import Clients from '@/components/clients';
import ImageComp from '@/components/clients/ClientImageComponent';
import { render, screen } from '@testing-library/react';

describe('Clients Component', () => {
    test('renders the component without errors', () => {
        render(<Clients />);
        const clientsComponent = screen.getByTestId('clients-component');
        expect(clientsComponent).toBeInTheDocument();
    });

    test('renders the correct number of ImageComp components', () => {
        render(<Clients />);
        const imageComps = screen.getAllByTestId('client-image-component');
        expect(imageComps).toHaveLength(8); // Adjust the count based on your actual data
    });
});

// Test the ImageComp component separately
describe('ImageComp Component', () => {
    test('renders the component without errors', () => {
        render(<ImageComp path="/sample/path" alt="Sample Alt" height={100} width={200} />);
        const imageComp = screen.getByTestId('client-image-component');
        expect(imageComp).toBeInTheDocument();
    });

    test('renders the alt text correctly', () => {
        render(<ImageComp path="/sample/path" alt="Sample Alt" height={100} width={200} />);
        const imgElement = screen.getByAltText('Sample Alt');
        expect(imgElement).toHaveAttribute('alt', 'Sample Alt');
    });
});
