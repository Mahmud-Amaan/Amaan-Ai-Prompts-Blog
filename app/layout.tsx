import "@styles/globals.css";
import type { Metadata } from "next";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import { getServerSession } from "next-auth/next";

export const metadata: Metadata = {
  title: "Amaan || Ai Prompts",
  description: "Discover & Share Useful and Wonderful AI-Powered Prompts",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="assets/images/logo.svg" />
        <meta name="og:image" content="assets/images/Website.png" />
        <meta name="og:type" content="Ai Prompts Blog" />
        <meta name="og:title" content="Amaan Ai Prompts Blog" />
        <meta name="og:site_name" content="Ai Blog" />
        <meta
          name="og:description"
          content="Discover & Share Useful and Wonderful AI-Powered Prompts"
        />
      </head>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
