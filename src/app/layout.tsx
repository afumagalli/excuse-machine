import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Excuse Machine",
  description: "Submit and upvote excuses for late assignments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
