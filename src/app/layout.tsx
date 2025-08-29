import "./globals.css";
import Header from "@/components/layout/Header";
// import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Savico",
  description: "Website chính thức của Savico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="font-sans antialiased">
        <Header />
        <main className="w-full overflow-hidden">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
