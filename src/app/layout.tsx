import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import GridOverlay from "@/components/GridOverlay";

const inter = Inter({
    variable: "--font-heading",
    subsets: ["latin"],
})
const raleway = Raleway({
    subsets: ["latin"],
    variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Knowlith",
  description: "Nex level AI learning tool",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
      <html lang="en" className={`${inter.variable} ${raleway.variable}`}>
        <body>{children}</body>
        <GridOverlay show={true}></GridOverlay>
      </html>
  );
}
