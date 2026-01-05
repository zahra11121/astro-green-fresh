// src/middleware.js
export function onRequest({ request }, next) {
  const url = new URL(request.url);

  // Jika URL diakhiri dengan '/' dan bukan root '/'
  if (url.pathname.endsWith('/') && url.pathname !== '/') {
    const newPathname = url.pathname.slice(0, -1);
    const newUrl = new URL(newPathname, url.origin);
    
    // Paksa redirect ke URL tanpa slash
    return Response.redirect(newUrl.toString(), 301);
  }

  return next();
}