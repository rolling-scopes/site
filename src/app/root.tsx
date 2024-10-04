import { Outlet, Scripts, ScrollRestoration } from 'react-router';
import { Footer, Header, Partnered, ScrollToHashElement } from './layouts/base-layout/components';

import './app.scss';
import './styles/index.scss';

function App() {
  // If we are on https://rollingscopes.com/, a redirect to https://rs.school/ is triggered.
  // if (window.location.hostname.includes('rollingscopes.com')) {
  //   window.location.href = 'https://rs.school';
  // }

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="RS School offers free, community-driven education courses run by The Rolling Scopes developer community since 2013. Enhance your web development, JavaScript, and front-end skills with us."
        />
        <title>RS Site</title>
      </head>
      <body>
        <ScrollToHashElement />
        <Header />
        <Outlet />
        <Partnered />
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default App;

// <div className="app-styles">
//   <NextTopLoader
//     color="black"
//     initialPosition={0.0001}
//     crawl={false}
//     easing="ease-in-out"
//     showSpinner={false}
//     speed={300}
//   />
//   <RouterProvider router={router} data-testid="router-provider" />
// </div>
