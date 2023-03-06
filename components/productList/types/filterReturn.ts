import { Product } from '../../../types/product';
import { TransactionProp } from '../../../types/transaction';

export type FilterReturn = {
  filteredData: Product[];
  toggleRedemption: ({}: TransactionProp) => void;
  showFiltered: boolean;
};