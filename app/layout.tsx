import './global.css';
import Link from 'next/link';

export default function RootLayout({ children }) {
  const meta = {
    title:
      'dsmtech - The best tech companies and startups in the Greater Des Moines area.',
    description:
      'Discover 40+ of the best tech companies and startups in Des Moines with direct links to their careers pages.',
    cardImage: '/og.jpg'
  };

  return (
    <html lang="en">
      <head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://dsmtech.io`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="dsmtech" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.cardImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@leeerob" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.cardImage} />
      </head>
      <body className="bg-gray-100">
        <nav>
          <a href="#skip" className="sr-only focus:not-sr-only">
            Skip to content
          </a>
          <div className="flex justify-between items-center p-8 mx-2">
            <Link href="/" className="no-underline font-semibold">
              <h1>dsmtech</h1>
            </Link>
            <ul className="flex justify-between items-center space-x-4">
              <li>
                <Link
                  href="/about"
                  className="no-underline font-semibold text-gray-700"
                >
                  about
                </Link>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/leerob/dsmtech"
                  className="no-underline font-semibold text-gray-700"
                >
                  github
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div id="skip">{children}</div>
      </body>
    </html>
  );
}
