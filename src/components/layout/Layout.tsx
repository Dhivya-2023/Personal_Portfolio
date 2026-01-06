import { ReactNode } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { ChatWidget } from '@/components/ChatWidget';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-4 lg:pt-5">{children}</main>
      <Footer />
      <ChatWidget />
    </div>
  );
};
