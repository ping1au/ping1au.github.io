'use client';
import Error from 'next/error';
import Footer from "@/app/_components/footer";
import Navigation from "@/app/_components/navigation";
import { NextIntlClientProvider } from 'next-intl';
import {redirect} from 'next/navigation';

// export default function NotFound() {
//     redirect('/en/not-found');
// }

export const dynamicParams = false;

export default function NotFound() {
    return (
      <html lang="en">
        <body>
          <Error statusCode={404} />
        </body>
      </html>
    );
  }