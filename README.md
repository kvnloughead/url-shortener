# [URL Shortener Microservice](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/url-shortener-microservice)

## Usage

__Shortening a URL__

Send a `POST` request to `https://stubbyurl.herokuapp.com/api/shorturl` with a URL in its body:

```
{ 
  "url": "https://example.com"
}
```

You will receive a response containing a property `short_url` with an integer value.

```
{
  "original_url": "https://example.com",
  "short_url": "42"
}
```

__Using a shortened URL__

`GET` requests to `https://stubbyurl.herokuapp.com/api/:short_url` will be redirected to `original_url`