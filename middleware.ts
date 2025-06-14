// middleware.ts
export const config = {
  matcher: '/api/:path*',
};

const allowedOrigins = [
  'https://intellisync.io',
  'https://www.intellisync.io',
  'https://intellisync-solutions.vercel.app',
];

export default function middleware(request: Request) {
  const origin = request.headers.get('origin');

  // Handle preflighted requests by returning a response with the correct headers.
  if (
    request.method === 'OPTIONS' &&
    origin &&
    allowedOrigins.includes(origin)
  ) {
    return new Response(null, {
      status: 204, // No Content
      headers: {
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Credentials': 'true',
      },
    });
  }

  // For all other requests, let them pass through to the origin serverless function.
  // The `cors` middleware in `server.js` will handle adding headers to the actual response.
  return;
}
