import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Nav/ResponsiveNav";
import MobileNav from "@/components/Home/Nav/MobileNav";

const font = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Portfolio Đoàn Anh Tài",
  description: "Portfolio Đoàn Anh Tài",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ResponsiveNav/>
        <MobileNav showNav={false} closeNav={function (): void {
          throw new Error("Function not implemented.");
        } } />
        {children}
      </body>
    </html>
  );
}
