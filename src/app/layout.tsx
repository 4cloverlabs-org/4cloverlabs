import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

// Using Playfair Display as an open-source placeholder for the commercial Abigeta font
const abigetaPlaceholder = Playfair_Display({
  variable: "--font-abigeta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.4cloverlabs.com"),
  title: "4CloverLabs",
  description: "Intelligence built into every insight",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "4CloverLabs",
    description: "Intelligence built into every insight",
    url: "https://www.4cloverlabs.com",
    siteName: "4CloverLabs",
    images: [
      {
        url: "/4cloverlabs-favicon.png",
        width: 512,
        height: 512,
        alt: "4CloverLabs Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "4CloverLabs",
    "url": "https://www.4cloverlabs.com",
    "logo": "https://www.4cloverlabs.com/4cloverlabs-favicon.png",
    "image": "https://www.4cloverlabs.com/4cloverlabs-favicon.png",
    "sameAs": [
      "https://www.4cloverlabs.com"
    ]
  };

  return (
    <html
      lang="en"
      className={`${abigetaPlaceholder.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
