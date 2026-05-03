import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TaxScan – Receipt Scanner for Freelancer Tax Deductions",
  description: "Scan receipts, categorize business expenses, and generate IRS-compliant tax reports. Built for independent contractors and freelancers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6b672643-968e-4231-a8a1-5c60ba83cc7b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
