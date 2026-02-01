import { Metadata } from 'next';
import { CarAndDriverHomepage } from '@/components/CarAndDriverHomepage';

export const metadata: Metadata = {
  title: 'Car and Driver Homepage',
  description: 'Car and Driver publication homepage design',
};

export default function HomepagePage() {
  return <CarAndDriverHomepage />;
}
