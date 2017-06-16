# Cookies!

Cookies are a way of storing information on the client side that can persist between pages (so, GET requests).

## Cookies in Express

```
const cookieParser = require('cookie-parser');

// Middleware
app.use(cookieParser());

```

### Getting cookies:
```
// Cookie: name=tj
req.cookies.name
// => "tj"
```

### Setting cookies:
```
res.cookie('name', 'tobi');
```

### Destroying Cookies
```
res.clearCookie('name');
```

### Other stuff

- If no cookies are defined in the browser, `req.cookies` will be an empty object.
- Multiple calls to `res.cookie(...)` will add more key-value pairs to the browser
- Multiple cookies will be represented as multiple key-value pairs in `req.cookies`

So, if we set multiple cookies like so:

```javascript
res.cookie('name', 'bartholemew');
res.cookie('occupation', 'squire');
```

Then in a later request-response cycle, `req.cookies` is:

```javascript
{name: 'bartholemew',
 occupation: 'squire'}
```
