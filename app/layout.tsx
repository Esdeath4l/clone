import './global.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'KonnectBooks Clone',
  description: 'Clone of KonnectBooks landing page',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
