import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return format(date, 'd \'de\' MMMM, yyyy', { locale: es });
};

export { formatDate };
