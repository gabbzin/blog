import type { Metadata } from "next";
import "./globals.css";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import AppleStyleDock from "@/components/Dock";

export const metadata: Metadata = {
  title: {
    default: "The Blog",
    template: "%s | The Blog",
  },
  description: "Blog criado com fins educativos",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-BR">
      <body>
        <Container>
          <Header />

          {children}

          <Footer />
        </Container>
        <div className="sticky hover:bottom-2 -bottom-5 transition-all duration-300">
          <AppleStyleDock />
        </div>
      </body>
    </html>
  );
}
