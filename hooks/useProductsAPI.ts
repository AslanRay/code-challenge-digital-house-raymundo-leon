import { useState, useEffect } from 'react';
import { ApiData } from  '../types/apiData';
import { Product } from  '../types/product';


const useProductsAPI = (): ApiData => {
  const [data, setData] = useState<Product[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://6222994f666291106a29f999.mockapi.io/api/v1/products');
        const json = await response.json();
        setData(json);
      } catch (e) {
        setError('Error fetching data');
      }
      setLoading(false);
    };
    fetchProducts();
  }, []);

  return { data, error, loading };
};

export { useProductsAPI };
