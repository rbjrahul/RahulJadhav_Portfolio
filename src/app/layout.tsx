import type { Metadata } from "next";
import localFont from "next/font/local";
import { Bricolage_Grotesque, Oswald } from "next/font/google";
import "./globals.css";
import { cn } from "../../lib/util";

// fonts
const Mainfont = Bricolage_Grotesque({ subsets: ["latin"] });
const Oswaldfont = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const pixelFont = localFont({
  src: "../../public/assets/fonts/Pixelate-Regular.ttf",
  variable: "--font-pixel",
});
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Rahul Jadhav",
  description: "Rahul Jadhav Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          Mainfont.className,
          Oswaldfont.variable,
          pixelFont.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
