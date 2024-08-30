
import Navbar from '@/components/shared/Navbar';
import './globals.css';
import Sidebar from '@/components/shared/Sidebar';
import Footer from '@/components/shared/Footer';
import InfintyProvider from '@/providers/InfintyProvider';


export const metadata = {
  title: 'My Monday Clone',
  description: 'A clone of Monday.com built with Next.js and TypeScript',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <InfintyProvider>
    <html lang="en">
      <body>
          {/* <Navbar /> */}
          <div className="flex">
            <main className="p-4">{children}</main>
          </div>
          {/* <Footer /> */}
      </body>

    </html>
    </InfintyProvider>
  );
}
