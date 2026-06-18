import type { Metadata } from 'next';
import { Karla } from 'next/font/google';
import './globals.css';

const karlaSans = Karla({
  variable: '--font-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Frontend Mentor | Contact form',
  description:
    'A responsive contact form built as part of a Frontend Mentor challenge, featuring form validation, accessible inputs, and modern UI design.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${karlaSans.className} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
