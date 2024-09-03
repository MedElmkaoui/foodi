import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Container from "@/components/common/Container";


export const metadata: Metadata = {
  title: "Foodi",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'text-inter'}>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
