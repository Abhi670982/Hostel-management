import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LuxStay — Premium Hostel Living",
  description: "Experience luxury hostel living reimagined. Premium rooms, world-class amenities, and a vibrant community at LuxStay.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
