import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3001"),

  title: "Abdusamed Abdullahi's portfolio website",

  authors: {
    name: "Abdusamed Abdullahi",
  },

  description:
    "A FullStack developer passionate about building software and modern web applications",
  openGraph: {
    title: "Abdusamed Abdullahi's portfolio website",
    description:
      "A FullStack developer passionate about building software and modern web applications",
    url: "http://localhost:3001",
    siteName: "Abdusamed Abdullahi's portfolio website",
    images: "/og.png",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
