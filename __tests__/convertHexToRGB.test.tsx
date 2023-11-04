import { convertHexToRGBA } from "@/utils/convertHexToRGBA";


describe('convertHexToRGBA', () => {
    test('should convert a 3-character hex code to RGBA', () => {
        const hexCode = '#abc';
        const result = convertHexToRGBA(hexCode);
        expect(result).toEqual({ r: 170, g: 187, b: 204 });
    });

    test('should convert a 6-character hex code to RGBA', () => {
        const hexCode = '#0C5BC6';
        const result = convertHexToRGBA(hexCode);
        expect(result).toEqual({ r: 12, g: 91, b: 198 });
    });

    test('should handle uppercase hex codes', () => {
        const hexCode = '#FF00FF';
        const result = convertHexToRGBA(hexCode);
        expect(result).toEqual({ r: 255, g: 0, b: 255 });
    });

    test('should handle lowercase hex codes', () => {
        const hexCode = '#ff00ff';
        const result = convertHexToRGBA(hexCode);
        expect(result).toEqual({ r: 255, g: 0, b: 255 });
    });
});
