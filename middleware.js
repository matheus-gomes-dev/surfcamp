import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextResponse } from "next/server";

const locales = ['en', 'pt']
const defaultLocale = 'en'

const getLocale = (request) => {
  // Get the accept-language header from the request
  const acceptedLanguages = request.headers.get('accept-language') ?? undefined
  
  // Create headers object for negotiator
  const headers = { 'accept-language': acceptedLanguages }
  
  // Get languages from the negotiator
  const languages = new Negotiator({ headers }).languages()
  
  // Match the best locale
  return match(languages, locales, defaultLocale)
}

export function middleware(request) {
  const { pathname } = request.nextUrl
  
  // Skip static files and API routes
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    pathname.includes('.') // Skip all files with extensions (images, videos, etc.)
  ) {
    return
  }
  
  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
 
  if (pathnameHasLocale) return

  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip static files and internal paths
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*$).*)'
  ],
}