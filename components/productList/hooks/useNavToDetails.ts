import { useNavigation } from "expo-router";
import { Product } from '../../../types/product';

const useNavToDetails = ({ product, points, image, createdAt, is_redemption }: Product) => {
  const navigation = useNavigation();

  const navigateToDetails = () => {
    navigation.navigate('details' as never, { product, points, image, createdAt, is_redemption } as never);
  }

  return { navigateToDetails }
}

export { useNavToDetails }