import FeatureIntro from "@/components/features/intro";
import { convertHexToRGBA } from "@/utils/convertHexToRGBA";
import { render, screen } from "@testing-library/react";

describe("Feature Intro Component", () => {
    it('renders the component without errors', () => {
        render(<FeatureIntro />);
        const featureIntroComponent = screen.getByTestId('feature-intro');
        expect(featureIntroComponent).toBeInTheDocument();
    });

    it('renders the main title correctly', () => {
        render(<FeatureIntro />);
        const mainTitle1 = screen.getByText('Save 1000s');
        expect(mainTitle1).toBeInTheDocument();

        expect(mainTitle1).toHaveStyle({ color: convertHexToRGBA('#0C5BC6') });

    });

    it('renders the main title correctly', () => {
        render(<FeatureIntro />);
        const mainTitle2 = screen.getByText('of expensive coder hours');
        expect(mainTitle2).toBeInTheDocument();
    });

    it('renders the first image correctly', () => {
        render(<FeatureIntro />);
        const image1 = screen.getByAltText('introNav');
        expect(image1).toBeInTheDocument();
    });

    it('renders the second image correctly', () => {
        render(<FeatureIntro />);
        const image2 = screen.getByAltText('dashboard');
        expect(image2).toBeInTheDocument();
    });
})

