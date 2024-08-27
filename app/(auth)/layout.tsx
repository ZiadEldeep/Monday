import Navbar from '@/components/shared/Navbar';
import '../globals.css';
import Sidebar from '@/components/shared/Sidebar';
import Footer from '@/components/shared/Footer';
import { ThemeProvider } from '@/context/ThemeContext';


export const metadata = {
  title: 'My Monday Clone',
  description: 'A clone of Monday.com built with Next.js and TypeScript',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <Navbar/>
        <div className="flex flex-col min-h-screen justify-center items-center">
          <main className="flex-grow p-4 ">{children}</main>
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
