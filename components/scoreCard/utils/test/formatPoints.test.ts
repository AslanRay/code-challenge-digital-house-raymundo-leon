import { formatPoints } from '../formatPoints';

describe('formatPoints', () => {
  test('should format correctly the points', () => {
    const pointsObject = { points: 12345.6789 };
    const expectedFormatted = '12,345.68';
    const result = formatPoints(pointsObject);
    expect(result).toBe(expectedFormatted);
  });
});
