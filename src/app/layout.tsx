import Footer from "./_components/footer";
import Navigation from "./_components/navigation";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FDC Renovations",
  description: "From plumbing, electrical, framing to detailed millwork and final paint we provide turnkey profession.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}