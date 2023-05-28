import {
  Montserrat,
  Inter,
  Poppins,
  Open_Sans,
  Roboto,
  Playfair_Display,
} from "next/font/google";

import localFont from "next/font/local";

const verdana = localFont({
  src: "../public/verdana-font-family/verdana.ttf",
  variable: "--font-verdana",
});

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const inter = Inter({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const openSans = Open_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const playfair = Playfair_Display({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

export { montserrat, inter, poppins, openSans, roboto, playfair, verdana };
