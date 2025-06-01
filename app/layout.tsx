import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'IT Consultoria',
  description: 'Impulsionando a transformação de pessoas e negócios',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
