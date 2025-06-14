import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const allowedOrigins = [
  'https://intellisync.io',
  'https://www.intellisync.io',
  'https://intellisync-solutions.vercel.app',
];

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Handle preflight requests
  if (request.method === 'OPTIONS') {
    const requestHeaders = new Headers(request.headers);
    const origin = requestHeaders.get('origin');

    if (origin && allowedOrigins.includes(origin)) {
      const response = new Response(null, { status: 204 });
      response.headers.set('Access-Control-Allow-Origin', origin);
      response.headers.set('Access-Control-Allow-Credentials', 'true');
      response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      return response;
    }
  }

  // Handle actual requests
  const response = NextResponse.next();
  const origin = request.headers.get('origin');

  if (origin && allowedOrigins.includes(origin)) {
    response.headers.set('Access-Control-Allow-Origin', origin);
    response.headers.set('Access-Control-Allow-Credentials', 'true');
  }

  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/api/:path*',
};
