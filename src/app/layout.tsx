import Footer from "@/app/_components/footer";
import Navigation from "@/app//_components/navigation";
import "./globals.css";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({children}: Props) {
  return children;
}
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   //return children;
//   return (
//     <html lang="en">
//       <head>
//         <link rel='icon' href='/favicon.ico'/>
//       </head>
//       <body className={inter.className}>
//         <Navigation />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }