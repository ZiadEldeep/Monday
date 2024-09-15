import Navbar from '@/components/shared/Navbar';
import '../../globals.css';
import Sidebar from '@/components/shared/Sidebar';
import Footer from '@/components/shared/Footer';
import { ThemeProvider } from '@/context/ThemeContext';
import AppHeader from '@/components/shared/header';
import LeftSidebar from '@/components/shared/leftSidebar';

export const metadata = {
  title: 'My Monday Clone',
  description: 'A clone of Monday.com built with Next.js and TypeScript',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (

      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          {/* <Navbar /> */}
          <AppHeader/>
          <div className="flex">
            <LeftSidebar/>
            <main className="flex-grow p-4">{children}</main>
          </div>
          {/* <Footer /> */}
        </ThemeProvider>
  );
}
