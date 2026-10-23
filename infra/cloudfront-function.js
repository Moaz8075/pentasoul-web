// CloudFront viewer-request function for www.pentasoul.com (distribution EMGQWX8OFHOWM).
// Runtime: cloudfront-js-2.0. Deploy with infra/deploy-function.sh.
//
//  pentasoul.com/...   -> 301 https://www.pentasoul.com/...   (one canonical host)
//  /work               -> 301 /products/                      (old URL)
//  /about              -> 301 /about/                         (one canonical URL per page)
//  /about/             -> serves /about/index.html            (S3 has no directory indexes)
function handler(event) {
  var req = event.request;
  var host = req.headers.host ? req.headers.host.value : '';
  var uri = req.uri;
  var qs = Object.keys(req.querystring).length
    ? '?' + Object.keys(req.querystring).map(function (k) { return k + '=' + req.querystring[k].value; }).join('&')
    : '';

  function redirect(location) {
    return { statusCode: 301, statusDescription: 'Moved Permanently', headers: { location: { value: location } } };
  }

  if (host === 'pentasoul.com') return redirect('https://www.pentasoul.com' + uri + qs);
  if (uri === '/work' || uri === '/work/') return redirect('/products/' + qs);

  if (uri.endsWith('/')) {
    req.uri = uri + 'index.html';
    return req;
  }
  var last = uri.substring(uri.lastIndexOf('/') + 1);
  if (last.indexOf('.') === -1) return redirect(uri + '/' + qs);
  return req;
}
