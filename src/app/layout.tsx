import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import {
  ClerkProvider,
  // SignedIn,
  // UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import GridOverlay from "@/components/GridOverlay";


const inter = Inter({
    variable: "--font-body",
    subsets: ["latin"],
})
const raleway = Raleway({
    subsets: ["latin"],
    variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Knowlith",
  description: "Nex level AI learning tool",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${inter.variable} ${raleway.variable}`}>
        <body>
          {/*<header>*/}
          {/*  <SignedIn>*/}
          {/*    <UserButton />*/}
          {/*  </SignedIn>*/}
          {/*</header>*/}
          {children}
          {/*<GridOverlay show={true}></GridOverlay>*/}
        </body>
      </html>
    </ClerkProvider>
  );
}
