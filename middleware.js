export default async function middleware(req) {
  const { pathname } = req.nextUrl;
  // GET /_next/data/build-id/hello.json
  // console.log('middleware pathname.... ', pathname);
  // with the flag this now /_next/data/build-id/hello.json
  // without the flag this would be normalized to /hello
}
