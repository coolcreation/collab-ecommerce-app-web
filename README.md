### Collab Ecommerce frontend Repository  
---  
`desktop-web`: contains our React desktop app  
`mobile-app`: contains our React Native mobile app  
`shared`: contains helper functions/methods/logic that can be shared between `desktop-web` & `mobile-app`  


### Architecture  
---  

```mermaid
---
config:
  theme: dark
---

architecture-beta

    group api[eCommerce Web and Mobile App with API on Cloud]

      service db(database)[Mongo DB on Atlas] in api  
      service web(server) [Web Site or Mobile App] in api
      service auth(server) [OAuth SSO] in api
      service server(server)[API Server] in api

      db:L -- R:server
      web:R -- L:server
      web:T -- L:auth
```
