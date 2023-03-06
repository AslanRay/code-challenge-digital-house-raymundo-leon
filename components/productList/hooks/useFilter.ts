import { useState, useMemo } from 'react';
import { FilterProps } from '../types/filterProps';
import { FilterReturn } from '../types/filterReturn';
import { Transaction, TransactionProp } from '../../../types/transaction';

const useFilter = ({ data }: FilterProps): FilterReturn => {
  const [showFiltered, setShowFiltered] = useState(false);
  const [transaction, setTransaction] = useState(Transaction.All);

  const toggleRedemption = ({ transaction }: TransactionProp) => {
    setTransaction(transaction);
    setShowFiltered((prev) => !prev);
  };

  const filteredData = useMemo(() => {
    if (!showFiltered) {
      return data;
    }
    if (transaction === Transaction.Earned) {
      return data.filter((item) => !item.is_redemption);
    }
    return data.filter((item) => item.is_redemption);
  }, [showFiltered, data]);

  return { filteredData, toggleRedemption, showFiltered };
};

export { useFilter };
