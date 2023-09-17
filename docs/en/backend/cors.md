# CORS

:::: What are CORS?

Roughly speaking, CORS is used to protect your backend from outside requests by setting special HTTP headers.

More specifically, CORS (Cross-Origin Resource Sharing) is a standard that allows web pages to access objects from third-party Internet resources.
A third-party resource is any Internet resource that differs from the requested one in protocol, domain, or port.

Access is granted by specialized requests. The Internet resource that receives the request contains a list of trusted sources that are allowed to access the objects. The source page of the request is granted access if it is on the list of trusted sources. The "\*" mask is used to grant access to all third-party web pages.

Accordingly, only the backend can do all this, and it is configured on the backend. The specific solution depends on the backend language, the framework used, and even the webserver.

:::
:::: details CORS working principle

When creating an HTTP cross-request, the client browser adds a domain declaration of the web page initiating the request. The domain is declared in the Origin section.

For example, the page https://client-1.ru/page.html requests data from the page https://server-site.ru/info.
An example of a request from a client browser using CORS methods is shown below:

```
GET /info HTTP/1.1
Host: server-site.ru
Origin: client-1.ru
```

If the server at www.server-site.ru allows the request source page to access data from the domain, the `Access-Control-Allow-Origin` line with the name of the declared domain will appear in its response to the request:

```
Access-Control-Allow-Origin: https://client-1.ru
```

If the server to which access is requested does not add the specified string to the response, the client browser will return an error code instead of the info file data.

If the server allows pages from any third-party domain to access the resource, the response will contain the "\*" mask.

```
Access-Control-Allow-Origin: *
```

If the server allows access not to all but a few third-party clients, the server response contains the names of all these domains printed as separate lines or separated by spaces:

```
Access-Control-Allow-Origin: https://client-1.ru https://client-2.ru https://client-3.ru
```

There is a lot of nuance in the CORS standard. Here is a more detailed [article on CORS](https://habr.com/ru/companies/macloud/articles/553826/)

:::

:::: details Problems with CORS

CORS problems can occur only when a resource is accessed by a browser, not by a separate program like Postman or other backend.

As a temporary solution [CORS proxy](https://www.google.com/search?q=CORS+proxy), which becomes an intermediary between frontend and backend, or [browser extensions](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf) can help during development.

:::
