import { Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Matt Saemrow",
  description: "Full Stack Developer | Outdoors Enthusiast",
};

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${oswald.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
