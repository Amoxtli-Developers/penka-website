import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';
import { poppins } from './fonts';

export const metadata: Metadata = {
  title: 'La Penka Del Haragan',
  description: 'Bar rural con ambiente divertido, música en vivo y bebidas artesanales',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={poppins.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
