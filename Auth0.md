Auth0 is a software development kit (SDK) that uses the OAuth 2.0 authorization framework to add authentication and authorization to applications. In this project, it is being used for:

-User login, logout, and redirect to dashboard
-Access to user profile data
-Route protection for authenticated users

Allowed Callback URLs (only allowed callbacks after user authentication):
http://localhost:5173/,
http://localhost:5173/HomePage, 
http://localhost:5173/user-dashboard

Allowed Logout URLs (only allowed URL redirects after logout):
http://localhost:5173/, 
http://localhost:5173/HomePage, 
http://localhost:5173/UserDashboard

Allowed Web origins (only allowed origins for use with
-Cross-Origin Authentication
-Device Flow
-Web message response mode):
http://localhost:5173, 
http://localhost:5173/HomePage, 
http://localhost:5173/products, 
http://localhost:5173/products/1, 
http://localhost:5173/products/2, 
http://localhost:5173/?

To install run:
npm install @auth0/auth0-react

Implementation:

domain: endpoint for associated Auth0 account (We are all operating from a single account)

clientId: public identifier, points to specific application(A single account may have multiple applications) Auth0 will reference for authentication/authorization settings

authorizationParams: object, contains parameters that are passed to Auth0 when initiating the login flow. Most common fields are:
    -redirect_uri: The URL to return to after login. Can be window.location.origin or a specific route
    -scope: Permissions requested
    -audience: The API to access on behalf of user. This field is required for issuing access tokens to protected APIs
    -state:	Sets custom value to maintain state between request and callback
    -prompt	Forces login behavior

Auth0Provider: React context provider. This wraps the App in main.jsx and makes authentication state and methods available using the useAuth0() hook

Resources:
https://auth0.com/docs/get-started/auth0-overview
https://datatracker.ietf.org/doc/html/rfc6749

