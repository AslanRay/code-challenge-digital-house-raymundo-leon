import { Product } from './product';

export type ApiData = {
  data: Product[];
  error: string;
  loading: boolean;
  mockReturnValue?: {
    data: Product[];
    error: string;
    loading: boolean;
  }
}