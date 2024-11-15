import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// import files 







// end files import 

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Online Store",
  description: "Design and Created By Brisco_X",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // wrap clearkprovider and store provider
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
         {/*nav bar  */}

        {children}

        {/*footer */}
      </body>
    </html>

    // wrap the above 
  );
}
