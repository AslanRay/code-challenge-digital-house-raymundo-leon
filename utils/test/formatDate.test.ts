import { formatDate } from  '../formatDate';

describe('formatDate', () => {
  test('should return a correct formated date', () => {
    const formatedDate = formatDate('2022-12-09T06:34:25.607Z');
    expect(formatedDate).toBe('8 de diciembre, 2022');
  });
});
