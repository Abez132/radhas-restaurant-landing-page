import type { Metadata } from "next";
import { Playfair_Display, Poppins, Noto_Sans_Ethiopic } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const notoEthiopic = Noto_Sans_Ethiopic({
  subsets: ["ethiopic"],
  weight: ["400", "500"],
  variable: "--font-noto-ethiopic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Radha's Indian Restaurant & Bar | Bole Japan, Addis Ababa",
  description:
    "Authentic Indian cuisine in the heart of Addis Ababa. Tandoori specialties, biryani, vegetarian & vegan dishes, private dining, and a full-service bar in Bole Japan.",
  keywords: [
    "Indian restaurant Addis Ababa",
    "Radha's Indian Restaurant",
    "Bole Japan restaurant",
    "Indian food Ethiopia",
    "fine dining Addis Ababa",
  ],
  openGraph: {
    title: "Radha's Indian Restaurant & Bar",
    description:
      "Authentic Indian flavors in the heart of Addis Ababa. Reserve your table today.",
    locale: "en_ET",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${poppins.variable} ${notoEthiopic.variable} font-body`}
      >
        {children}
      </body>
    </html>
  );
}
