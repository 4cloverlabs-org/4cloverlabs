import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

// Using Playfair Display as an open-source placeholder for the commercial Abigeta font
const abigetaPlaceholder = Playfair_Display({
  variable: "--font-abigeta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "4CloverLabs",
  description: "Intelligence built into every insight",
  icons: {
    icon: "/4cloverlabs-favicon.png"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${abigetaPlaceholder.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
