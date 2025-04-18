import "./globals.css";
import Header from './components/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-black text-white">
        <Header /> {/* 👈 le menu en haut */}
        {children}
      </body>
    </html>
  );
}
