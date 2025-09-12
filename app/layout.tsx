import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "./fonts";
import Navbar from "@/components/ui/foundations/common/navbar";

export const metadata: Metadata = {
  title: "Travel Arrangers Inc. | Trusted Travel Agency Mississauga",
  description: "Book flights, vacations & corporate travel with Travel Arrangers Inc. TICO licensed, 20+ years of expertise, and personalized service in Mississauga.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${montserrat.className} ${montserrat.variable}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
