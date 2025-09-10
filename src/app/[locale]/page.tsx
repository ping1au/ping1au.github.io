import HomeClient from './HomeClient';

export default function HomePage() {
  return <HomeClient />;
}
export async function generateStaticParams() {
    console.log('Generating static params for [locale]...');
    return [{ locale: 'en' }, { locale: 'fr' }];
}



