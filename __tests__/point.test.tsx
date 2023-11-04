import Point from '@/components/features/xerocodeeWay/point';
import { render, screen } from '@testing-library/react';


const sampleStepsList = [
    {
        path: '/step1.png',
        alt: 'Step 1',
        heading: 'Step 1 Heading',
        subheading: 'Step 1 Subheading',
        height: 100,
        width: 100,
    },
    {
        path: '/step2.png',
        alt: 'Step 2',
        heading: 'Step 2 Heading',
        subheading: 'Step 2 Subheading',
        height: 100,
        width: 100,
    }
];

const samplePointData = {
    PointNo: 1,
    heading: 'Sample Heading',
    subheading: 'Sample Subheading',
    stepsList: sampleStepsList,
};

describe('Point Component', () => {
    it('renders the component without errors', () => {
        render(<Point {...samplePointData} />);
        const pointComponent = screen.getByTestId('point');
        expect(pointComponent).toBeInTheDocument();
    });

    it('renders PointNo and underlines correctly', () => {
        render(<Point {...samplePointData} />);
        const pointNo = screen.getByText('01');
        expect(pointNo).toBeInTheDocument();
    });

    it('renders heading and subheading correctly', () => {
        render(<Point {...samplePointData} />);
        const heading = screen.getByText('Sample Heading');
        const subheading = screen.getByText('Sample Subheading');
        expect(heading).toBeInTheDocument();
        expect(subheading).toBeInTheDocument();
    });

    it('renders all steps correctly', () => {
        render(<Point {...samplePointData} />);
        const steps = screen.getAllByTestId('steps');
        expect(steps).toHaveLength(sampleStepsList.length);
    });
});
