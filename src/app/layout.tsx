import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/ui/nav";
import { CartProvider } from "@/context/cart-context";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bamer - Gaming and eSports Website",
  description: "Your ultimate destination for gaming and eSports content",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CartProvider>
            <Nav />
            <main className="min-h-screen bg-background">
        {children}
            </main>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
