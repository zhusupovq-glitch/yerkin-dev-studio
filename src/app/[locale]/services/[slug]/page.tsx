import { notFound } from 'next/navigation';
import { servicesDetail } from '@/data/services-detail';
import ServiceDetailPage from '@/components/ServiceDetailPage';

export async function generateStaticParams() {
  return servicesDetail.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServicePage({ 
  params 
}: { 
  params: { slug: string; locale: string } 
}) {
  const locale = params.locale as 'ru' | 'en';
  const service = servicesDetail.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} locale={locale} />;
}
