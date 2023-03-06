import { useGoBack } from '../useGoBack';
import { useNavigation } from 'expo-router';

jest.mock('expo-router', () => ({
  useNavigation: jest.fn(() => ({ goBack: jest.fn() }))
}));

describe('useGoBack', () => {
  it('should return a function', () => {
    const { goBack } = useGoBack();
    expect(typeof goBack).toBe('function');
  });

  it('should call goBack from navigation when goBack function is called', () => {
    const goBackMock = jest.fn();
    useNavigation.mockReturnValue({ goBack: goBackMock });

    const { goBack } = useGoBack();
    goBack();

    expect(goBackMock).toHaveBeenCalled();
  });
});
