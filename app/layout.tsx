import "./globals.css";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { ThemeProvider } from "../components/theme-provider";
import Navbar from "../components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "RUDI | Portofolio",
  description: "App with dark/light mode navbar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${cormorant.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main
            className="p-4 border-b shadow-sm grid"
            style={{ minHeight: "83vh" }}
          >
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
