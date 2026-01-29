import { headers } from 'next/headers';
import { redirect } from 'next/navigation'

export default async function RootPage() {
  const headersList = await headers()
  const lang = headersList.get('x-locale') || 'en'
  if (lang === 'pt') {
    redirect('/pt')
  } else {
    redirect('/en')
  }
}