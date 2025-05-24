import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Acha Patas",
  description: "Aplicativo de adoção de pets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
