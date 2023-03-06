import { ProductsObject } from '../types/productsObject';

export function sumPoints({ products }: ProductsObject): number {
  const unredeemedPoints = products.filter((product) => !product.is_redemption);
  return unredeemedPoints.reduce((totalPoints, product) => totalPoints + product.points, 0);
}
