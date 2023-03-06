import { useNavigation } from 'expo-router';

const useGoBack = () => {
  const navigation = useNavigation();

  const goBack = () => navigation.goBack();

  return { goBack };
}

export { useGoBack };
