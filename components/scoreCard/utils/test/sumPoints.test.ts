import { sumPoints } from '../sumPoints';

describe('sumPoints', () => {
  test('should correctly sum the points of the unredeemed products', () => {
    const productsObject = {
      products: [
        { id: 1, points: 100, is_redemption: false },
        { id: 2, points: 50, is_redemption: true },
        { id: 3, points: 200, is_redemption: false },
      ],
    };
    const expectedTotal = 300;
    const result = sumPoints(productsObject);
    expect(result).toBe(expectedTotal);
  });

  test('should return 0 if there are no unredeemed products', () => {
    const productsObject = {
      products: [
        { id: 1, points: 100, is_redemption: true },
        { id: 2, points: 50, is_redemption: true },
        { id: 3, points: 200, is_redemption: true },
      ],
    };
    const expectedTotal = 0;
    const result = sumPoints(productsObject);
    expect(result).toBe(expectedTotal);
  });
});
