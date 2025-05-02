import Navbar from '@/components/common/NavBar/NavBar';

interface LayoutProps {
  children: React.ReactNode;
  isLoggedIn: boolean; 
}

export default function Layout({ children, isLoggedIn }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isLoggedIn={isLoggedIn} /> 
      <main className="flex-1">{children}</main>
    </div>
  );
}
