import { ClerkProvider } from '@clerk/nextjs';
import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { frFR } from '@clerk/localizations';

import Topbar from '@/components/shared/Topbar';
import LeftSideBar from '@/components/shared/LeftSidebar';
import RightSideBar from '@/components/shared/RightSidebar';
import Bottombar from '@/components/shared/Bottombar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Threads',
  description: 'Threads clone in Nextjs 13',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider localization={frFR}>
      <html lang="fr">
        <body className={`${inter.className} bg-dark-1`}>
          <Topbar />
          <main className="flex flex-row">
            <LeftSideBar />
            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
            <RightSideBar />
          </main>
          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  );
}
