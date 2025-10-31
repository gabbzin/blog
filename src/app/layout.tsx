import type { Metadata } from "next";
import "./globals.css";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: {
    default: "The Blog",
    template: "%s | The Blog"
  },
  description: "Blog criado com fins educativos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Container>
          <Header />
          {children}

          <footer>
            <h2>Aqui é o FOOTER</h2>
          </footer>
        </Container>
      </body>
    </html>
  );
}
