import Navbar from '@/components/shared/Navbar';
import '../globals.css';
import Sidebar from '@/components/shared/Sidebar';
import Footer from '@/components/shared/Footer';
import { ThemeProvider } from '@/context/ThemeContext';

export const metadata = {
  title: 'My Monday Clone',
  description: 'A clone of Monday.com built with Next.js and TypeScript',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<>

          {/* <Navbar /> */}
          <div className="flex  w-full ">
            <main className="flex-grow   w-full ">{children}</main>
          </div>
          {/* <Footer /> */}
  </>
  );
}
