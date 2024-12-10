import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';

export function formatDate(date: Date | string, formatStr: string = 'dd MMMM yyyy'): string {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, formatStr, { locale: fr });
}

export function formatPublicationDate(date: Date | string): string {
  return formatDate(date, 'dd MMMM yyyy');
}

export function formatISODate(date: Date | string): string {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return dateObj.toISOString();
}
